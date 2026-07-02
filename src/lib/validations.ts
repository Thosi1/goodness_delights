import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().optional(),
  subject: z.string().min(2, "Please let us know what this is about."),
  message: z.string().min(10, "Please add a little more detail (at least 10 characters)."),
});
export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
});

export const checkoutSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(7, "Please enter a valid phone number."),
  billingAddress: z.string().min(5, "Please enter your billing address."),
  fulfilmentMethod: z.enum(["collection", "delivery"]),
  deliveryAddress: z.string().optional(),
  fulfilmentDate: z.string().min(1, "Please choose a date."),
  discountCode: z.string().optional(),
  paymentMethod: z.enum(["card", "eft", "instant-eft"]),
  termsAccepted: z.literal(true, {
    errorMap: () => ({ message: "Please accept the terms to continue." }),
  }),
}).refine(
  (data) => data.fulfilmentMethod !== "delivery" || (data.deliveryAddress && data.deliveryAddress.length > 5),
  { message: "Please enter a delivery address.", path: ["deliveryAddress"] }
);
export type CheckoutFormValues = z.infer<typeof checkoutSchema>;

export const customCakeSchema = z.object({
  // Customer details
  fullName: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(7, "Please enter a valid phone number."),
  preferredContact: z.enum(["email", "phone", "whatsapp"]),

  // Event details
  occasionType: z.string().min(2, "Please tell us the occasion."),
  eventDate: z.string().min(1, "Please choose your event date."),
  fulfilmentDate: z.string().min(1, "Please choose a collection/delivery date."),
  servings: z.coerce.number().min(1, "Please enter the number of servings."),
  fulfilmentMethod: z.enum(["collection", "delivery"]),
  deliveryAddress: z.string().optional(),

  // Cake preferences
  cakeSize: z.string().min(1, "Please choose a cake size."),
  tiers: z.coerce.number().min(1).max(6),
  cakeShape: z.string().min(1, "Please choose a cake shape."),
  spongeFlavour: z.string().min(1, "Please choose a sponge flavour."),
  fillingFlavour: z.string().min(1, "Please choose a filling flavour."),
  icingFinish: z.string().min(1, "Please choose an icing or finish."),
  colourPalette: z.string().min(1, "Please describe your preferred colours."),
  themeStyle: z.string().optional(),
  dietaryRequirements: z.array(z.string()).optional(),
  allergyInfo: z.string().optional(),
  cakeMessage: z.string().optional(),

  // Additional information
  description: z.string().min(10, "Please add a little more detail about your dream cake."),
  budgetRange: z.string().min(1, "Please choose an estimated budget range."),
  additionalNotes: z.string().optional(),
  infoConfirmed: z.literal(true, {
    errorMap: () => ({ message: "Please confirm your information is correct." }),
  }),
  termsAccepted: z.literal(true, {
    errorMap: () => ({ message: "Please accept the terms and conditions." }),
  }),
}).refine(
  (data) => data.fulfilmentMethod !== "delivery" || (data.deliveryAddress && data.deliveryAddress.length > 5),
  { message: "Please enter a delivery address.", path: ["deliveryAddress"] }
).refine(
  (data) => new Date(data.fulfilmentDate) <= new Date(data.eventDate),
  { message: "Collection/delivery date should be on or before your event date.", path: ["fulfilmentDate"] }
);
export type CustomCakeFormValues = z.infer<typeof customCakeSchema>;
