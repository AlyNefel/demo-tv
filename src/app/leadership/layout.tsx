import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leadership",
  description: "Meet the world-class leadership team of Monarch TV Studios Group — C-level executives and visionary leaders driving the future of global entertainment."
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
