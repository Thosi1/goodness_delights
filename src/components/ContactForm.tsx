"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import { contactFormSchema, ContactFormValues } from "@/lib/validations";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactFormSchema) });

  const onSubmit = async (_values: ContactFormValues) => {
    // NOTE: Integration point — send this payload to a real backend / email
    // service (e.g. a Next.js API route that calls Resend, SendGrid, or your CRM).
    await new Promise((r) => setTimeout(r, 700));
    setSent(true);
    reset();
  };

  if (sent) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-soft bg-cream-100 p-8 text-center">
        <CheckCircle2 className="h-10 w-10 text-gold-500" />
        <p className="font-display text-lg text-brown-800">Message sent!</p>
        <p className="font-body text-sm text-brown-600">
          Thank you for reaching out — we'll get back to you within 1 business day.
        </p>
        <button
          onClick={() => setSent(false)}
          className="mt-2 font-body text-sm text-brown-700 underline hover:text-gold-500"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full Name" error={errors.name?.message}>
          <input className={inputCls(!!errors.name)} {...register("name")} />
        </Field>
        <Field label="Email Address" error={errors.email?.message}>
          <input type="email" className={inputCls(!!errors.email)} {...register("email")} />
        </Field>
        <Field label="Phone Number (optional)">
          <input type="tel" className={inputCls(false)} {...register("phone")} />
        </Field>
        <Field label="Subject" error={errors.subject?.message}>
          <input className={inputCls(!!errors.subject)} placeholder="e.g. Order question" {...register("subject")} />
        </Field>
      </div>
      <Field label="Message" error={errors.message?.message}>
        <textarea rows={4} className={inputCls(!!errors.message)} {...register("message")} />
      </Field>
      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-full bg-brown-700 px-7 py-3 font-body text-sm font-semibold text-white hover:bg-brown-800 disabled:opacity-70"
      >
        {isSubmitting ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}

function inputCls(hasError: boolean) {
  return `mt-1 w-full rounded-xl border bg-white px-3 py-2.5 font-body text-sm text-brown-800 focus:border-gold-400 ${
    hasError ? "border-blush-400" : "border-blush-200"
  }`;
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="font-body text-sm font-semibold text-brown-800">
        {label}
        {children}
      </label>
      {error && <p className="mt-1 font-body text-xs text-blush-400">{error}</p>}
    </div>
  );
}
