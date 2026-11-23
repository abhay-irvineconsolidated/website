"use client";

import { useEffect, useId, useState, type ReactNode } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/constants/site";
import { cn } from "@/lib/utils";

export const interests = [
  { value: "ai", label: "AI Solutions" },
  { value: "software", label: "Software & Workflows" },
  { value: "workday", label: "Enterprise Solutions (Workday)" },
  { value: "product", label: "Reward My Team demo" },
  { value: "careers", label: "Careers / Talent Network" },
  { value: "media", label: "Media enquiry" },
  { value: "other", label: "Something else" },
] as const;

type Interest = (typeof interests)[number]["value"];
const interestValues = interests.map((i) => i.value) as [Interest, ...Interest[]];

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  email: z.email("Please enter a valid email address."),
  company: z.string().trim().max(120).optional(),
  interest: z.enum(interestValues, { error: "Please choose what this is about." }),
  message: z
    .string()
    .trim()
    .min(20, "Please tell us a little more (at least 20 characters).")
    .max(4000, "Please keep your message under 4,000 characters."),
  /** Honeypot: real visitors never see or fill this. */
  website: z.string().max(0).optional(),
});

type FormValues = z.infer<typeof schema>;

/** Optional: a form backend (HubSpot, Formspree, an API route…). Without it, the form opens an email. */
const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;

type Status = { kind: "idle" } | { kind: "sent" } | { kind: "mailto" } | { kind: "error" };

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", company: "", message: "", website: "" },
  });

  // Pre-select the topic from links such as /contact/?interest=careers.
  useEffect(() => {
    const value = new URLSearchParams(window.location.search).get("interest");
    if (value && interestValues.includes(value as Interest)) {
      setValue("interest", value as Interest);
    }
  }, [setValue]);

  async function onSubmit(values: FormValues) {
    if (values.website) return; // bot
    const topic = interests.find((i) => i.value === values.interest)?.label ?? "Enquiry";

    if (endpoint) {
      try {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ ...values, topic, website: undefined }),
        });
        if (!res.ok) throw new Error(String(res.status));
        reset();
        setStatus({ kind: "sent" });
      } catch {
        setStatus({ kind: "error" });
      }
      return;
    }

    const body = [
      values.message,
      "",
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      values.company ? `Company: ${values.company}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    const to = values.interest === "media" ? site.mediaEmail : site.email;
    window.location.assign(
      `mailto:${to}?subject=${encodeURIComponent(`${topic}: ${values.name}`)}&body=${encodeURIComponent(body)}`,
    );
    setStatus({ kind: "mailto" });
  }

  if (status.kind === "sent") {
    return (
      <div role="status" className="flex flex-col items-start py-6">
        <CheckCircle2 aria-hidden="true" className="size-10 text-turquoise-700" />
        <h3 className="mt-5 text-h3">Thank you. Your message is on its way.</h3>
        <p className="mt-3 text-slate-600">
          We’ll reply to the email address you gave us. You can also reach us at{" "}
          <a className="text-electric-600 underline" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          .
        </p>
        <Button
          variant="outline-light"
          className="mt-8"
          onClick={() => setStatus({ kind: "idle" })}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" error={errors.name?.message} required>
          {(p) => <input {...p} {...register("name")} autoComplete="name" />}
        </Field>
        <Field label="Business email" error={errors.email?.message} required>
          {(p) => <input {...p} {...register("email")} type="email" autoComplete="email" />}
        </Field>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Company" error={errors.company?.message}>
          {(p) => <input {...p} {...register("company")} autoComplete="organization" />}
        </Field>
        <Field label="What is this about?" error={errors.interest?.message} required>
          {(p) => (
            <select {...p} {...register("interest")} defaultValue="">
              <option value="" disabled>
                Choose a topic
              </option>
              {interests.map((i) => (
                <option key={i.value} value={i.value}>
                  {i.label}
                </option>
              ))}
            </select>
          )}
        </Field>
      </div>
      <Field label="How can we help?" error={errors.message?.message} required>
        {(p) => <textarea {...p} {...register("message")} rows={6} />}
      </Field>

      {/* Honeypot, hidden from people and assistive technology. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label>
          Website
          <input tabIndex={-1} autoComplete="off" {...register("website")} />
        </label>
      </div>

      <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-600">
          We only use your details to reply. See our{" "}
          <Link href="/privacy-policy/" className="text-electric-600 underline">
            privacy policy
          </Link>
          .
        </p>
        <Button type="submit" size="lg" arrow disabled={isSubmitting} className="shrink-0">
          {isSubmitting ? "Sending…" : "Send message"}
        </Button>
      </div>

      {status.kind === "mailto" ? (
        <p
          role="status"
          className="flex items-start gap-3 rounded-xl bg-electric-50 p-4 text-sm text-ink"
        >
          <Mail aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-electric-600" />
          Your email app should open with the message ready to send. If it doesn’t, email us at{" "}
          {site.email}.
        </p>
      ) : null}
      {status.kind === "error" ? (
        <p role="alert" className="rounded-xl bg-red-50 p-4 text-sm text-red-800">
          Sorry, the message couldn’t be sent. Please try again, or email us at {site.email}.
        </p>
      ) : null}
    </form>
  );
}

type ControlProps = {
  id: string;
  "aria-invalid": boolean;
  "aria-describedby"?: string;
  "aria-required"?: boolean;
  className: string;
};

/** Label, control and error message, wired together for screen readers. */
function Field({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: (props: ControlProps) => ReactNode;
}) {
  const id = useId();
  const errorId = `${id}-error`;
  return (
    <div className="grid gap-2">
      <label htmlFor={id} className="text-sm font-medium text-ink">
        {label}
        {required ? (
          <span aria-hidden="true" className="text-electric-600">
            {" "}
            *
          </span>
        ) : null}
      </label>
      {children({
        id,
        "aria-invalid": Boolean(error),
        "aria-describedby": error ? errorId : undefined,
        "aria-required": required,
        className: cn(
          "w-full rounded-xl border bg-white px-4 py-3 text-base text-ink transition-[border-color,box-shadow] outline-none placeholder:text-slate-500 focus:border-electric-600 focus:ring-4 focus:ring-electric-600/15",
          error ? "border-red-600" : "border-ink/15",
        ),
      })}
      {error ? (
        <p id={errorId} className="text-sm text-red-700">
          {error}
        </p>
      ) : null}
    </div>
  );
}
