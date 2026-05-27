import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Facilities",
  description: "Monarch TV Studios boasts state-of-the-art production facilities equipped with cutting-edge cameras, lighting rigs, and post-production suites to bring stories to life."
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
