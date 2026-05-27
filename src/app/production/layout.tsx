import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Production & Fiction Series",
  description: "State-of-the-art cameras, lighting rigs, and an expert crew bringing scripts to life with cinematic precision. Explore our premium scripted and unscripted content."
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
