import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Channel Bouquet",
  description: "Discover the Monarch TV Channel Bouquet — three world-class satellite Fast TV channels broadcasting in HD: Monarch TV Channel, Monarch TV Crypto, and Monarch TV Novels.",
  keywords: ["Monarch TV Bouquet", "Satellite TV Channels", "Fast TV", "HD Broadcasting", "Global Channels"]
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
