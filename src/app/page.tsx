import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { FeaturedCategories } from "@/components/FeaturedCategories";
import { CustomCakePromo } from "@/components/CustomCakePromo";
import { OurStory } from "@/components/OurStory";
import { Testimonials } from "@/components/Testimonials";
import { InstagramGallery } from "@/components/InstagramGallery";
import { Newsletter } from "@/components/Newsletter";

export const metadata: Metadata = {
  title: "Goodness Delights Bakehouse | Handmade Cakes & Custom Cake Design",
  description:
    "Browse celebration cakes, cupcakes, cookies and brownies, or request a custom cake for your next occasion. Based in Cape Town.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedCategories />
      <CustomCakePromo />
      <OurStory />
      <Testimonials />
      <InstagramGallery />
      <Newsletter />
    </>
  );
}

