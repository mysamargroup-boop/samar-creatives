
import type { Metadata } from "next";
import { ServicesClient } from "./ServicesClient";

export const metadata: Metadata = {
  title: 'Services | SAMAR.',
  description: 'Professional web design, development, and e-commerce solutions tailored for modern businesses.',
};

export default function ServicesPage() {
  return <ServicesClient />;
}
