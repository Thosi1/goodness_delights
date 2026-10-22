import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ABOUT_CRAFT, ABOUT_CREATION } from "@/data/images";
import { PipingDivider } from "@/components/PipingDivider";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Goodness Delights Bakehouse — our story, our values, and the people behind every handmade cake.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8">
      <div className="text-center">
        <p className="font-body text-sm font-medium uppercase tracking-[0.2em] text-gold-500">Our Story</p>
        <h1 className="mt-2 font-display text-4xl text-brown-800 sm:text-5xl">Baked with Patience, Finished by Hand</h1>
        <p className="text-gold-500"><PipingDivider className="mx-auto" /></p>
      </div>

      <div className="mt-10 grid items-center gap-10 lg:grid-cols-2">
        <div className="relative aspect-[4/5] overflow-hidden rounded-soft shadow-soft">
          <Image
            src={ABOUT_CRAFT}
            alt="A three-tier ivory Goodness Delights wedding cake with gold accents"
            fill
            sizes="(min-width: 1024px) 560px, 90vw"
            className="object-contain bg-cream-100"
          />
        </div>
        <p className="font-body text-base leading-relaxed text-brown-600">
          Goodness Delights began in a small Constantia kitchen with one
          stand mixer, a handful of regular customers, and a simple belief:
          a celebration cake should taste every bit as good as it looks.
          What started as weekend orders for friends has grown into a
          full bakehouse, but the way we work hasn't changed — every cake
          is still mixed, filled, and finished entirely by hand.
        </p>
      </div>

      <div className="mt-16 grid gap-8 sm:grid-cols-3">
        {[
          {
            title: "Quality Ingredients",
            body: "We use real butter, Madagascan vanilla and couverture chocolate — never shortcuts, never substitutes.",
          },
          {
            title: "Handmade, Always",
            body: "From piped buttercream to hand-painted details, nothing in our kitchen is machine-finished.",
          },
          {
            title: "Made for the Moment",
            body: "Every order is treated as part of someone's celebration — that responsibility shapes everything we bake.",
          },
        ].map((value) => (
          <div key={value.title} className="rounded-soft bg-cream-100 p-6 text-center">
            <h3 className="font-display text-lg text-brown-800">{value.title}</h3>
            <p className="mt-2 font-body text-sm text-brown-600">{value.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 grid items-center gap-10 lg:grid-cols-2">
        <div className="relative order-2 aspect-[4/5] overflow-hidden rounded-soft shadow-soft lg:order-1">
          <Image
            src={ABOUT_CREATION}
            alt="A handcrafted white wedding cake with ruffles and gold initials"
            fill
            sizes="(min-width: 1024px) 480px, 90vw"
            className="object-contain bg-cream-100"
          />
        </div>
        <div className="order-1 lg:order-2">
          <p className="font-body text-sm font-medium uppercase tracking-[0.2em] text-gold-500">Meet Our Baker</p>
          <h2 className="mt-2 font-display text-3xl text-brown-800">Lerato Dube, Founder &amp; Head Baker</h2>
          <p className="mt-4 font-body text-base leading-relaxed text-brown-600">
            Trained in pastry arts and self-taught in cake design, Lerato
            founded Goodness Delights to bring thoughtful, beautifully made
            cakes to Cape Town's celebrations. She personally reviews every
            custom cake request to make sure each design feels true to the
            person it's for.
          </p>
        </div>
      </div>

      <div className="mt-16 rounded-soft bg-blush-100 p-8 text-center sm:p-12">
        <h2 className="font-display text-2xl text-brown-800 sm:text-3xl">Ready to taste the difference?</h2>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <Link href="/shop" className="rounded-full bg-brown-700 px-7 py-3.5 font-body text-sm font-semibold text-white hover:bg-brown-800">
            Browse Products
          </Link>
          <Link href="/custom-cakes" className="rounded-full border border-brown-700 px-7 py-3.5 font-body text-sm font-semibold text-brown-700 hover:bg-brown-700 hover:text-white">
            Request a Custom Cake
          </Link>
        </div>
      </div>
    </div>
  );
}

