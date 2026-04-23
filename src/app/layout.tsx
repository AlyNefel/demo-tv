import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import CanvasBackground from "@/components/CanvasBackground";
import SmoothScroll from "@/components/SmoothScroll";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MONARCH | Cinematic TV Shows",
  description: "Experience the best TV shows with a modern, cinematic feel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} dark antialiased`}
      style={{ colorScheme: 'dark' }}
    >
      <body className="font-sans bg-background text-foreground min-h-screen">
        <SmoothScroll>
          <CanvasBackground />
          <div className="relative z-0 flex min-h-screen flex-col">
            {children}
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
