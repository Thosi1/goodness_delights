import Link from "next/link";
import { Instagram, Facebook, MapPin, Clock, Mail, Phone } from "lucide-react";
import { PipingDivider } from "./PipingDivider";

export function Footer() {
  return (
    <footer className="bg-brown-800 text-cream-100">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-2xl text-cream-50">Goodness Delights</p>
            <p className="mt-3 max-w-xs font-body text-sm leading-relaxed text-cream-200/80">
              Made by hand, created for your moment. From everyday indulgences
              to unforgettable celebrations, every order is baked with care.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="https://instagram.com"
                aria-label="Goodness Delights on Instagram"
                className="rounded-full bg-cream-50/10 p-2 transition-colors hover:bg-gold-500/80"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com"
                aria-label="Goodness Delights on Facebook"
                className="rounded-full bg-cream-50/10 p-2 transition-colors hover:bg-gold-500/80"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <p className="font-display text-lg text-cream-50">Quick Links</p>
            <ul className="mt-4 space-y-2 font-body text-sm text-cream-200/80">
              <li><Link href="/shop" className="hover:text-gold-300">Shop</Link></li>
              <li><Link href="/custom-cakes" className="hover:text-gold-300">Custom Cakes</Link></li>
              <li><Link href="/about" className="hover:text-gold-300">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-gold-300">Contact</Link></li>
              <li><Link href="/cart" className="hover:text-gold-300">Cart</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-display text-lg text-cream-50">Policies</p>
            <ul className="mt-4 space-y-2 font-body text-sm text-cream-200/80">
              <li><Link href="/contact#faq" className="hover:text-gold-300">Delivery &amp; Collection</Link></li>
              <li><Link href="/contact#faq" className="hover:text-gold-300">Cancellations &amp; Refunds</Link></li>
              <li><Link href="/contact#faq" className="hover:text-gold-300">Allergen Information</Link></li>
              <li><Link href="/contact#faq" className="hover:text-gold-300">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-display text-lg text-cream-50">Visit &amp; Contact</p>
            <ul className="mt-4 space-y-3 font-body text-sm text-cream-200/80">
              <li className="flex gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" />
                12 Hollow Lane, Constantia, Cape Town
              </li>
              <li className="flex gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" />
                Tue – Sat, 8:00 – 17:00
              </li>
              <li className="flex gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" />
                <a href="tel:+27210000000" className="hover:text-gold-300">+27 21 000 0000</a>
              </li>
              <li className="flex gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" />
                <a href="mailto:hello@goodnessdelights.co.za" className="hover:text-gold-300">hello@goodnessdelights.co.za</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-gold-300/70">
          <PipingDivider />
        </div>

        <p className="mt-6 text-center font-body text-xs text-cream-200/60">
          © {new Date().getFullYear()} Goodness Delights Bakehouse. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
