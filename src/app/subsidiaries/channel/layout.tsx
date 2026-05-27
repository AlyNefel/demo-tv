import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Monarch TV Channel",
  description: "Explore the Monarch TV Channel ecosystem: premium cinematic television for global entertainment."
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
