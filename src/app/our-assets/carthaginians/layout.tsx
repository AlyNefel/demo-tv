import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Carthaginians",
  description: "The Carthaginians is Monarch TV Studios' professional sports franchise, delivering elite-level sports entertainment and global brand exposure."
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
