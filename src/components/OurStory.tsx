import Image from "next/image";
import Link from "next/link";
import { OUR_STORY } from "@/data/images";

export function OurStory() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-lg overflow-hidden rounded-soft shadow-soft lg:order-2">
          <Image
            src={OUR_STORY}
            alt="A handcrafted Goodness Delights cake with white flowers and gold accents"
            fill
            sizes="(min-width: 1024px) 560px, 90vw"
            className="object-cover"
          />
        </div>
        <div className="lg:order-1">
          <p className="font-body text-sm font-medium uppercase tracking-[0.2em] text-gold-500">
            Our Story
          </p>
          <h2 className="mt-3 font-display text-3xl text-brown-800 sm:text-4xl">
            Baked with patience, finished by hand
          </h2>
          <p className="mt-4 font-body text-base leading-relaxed text-brown-600">
            Goodness Delights began in a small Constantia kitchen with one
            mixer, a handful of regulars, and a belief that celebration cakes
            should taste as good as they look. Years later, that same care
            goes into every sponge, every swirl of buttercream, and every box
            that leaves our door.
          </p>
          <Link
            href="/about"
            className="mt-5 inline-block font-body text-sm font-semibold text-brown-700 underline hover:text-gold-500"
          >
            Read our full story
          </Link>
        </div>
      </div>
    </section>
  );
}

