import type { Metadata } from "next";
import { CustomCakeForm } from "@/components/CustomCakeForm";

export const metadata: Metadata = {
  title: "Custom Cakes",
  description:
    "Request a custom cake quote for your wedding, birthday or celebration. Share your event details, cake preferences and reference images.",
};

export default function CustomCakesPage() {
  return <CustomCakeForm />;
}
