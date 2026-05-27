import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Audiences",
  description: "Monarch TV Studios reaches global audiences through premium cinematic content spanning entertainment, science, finance, and storytelling across three world-class channels.",
  keywords: ["TV Audiences", "Global Viewership", "Monarch TV Reach", "International Broadcast"]
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
