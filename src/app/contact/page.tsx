import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { FAQAccordion } from "@/components/FAQAccordion";
import { faqs } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Goodness Delights Bakehouse — visit our Cape Town bakery, send a message, or browse frequently asked questions.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
      <div className="text-center">
        <h1 className="font-display text-4xl text-brown-800">Get in Touch</h1>
        <p className="mx-auto mt-2 max-w-xl font-body text-brown-600">
          Questions about an order, a custom cake, or anything else? We'd love to hear from you.
        </p>
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_360px]">
        <div className="rounded-soft bg-cream-100 p-6 sm:p-8">
          <h2 className="font-display text-xl text-brown-800">Send Us a Message</h2>
          <div className="mt-5">
            <ContactForm />
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-soft bg-white p-6 shadow-card">
            <h2 className="font-display text-lg text-brown-800">Visit &amp; Contact</h2>
            <ul className="mt-4 space-y-3 font-body text-sm text-brown-600">
              <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" /> 12 Hollow Lane, Constantia, Cape Town, 7806</li>
              <li className="flex gap-2"><Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" /> Tuesday – Saturday, 8:00 – 17:00</li>
              <li className="flex gap-2"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" /> <a href="tel:+27210000000" className="hover:text-gold-500">+27 21 000 0000</a> (also WhatsApp)</li>
              <li className="flex gap-2"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" /> <a href="mailto:hello@goodnessdelights.co.za" className="hover:text-gold-500">hello@goodnessdelights.co.za</a></li>
            </ul>
          </div>

          <div className="overflow-hidden rounded-soft bg-blush-100">
            {/* Map integration point — replace with a real embed, e.g. Google Maps iframe */}
            <div className="flex aspect-video items-center justify-center font-body text-sm text-brown-500">
              Map placeholder — embed Google Maps here
            </div>
          </div>
        </div>
      </div>

      <div id="faq" className="mt-16">
        <h2 className="text-center font-display text-3xl text-brown-800">Frequently Asked Questions</h2>
        <div className="mx-auto mt-6 max-w-2xl">
          <FAQAccordion items={faqs} />
        </div>
      </div>
    </div>
  );
}
