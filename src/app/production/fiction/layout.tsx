import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fiction Series",
  description: "Premium cinematic storytelling that transcends reality, bringing extraordinary narratives to life with unparalleled visual artistry."
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
