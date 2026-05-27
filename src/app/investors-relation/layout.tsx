import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investor Relations | Invest in the Future of Media",
  description: "Join Monarch TV Studios as a strategic partner or investor. Discover our global audience reach, revenue streams, and vertically integrated business model.",
  keywords: ["Invest in Media", "Monarch TV Investors", "TV Production Investment", "Media Partnerships", "Media Ecosystem"]
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
