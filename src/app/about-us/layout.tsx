import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Monarch TV Studios Group — our mission, vision, and the world-class creative team behind our premium cinematic productions and global broadcasting channels.",
  keywords: ["About Monarch TV", "Monarch TV Studios Mission", "Entertainment Group", "Global TV Production Team"]
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
