import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { PipingDivider } from "./PipingDivider";

export function Testimonials() {
  return (
    <section className="bg-blush-100/60 py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="text-center">
          <h2 className="font-display text-3xl text-brown-800 sm:text-4xl">Loved by Our Customers</h2>
          <p className="text-gold-500"><PipingDivider className="mx-auto" /></p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <figure key={t.id} className="flex flex-col rounded-soft bg-white p-6 shadow-card">
              <div className="flex gap-0.5 text-gold-400" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-3 flex-1 font-body text-sm leading-relaxed text-brown-600">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-4 font-body text-sm">
                <span className="font-semibold text-brown-800">{t.name}</span>
                <span className="text-brown-400"> · {t.location} · {t.occasion}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
