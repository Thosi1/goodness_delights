"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { customCakeSchema, CustomCakeFormValues } from "@/lib/validations";
import { StepIndicator } from "@/components/StepIndicator";
import { ImageUploader, UploadedImage } from "@/components/ImageUploader";
import { todayISO } from "@/lib/utils";

const STEPS = ["Customer Details", "Event Details", "Cake Preferences", "Inspiration & Notes", "Review"];

const STEP_FIELDS: Record<number, (keyof CustomCakeFormValues)[]> = {
  0: ["fullName", "email", "phone", "preferredContact"],
  1: ["occasionType", "eventDate", "fulfilmentDate", "servings", "fulfilmentMethod", "deliveryAddress"],
  2: [
    "cakeSize",
    "tiers",
    "cakeShape",
    "spongeFlavour",
    "fillingFlavour",
    "icingFinish",
    "colourPalette",
    "themeStyle",
    "dietaryRequirements",
    "allergyInfo",
    "cakeMessage",
  ],
  3: ["description", "budgetRange", "additionalNotes"],
  4: ["infoConfirmed", "termsAccepted"],
};

const DIETARY_OPTIONS = ["Vegetarian", "Vegan", "Gluten-Free", "Nut-Free", "Halal"];
const BUDGET_RANGES = ["R500 – R1,000", "R1,000 – R2,000", "R2,000 – R4,000", "R4,000+"];
const CAKE_SHAPES = ["Round", "Square", "Heart", "Sculpted / Novelty"];
const ICING_FINISHES = ["Buttercream — Smooth", "Buttercream — Textured", "Fondant", "Semi-Naked", "Ganache Drip"];

export function CustomCakeForm() {
  const [step, setStep] = useState(0);
  const [images, setImages] = useState<UploadedImage[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [referenceNumber, setReferenceNumber] = useState("");

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<CustomCakeFormValues>({
    resolver: zodResolver(customCakeSchema),
    defaultValues: {
      preferredContact: "email",
      fulfilmentMethod: "collection",
      tiers: 1,
      dietaryRequirements: [],
      eventDate: todayISO(),
    },
    mode: "onTouched",
  });

  const fulfilmentMethod = watch("fulfilmentMethod");

  const goNext = async () => {
    const valid = await trigger(STEP_FIELDS[step]);
    if (valid) setStep((s) => Math.min(s + 1, STEPS.length - 1));
  };
  const goBack = () => setStep((s) => Math.max(s - 1, 0));

  const onSubmit = async (_values: CustomCakeFormValues) => {
    // NOTE: Integration point — submit this payload (including uploaded files,
    // which should first be uploaded to a storage service such as Cloudinary,
    // Amazon S3, or Supabase Storage) to a real backend / CRM, and trigger an
    // email notification to both the customer and the bakery team.
    await new Promise((r) => setTimeout(r, 1000));
    setReferenceNumber(`CC-${Math.floor(10000 + Math.random() * 90000)}`);
    setSubmitted(true);
  };

  if (submitted) {
    const values = getValues();
    return (
      <div className="mx-auto flex max-w-xl flex-col items-center gap-4 px-5 py-20 text-center">
        <CheckCircle2 className="h-14 w-14 text-gold-500" />
        <h1 className="font-display text-3xl text-brown-800">Your custom cake request is in!</h1>
        <p className="font-body text-brown-600">
          Reference <strong>{referenceNumber}</strong>. This is a quotation request, not a
          confirmed order. Our cake designers will review your details — including any
          reference images — and respond to {values.email} within 1–2 business days with
          availability, pricing, and next steps.
        </p>
        <a
          href="/shop"
          className="mt-3 rounded-full bg-brown-700 px-7 py-3 font-body text-sm font-semibold text-white hover:bg-brown-800"
        >
          Continue Browsing
        </a>
      </div>
    );
  }

  const values = getValues();

  return (
    <div className="mx-auto max-w-3xl px-5 py-10 sm:px-8">
      <div className="text-center">
        <h1 className="font-display text-4xl text-brown-800">Custom Cake Request</h1>
        <p className="mx-auto mt-2 max-w-xl font-body text-brown-600">
          Tell us about your celebration and we'll get back to you with a tailored quote.
          This request does not confirm an order — it starts the conversation.
        </p>
      </div>

      <div className="mt-8 rounded-soft bg-cream-100 p-5">
        <StepIndicator steps={STEPS} currentStep={step} />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-8 space-y-6">
        {step === 0 && (
          <section className="space-y-4">
            <h2 className="font-display text-xl text-brown-800">Customer Details</h2>
            <Grid>
              <Field label="Full Name" error={errors.fullName?.message}>
                <input className={inputCls(!!errors.fullName)} {...register("fullName")} />
              </Field>
              <Field label="Email Address" error={errors.email?.message}>
                <input type="email" className={inputCls(!!errors.email)} {...register("email")} />
              </Field>
              <Field label="Phone Number" error={errors.phone?.message}>
                <input type="tel" className={inputCls(!!errors.phone)} {...register("phone")} />
              </Field>
              <Field label="Preferred Contact Method" error={errors.preferredContact?.message}>
                <select className={inputCls(!!errors.preferredContact)} {...register("preferredContact")}>
                  <option value="email">Email</option>
                  <option value="phone">Phone Call</option>
                  <option value="whatsapp">WhatsApp</option>
                </select>
              </Field>
            </Grid>
          </section>
        )}

        {step === 1 && (
          <section className="space-y-4">
            <h2 className="font-display text-xl text-brown-800">Event Details</h2>
            <Grid>
              <Field label="Type of Occasion" error={errors.occasionType?.message}>
                <input
                  className={inputCls(!!errors.occasionType)}
                  placeholder="e.g. Wedding, Birthday, Baby Shower"
                  {...register("occasionType")}
                />
              </Field>
              <Field label="Event Date" error={errors.eventDate?.message}>
                <input type="date" min={todayISO()} className={inputCls(!!errors.eventDate)} {...register("eventDate")} />
              </Field>
              <Field label="Number of Guests / Servings" error={errors.servings?.message}>
                <input type="number" min={1} className={inputCls(!!errors.servings)} {...register("servings")} />
              </Field>
              <Field label="Collection or Delivery" error={errors.fulfilmentMethod?.message}>
                <select className={inputCls(!!errors.fulfilmentMethod)} {...register("fulfilmentMethod")}>
                  <option value="collection">Collection</option>
                  <option value="delivery">Delivery</option>
                </select>
              </Field>
              <Field label="Required Collection / Delivery Date" error={errors.fulfilmentDate?.message}>
                <input type="date" min={todayISO()} className={inputCls(!!errors.fulfilmentDate)} {...register("fulfilmentDate")} />
              </Field>
              {fulfilmentMethod === "delivery" && (
                <Field label="Delivery Address" error={errors.deliveryAddress?.message}>
                  <textarea rows={2} className={inputCls(!!errors.deliveryAddress)} {...register("deliveryAddress")} />
                </Field>
              )}
            </Grid>
            <p className="font-body text-xs text-brown-400">
              We recommend at least 7 days' notice for custom cakes, and 2–3 weeks for multi-tier or wedding designs.
            </p>
          </section>
        )}

        {step === 2 && (
          <section className="space-y-4">
            <h2 className="font-display text-xl text-brown-800">Cake Preferences</h2>
            <Grid>
              <Field label="Cake Size" error={errors.cakeSize?.message}>
                <input
                  className={inputCls(!!errors.cakeSize)}
                  placeholder='e.g. 8" round, serves 20'
                  {...register("cakeSize")}
                />
              </Field>
              <Field label="Number of Tiers" error={errors.tiers?.message}>
                <input type="number" min={1} max={6} className={inputCls(!!errors.tiers)} {...register("tiers")} />
              </Field>
              <Field label="Cake Shape" error={errors.cakeShape?.message}>
                <select className={inputCls(!!errors.cakeShape)} {...register("cakeShape")}>
                  <option value="">Select a shape</option>
                  {CAKE_SHAPES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </Field>
              <Field label="Sponge Flavour" error={errors.spongeFlavour?.message}>
                <input className={inputCls(!!errors.spongeFlavour)} placeholder="e.g. Vanilla Bean" {...register("spongeFlavour")} />
              </Field>
              <Field label="Filling Flavour" error={errors.fillingFlavour?.message}>
                <input className={inputCls(!!errors.fillingFlavour)} placeholder="e.g. Salted Caramel" {...register("fillingFlavour")} />
              </Field>
              <Field label="Icing / Finish" error={errors.icingFinish?.message}>
                <select className={inputCls(!!errors.icingFinish)} {...register("icingFinish")}>
                  <option value="">Select a finish</option>
                  {ICING_FINISHES.map((f) => (
                    <option key={f} value={f}>{f}</option>
                  ))}
                </select>
              </Field>
              <Field label="Preferred Colour Palette" error={errors.colourPalette?.message}>
                <input className={inputCls(!!errors.colourPalette)} placeholder="e.g. Blush, gold, ivory" {...register("colourPalette")} />
              </Field>
              <Field label="Theme / Design Style (optional)">
                <input className={inputCls(false)} placeholder="e.g. Romantic florals, minimalist" {...register("themeStyle")} />
              </Field>
            </Grid>

            <fieldset>
              <legend className="font-body text-sm font-semibold text-brown-800">Dietary Requirements (optional)</legend>
              <div className="mt-2 flex flex-wrap gap-3">
                {DIETARY_OPTIONS.map((opt) => (
                  <label key={opt} className="flex items-center gap-2 rounded-full border border-blush-200 bg-white px-3 py-1.5 font-body text-sm text-brown-700">
                    <input type="checkbox" value={opt} {...register("dietaryRequirements")} />
                    {opt}
                  </label>
                ))}
              </div>
            </fieldset>

            <Grid>
              <Field label="Allergy Information (optional)">
                <textarea rows={2} className={inputCls(false)} {...register("allergyInfo")} />
              </Field>
              <Field label="Personalised Cake Message (optional)">
                <input className={inputCls(false)} maxLength={60} {...register("cakeMessage")} />
              </Field>
            </Grid>
          </section>
        )}

        {step === 3 && (
          <section className="space-y-5">
            <h2 className="font-display text-xl text-brown-800">Reference Images</h2>
            <ImageUploader images={images} onChange={setImages} />

            <h2 className="font-display text-xl text-brown-800">Additional Information</h2>
            <Field label="Describe your dream cake" error={errors.description?.message}>
              <textarea
                rows={4}
                className={inputCls(!!errors.description)}
                placeholder="Tell us about the design, inspiration, or anything else we should know…"
                {...register("description")}
              />
            </Field>
            <Field label="Estimated Budget Range" error={errors.budgetRange?.message}>
              <select className={inputCls(!!errors.budgetRange)} {...register("budgetRange")}>
                <option value="">Select a budget range</option>
                {BUDGET_RANGES.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </Field>
            <Field label="Additional Notes (optional)">
              <textarea rows={3} className={inputCls(false)} {...register("additionalNotes")} />
            </Field>
          </section>
        )}

        {step === 4 && (
          <section className="space-y-5">
            <h2 className="font-display text-xl text-brown-800">Review Your Request</h2>
            <div className="grid gap-4 rounded-soft bg-cream-100 p-5 font-body text-sm text-brown-700 sm:grid-cols-2">
              <SummaryItem label="Name" value={values.fullName} />
              <SummaryItem label="Email" value={values.email} />
              <SummaryItem label="Occasion" value={values.occasionType} />
              <SummaryItem label="Event Date" value={values.eventDate} />
              <SummaryItem label="Fulfilment" value={`${values.fulfilmentMethod} on ${values.fulfilmentDate}`} />
              <SummaryItem label="Servings" value={String(values.servings ?? "")} />
              <SummaryItem label="Size / Tiers" value={`${values.cakeSize ?? ""} · ${values.tiers ?? ""} tier(s)`} />
              <SummaryItem label="Flavours" value={`${values.spongeFlavour ?? ""} / ${values.fillingFlavour ?? ""}`} />
              <SummaryItem label="Icing" value={values.icingFinish} />
              <SummaryItem label="Colours" value={values.colourPalette} />
              <SummaryItem label="Budget" value={values.budgetRange} />
              <SummaryItem label="Reference Images" value={`${images.length} uploaded`} />
            </div>

            <p className="rounded-xl bg-blush-100 px-4 py-3 font-body text-sm text-brown-600">
              This is a quotation request, not a confirmed order. We'll review your details
              and respond with availability, final pricing and next steps.
            </p>

            <label className="flex items-start gap-2 font-body text-sm text-brown-600">
              <input type="checkbox" className="mt-1" {...register("infoConfirmed")} />
              I confirm that the information provided above is correct.
            </label>
            {errors.infoConfirmed && <p className="font-body text-xs text-blush-400">{errors.infoConfirmed.message as string}</p>}

            <label className="flex items-start gap-2 font-body text-sm text-brown-600">
              <input type="checkbox" className="mt-1" {...register("termsAccepted")} />
              I accept the terms and conditions and understand a deposit may be required to confirm my order.
            </label>
            {errors.termsAccepted && <p className="font-body text-xs text-blush-400">{errors.termsAccepted.message as string}</p>}
          </section>
        )}

        <div className="flex items-center justify-between pt-4">
          <button
            type="button"
            onClick={goBack}
            disabled={step === 0}
            className="flex items-center gap-1 rounded-full border border-brown-700 px-5 py-2.5 font-body text-sm font-medium text-brown-700 disabled:opacity-0"
          >
            <ChevronLeft className="h-4 w-4" /> Back
          </button>

          {step < STEPS.length - 1 ? (
            <button
              type="button"
              onClick={goNext}
              className="flex items-center gap-1 rounded-full bg-brown-700 px-6 py-2.5 font-body text-sm font-semibold text-white hover:bg-brown-800"
            >
              Continue <ChevronRight className="h-4 w-4" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-full bg-gold-500 px-7 py-2.5 font-body text-sm font-semibold text-brown-900 hover:bg-gold-400 disabled:opacity-70"
            >
              {isSubmitting ? "Submitting…" : "Submit Request"}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

function Grid({ children }: { children: React.ReactNode }) {
  return <div className="grid gap-4 sm:grid-cols-2">{children}</div>;
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

function SummaryItem({ label, value }: { label: string; value?: string }) {
  return (
    <div>
      <p className="font-semibold text-brown-800">{label}</p>
      <p className="text-brown-600">{value || "—"}</p>
    </div>
  );
}
