"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { site } from "@/constants/site";
import { hubspotForms, submitHubSpotForm } from "@/lib/hubspot";

const schema = z.object({
  firstname: z.string().trim().min(1, "Please enter your first name."),
  lastname: z.string().trim().min(1, "Please enter your last name."),
  email: z.email("Please enter a valid email address."),
  company: z.string().trim().min(1, "Please enter your company name.").max(120),
  message: z
    .string()
    .trim()
    .min(20, "Please tell us a little more (at least 20 characters).")
    .max(4000, "Please keep your message under 4,000 characters."),
  /** Honeypot: real visitors never see or fill this. */
  website: z.string().max(0).optional(),
});

type FormValues = z.infer<typeof schema>;

type Status = "idle" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      company: "",
      message: "",
      website: "",
    },
  });

  async function onSubmit({ website, ...values }: FormValues) {
    if (website) return; // bot
    try {
      await submitHubSpotForm(hubspotForms.contact, values);
      reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
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
        <Button variant="outline-light" className="mt-8" onClick={() => setStatus("idle")}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="First name" error={errors.firstname?.message} required>
          {(p) => <input {...p} {...register("firstname")} autoComplete="given-name" />}
        </Field>
        <Field label="Last name" error={errors.lastname?.message} required>
          {(p) => <input {...p} {...register("lastname")} autoComplete="family-name" />}
        </Field>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Business email" error={errors.email?.message} required>
          {(p) => <input {...p} {...register("email")} type="email" autoComplete="email" />}
        </Field>
        <Field label="Company" error={errors.company?.message} required>
          {(p) => <input {...p} {...register("company")} autoComplete="organization" />}
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

      {status === "error" ? (
        <p role="alert" className="rounded-xl bg-red-50 p-4 text-sm text-red-800">
          Sorry, the message couldn’t be sent. Please try again, or email us at {site.email}.
        </p>
      ) : null}
    </form>
  );
}
