import { Testimonial, FAQItem } from "@/types";

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Naledi M.",
    location: "Cape Town",
    quote:
      "Our wedding cake was beyond anything we imagined. Every guest asked where it came from. The whole process felt personal from the very first email.",
    rating: 5,
    occasion: "Wedding",
  },
  {
    id: "t2",
    name: "Jason P.",
    location: "Cape Town",
    quote:
      "I ordered a last-minute birthday cake for my daughter and the team made it feel like they'd been planning it for weeks. Beautifully done.",
    rating: 5,
    occasion: "Birthday",
  },
  {
    id: "t3",
    name: "Amira K.",
    location: "Stellenbosch",
    quote:
      "The cupcakes disappeared within minutes at our office party. Soft, not too sweet, and absolutely gorgeous to look at.",
    rating: 5,
    occasion: "Corporate Event",
  },
  {
    id: "t4",
    name: "Thandiwe S.",
    location: "Cape Town",
    quote:
      "Hands down the best custom cake experience we've had. They listened to every detail and the final design matched our reference images perfectly.",
    rating: 5,
    occasion: "Anniversary",
  },
];

export const faqs: FAQItem[] = [
  {
    question: "How far in advance should I order a custom cake?",
    answer:
      "We recommend submitting your custom cake request at least 7 days before your event for simple designs, and 2–3 weeks for elaborate, multi-tier or wedding cakes. Popular dates fill quickly, so earlier is always better.",
  },
  {
    question: "Can you cater to allergies and dietary requirements?",
    answer:
      "Yes. We offer vegan, gluten-free, nut-free and halal options across much of our menu. Please tell us about any allergies in your order notes or custom cake request so we can take the right precautions.",
  },
  {
    question: "Do you offer delivery?",
    answer:
      "We offer local delivery across the greater Cape Town area for a small fee, as well as complimentary collection from our bakery. Delivery options and fees are confirmed at checkout based on your address.",
  },
  {
    question: "How does the custom cake quotation process work?",
    answer:
      "Once you submit a custom cake request, our team reviews your design, event date and requirements, then replies within 1–2 business days with availability, an itemised quote and next steps. A request is not a confirmed order until you accept the quote and a deposit is paid.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Shop orders can be cancelled up to 48 hours before the collection or delivery date for a full refund. Custom cake deposits are non-refundable within 7 days of the event due to ingredient and time commitments.",
  },
];
