import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Monarch TV Novels",
  description: "Dive into compelling stories and deep narratives with Monarch TV Novels."
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
