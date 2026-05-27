import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Monarch TV Crypto",
  description: "Stay ahead with Monarch TV Crypto, delivering the latest digital finance news and insights globally."
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
