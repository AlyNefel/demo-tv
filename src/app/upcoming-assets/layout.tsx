import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Upcoming Assets",
  description: "Explore the upcoming projects and assets of Monarch TV Studios — from new fiction series and weekly programs to exciting new ventures across media and entertainment."
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
