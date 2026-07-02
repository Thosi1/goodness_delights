"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CheckCircle2 } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { checkoutSchema, CheckoutFormValues } from "@/lib/validations";
import { formatCurrency, todayISO } from "@/lib/utils";

const MIN_LEAD_HOURS = 24;

function minFulfilmentDate() {
  const d = new Date();
  d.setHours(d.getHours() + MIN_LEAD_HOURS);
  return d.toISOString().split("T")[0];
}

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderRef, setOrderRef] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      fulfilmentMethod: "collection",
      paymentMethod: "card",
      fulfilmentDate: minFulfilmentDate(),
    },
  });

  const fulfilmentMethod = watch("fulfilmentMethod");
  const deliveryFee = fulfilmentMethod === "delivery" ? 65 : 0;

  const onSubmit = async (_values: CheckoutFormValues) => {
    // NOTE: Integration point — replace with a real payment gateway charge
    // (e.g. Stripe, PayFast, Yoco) and an order-management/email-notification
    // service call before clearing the cart.
    await new Promise((r) => setTimeout(r, 900));
    setOrderRef(`PC-${Math.floor(100000 + Math.random() * 900000)}`);
    setOrderPlaced(true);
    clearCart();
  };

  if (items.length === 0 && !orderPlaced) {
    return (
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-3 px-5 py-24 text-center">
        <h1 className="font-display text-3xl text-brown-800">Nothing to check out yet</h1>
        <p className="font-body text-brown-500">Add something delicious from the shop first.</p>
        <Link href="/shop" className="mt-3 rounded-full bg-brown-700 px-7 py-3 font-body text-sm font-semibold text-white hover:bg-brown-800">
          Browse the Shop
        </Link>
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div className="mx-auto flex max-w-lg flex-col items-center gap-4 px-5 py-24 text-center">
        <CheckCircle2 className="h-14 w-14 text-gold-500" />
        <h1 className="font-display text-3xl text-brown-800">Thank you for your order!</h1>
        <p className="font-body text-brown-600">
          Your order <strong>{orderRef}</strong> has been received. We'll send a confirmation
          email with your fulfilment details shortly.
        </p>
        <Link href="/shop" className="mt-3 rounded-full bg-brown-700 px-7 py-3 font-body text-sm font-semibold text-white hover:bg-brown-800">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8">
      <h1 className="font-display text-3xl text-brown-800">Checkout</h1>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-8 grid gap-10 lg:grid-cols-[1fr_340px]">
        <div className="space-y-8">
          <section>
            <h2 className="font-display text-lg text-brown-800">Contact Details</h2>
            <div className="mt-3 grid gap-4 sm:grid-cols-2">
              <Field label="Full Name" error={errors.fullName?.message}>
                <input {...register("fullName")} className={inputClass(!!errors.fullName)} />
              </Field>
              <Field label="Email Address" error={errors.email?.message}>
                <input type="email" {...register("email")} className={inputClass(!!errors.email)} />
              </Field>
              <Field label="Phone Number" error={errors.phone?.message}>
                <input type="tel" {...register("phone")} className={inputClass(!!errors.phone)} />
              </Field>
            </div>
          </section>

          <section>
            <h2 className="font-display text-lg text-brown-800">Billing Information</h2>
            <div className="mt-3">
              <Field label="Billing Address" error={errors.billingAddress?.message}>
                <textarea rows={2} {...register("billingAddress")} className={inputClass(!!errors.billingAddress)} />
              </Field>
            </div>
          </section>

          <section>
            <h2 className="font-display text-lg text-brown-800">Collection or Delivery</h2>
            <div className="mt-3 flex gap-3">
              {(["collection", "delivery"] as const).map((opt) => (
                <label
                  key={opt}
                  className="flex flex-1 items-center gap-2 rounded-xl border border-blush-200 bg-white px-4 py-3 font-body text-sm capitalize text-brown-700"
                >
                  <input type="radio" value={opt} {...register("fulfilmentMethod")} />
                  {opt} {opt === "delivery" && <span className="text-brown-400">(+{formatCurrency(65)})</span>}
                </label>
              ))}
            </div>
            {fulfilmentMethod === "delivery" && (
              <div className="mt-3">
                <Field label="Delivery Address" error={errors.deliveryAddress?.message}>
                  <textarea rows={2} {...register("deliveryAddress")} className={inputClass(!!errors.deliveryAddress)} />
                </Field>
              </div>
            )}
            <div className="mt-3 max-w-xs">
              <Field label="Requested Fulfilment Date" error={errors.fulfilmentDate?.message}>
                <input
                  type="date"
                  min={minFulfilmentDate()}
                  {...register("fulfilmentDate")}
                  className={inputClass(!!errors.fulfilmentDate)}
                />
              </Field>
              <p className="mt-1 font-body text-xs text-brown-400">
                Orders require at least 24 hours' notice. Custom cakes require longer lead times.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-lg text-brown-800">Payment</h2>
            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              {[
                { value: "card", label: "Credit / Debit Card" },
                { value: "instant-eft", label: "Instant EFT" },
                { value: "eft", label: "Manual EFT" },
              ].map((method) => (
                <label
                  key={method.value}
                  className="flex items-center gap-2 rounded-xl border border-blush-200 bg-white px-4 py-3 font-body text-sm text-brown-700"
                >
                  <input type="radio" value={method.value} {...register("paymentMethod")} />
                  {method.label}
                </label>
              ))}
            </div>
            <p className="mt-2 font-body text-xs text-brown-400">
              Payment placeholder only — connect a real gateway such as Stripe, PayFast or Yoco before going live.
            </p>
          </section>

          <section>
            <Field label="Discount Code (optional)" error={errors.discountCode?.message}>
              <input {...register("discountCode")} className={inputClass(false)} placeholder="e.g. WELCOME10" />
            </Field>
          </section>

          <section>
            <label className="flex items-start gap-2 font-body text-sm text-brown-600">
              <input type="checkbox" className="mt-1" {...register("termsAccepted")} />
              I agree to the terms and conditions and cancellation policy.
            </label>
            {errors.termsAccepted && (
              <p className="mt-1 font-body text-xs text-blush-400">{errors.termsAccepted.message as string}</p>
            )}
          </section>
        </div>

        <aside className="h-max rounded-soft bg-cream-100 p-6">
          <h2 className="font-display text-lg text-brown-800">Order Summary</h2>
          <ul className="mt-4 max-h-64 space-y-3 overflow-y-auto thin-scroll">
            {items.map((line) => (
              <li key={line.cartItemId} className="flex gap-3">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-blush-100">
                  <Image src={line.image} alt={line.name} fill sizes="56px" className="object-cover" />
                </div>
                <div className="flex-1">
                  <p className="font-body text-sm font-medium text-brown-800">{line.name}</p>
                  <p className="font-body text-xs text-brown-500">Qty {line.quantity}</p>
                </div>
                <p className="font-body text-sm text-brown-700">{formatCurrency(line.unitPrice * line.quantity)}</p>
              </li>
            ))}
          </ul>
          <div className="mt-4 space-y-1.5 border-t border-blush-200 pt-4 font-body text-sm text-brown-600">
            <div className="flex justify-between"><span>Subtotal</span><span>{formatCurrency(subtotal)}</span></div>
            <div className="flex justify-between"><span>Delivery</span><span>{deliveryFee ? formatCurrency(deliveryFee) : "Free"}</span></div>
            <div className="flex justify-between font-display text-lg text-brown-800"><span>Total</span><span>{formatCurrency(subtotal + deliveryFee)}</span></div>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-5 w-full rounded-full bg-gold-500 px-6 py-3 font-body text-sm font-semibold text-brown-900 hover:bg-gold-400 disabled:opacity-70"
          >
            {isSubmitting ? "Placing Order…" : "Place Order"}
          </button>
        </aside>
      </form>
    </div>
  );
}

function inputClass(hasError: boolean) {
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
