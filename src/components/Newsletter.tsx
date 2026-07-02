"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { newsletterSchema } from "@/lib/validations";
import { z } from "zod";

type Values = z.infer<typeof newsletterSchema>;

export function Newsletter() {
  const [status, setStatus] = useState<"idle" | "success">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Values>({ resolver: zodResolver(newsletterSchema) });

  const onSubmit = async (_values: Values) => {
    // NOTE: Integration point — connect to an email service (e.g. Mailchimp,
    // Klaviyo, or a custom API route) to actually subscribe the customer.
    await new Promise((r) => setTimeout(r, 600));
    setStatus("success");
    reset();
  };

  return (
    <section className="bg-brown-700 py-14">
      <div className="mx-auto max-w-2xl px-5 text-center sm:px-8">
        <h2 className="font-display text-2xl text-cream-50 sm:text-3xl">
          Sweet news, straight to your inbox
        </h2>
        <p className="mt-2 font-body text-sm text-cream-200/80">
          Be the first to hear about seasonal menus, limited collections and special offers.
        </p>

        {status === "success" ? (
          <p className="mt-6 rounded-full bg-cream-50/10 px-5 py-3 font-body text-sm text-gold-300">
            You're on the list! Keep an eye on your inbox for something sweet.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto mt-6 flex max-w-md flex-col gap-2 sm:flex-row"
            noValidate
          >
            <div className="flex-1 text-left">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="you@example.com"
                {...register("email")}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "newsletter-error" : undefined}
                className="w-full rounded-full border border-transparent bg-white px-4 py-3 font-body text-sm text-brown-800 placeholder:text-brown-400 focus:border-gold-400"
              />
              {errors.email && (
                <p id="newsletter-error" className="mt-1 font-body text-xs text-blush-300">
                  {errors.email.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-full bg-gold-500 px-6 py-3 font-body text-sm font-semibold text-brown-900 transition-colors hover:bg-gold-400 disabled:opacity-70"
            >
              {isSubmitting ? "Subscribing…" : "Subscribe"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
