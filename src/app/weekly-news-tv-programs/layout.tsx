import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Weekly News TV Programs",
  description: "Stay informed with Monarch TV Studios' Weekly News TV Programs — curated, high-quality news and documentary content delivered across our global broadcasting network."
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
