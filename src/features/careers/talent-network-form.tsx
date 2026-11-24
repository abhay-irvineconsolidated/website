"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { hubspotForms, submitHubSpotForm } from "@/lib/hubspot";

/** Values must match the options on the HubSpot "talent_interest" field. */
export const talentInterests = [
  "HCM",
  "Financials",
  "Integrations",
  "Payroll",
  "Adaptive/Prism",
] as const;

const schema = z.object({
  firstname: z.string().trim().min(1, "Please enter your first name."),
  lastname: z.string().trim().min(1, "Please enter your last name."),
  email: z.email("Please enter a valid email address."),
  talent_interest: z.array(z.enum(talentInterests)).min(1, "Please choose at least one area."),
  /** Honeypot: real visitors never see or fill this. */
  website: z.string().max(0).optional(),
});

type FormValues = z.infer<typeof schema>;

type Status = "idle" | "sent" | "error";

export function TalentNetworkForm() {
  const [status, setStatus] = useState<Status>("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { firstname: "", lastname: "", email: "", talent_interest: [], website: "" },
  });

  async function onSubmit({ website, ...values }: FormValues) {
    if (website) return; // bot
    try {
      await submitHubSpotForm(hubspotForms.talentNetwork, values);
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
        <h3 className="mt-5 text-h3">Thank you for joining our Talent Network.</h3>
        <p className="mt-3 text-slate-600">
          A member of the Irvine Consolidated team will be in contact shortly.
        </p>
      </div>
    );
  }

  const interestError = errors.talent_interest?.message;

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
      <Field label="Email" error={errors.email?.message} required>
        {(p) => <input {...p} {...register("email")} type="email" autoComplete="email" />}
      </Field>

      <fieldset aria-describedby={interestError ? "talent-interest-error" : undefined}>
        <legend className="text-sm font-medium text-ink">
          Talent interest
          <span aria-hidden="true" className="text-electric-600">
            {" "}
            *
          </span>
        </legend>
        <div className="mt-3 flex flex-wrap gap-3">
          {talentInterests.map((value) => (
            <label key={value} className="cursor-pointer">
              <input
                type="checkbox"
                value={value}
                {...register("talent_interest")}
                className="peer sr-only"
              />
              <span className="block rounded-pill border border-ink/15 bg-white px-5 py-2.5 text-sm font-medium text-ink transition-colors peer-checked:border-electric-600 peer-checked:bg-electric-50 peer-checked:text-electric-600 peer-focus-visible:ring-4 peer-focus-visible:ring-electric-600/15 pointer-fine:hover:border-electric-600">
                {value}
              </span>
            </label>
          ))}
        </div>
        {interestError ? (
          <p id="talent-interest-error" className="mt-2 text-sm text-red-700">
            {interestError}
          </p>
        ) : null}
      </fieldset>

      {/* Honeypot, hidden from people and assistive technology. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label>
          Website
          <input tabIndex={-1} autoComplete="off" {...register("website")} />
        </label>
      </div>

      <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-600">
          We only use your details to contact you about roles. See our{" "}
          <Link href="/privacy-policy/" className="text-electric-600 underline">
            privacy policy
          </Link>
          .
        </p>
        <Button type="submit" size="lg" arrow disabled={isSubmitting} className="shrink-0">
          {isSubmitting ? "Joining…" : "Join the network"}
        </Button>
      </div>

      {status === "error" ? (
        <p role="alert" className="rounded-xl bg-red-50 p-4 text-sm text-red-800">
          Sorry, we couldn’t add you just now. Please try again in a moment.
        </p>
      ) : null}
    </form>
  );
}
