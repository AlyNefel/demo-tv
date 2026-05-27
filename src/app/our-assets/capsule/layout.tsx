import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Capsule Magazine",
  description: "Capsule is Monarch TV Studios' premium print and digital magazine, delivering world-class editorial content across science, culture, and innovation."
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
