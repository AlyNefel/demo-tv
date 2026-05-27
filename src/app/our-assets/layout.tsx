import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Assets",
  description: "Beyond television, Monarch TV Studios owns diverse media assets including Capsule Magazine (print media) and The Carthaginians (professional sports franchise).",
  keywords: ["Monarch TV Assets", "Capsule Magazine", "The Carthaginians", "Media Assets", "Sports Franchise", "Print Media"]
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
