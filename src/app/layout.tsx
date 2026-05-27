import type { Metadata } from "next";
import "./globals.css";
import CanvasBackground from "@/components/CanvasBackground";
import SmoothScroll from "@/components/SmoothScroll";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: {
    template: "%s | MONARCH TV STUDIOS GROUP",
    default: "MONARCH TV STUDIOS GROUP | Premium Cinematic Content",
  },
  description: "Experience the future of entertainment with Monarch TV Studios. We produce premium cinematic television, fiction series, and global broadcasting networks.",
  keywords: ["Monarch TV Studios", "Cinematic TV", "Fast TV Channels", "TV Production", "Global Broadcasting", "Fiction Series", "Entertainment Group"],
  openGraph: {
    title: "MONARCH TV STUDIOS GROUP",
    description: "Experience the future of entertainment with Monarch TV Studios.",
    type: "website",
  },
  icons: {
    icon: "/logo/logo-modified.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="dark antialiased"
      style={{ colorScheme: 'dark' }}
    >
      <head>
        {/* Preconnect for Google Fonts performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Unified Google Fonts for the entire application */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Outfit:wght@400;700&family=Cinzel:wght@400;700&family=Cinzel+Decorative:wght@400;700&family=IM+Fell+English+SC&family=Ruwudu:wght@400;700&family=Archivo+Black&family=Nosifer&family=Orbitron:wght@400;700&family=Pirata+One&family=Macondo+Swash+Caps&family=Lobster+Two:ital,wght@0,400;0,700;1,400&family=Boogaloo&family=Fredoka+One&family=Exo+2:wght@700;900&family=Share+Tech+Mono&family=Creepster&family=Lilita+One&family=Anton&family=Bebas+Neue&family=Museo+Moderno:wght@400;700;900&family=Rosario:ital,wght@0,300..700;1,300..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans bg-background text-foreground min-h-screen">
        <SmoothScroll>
          <CanvasBackground />
          <div className="relative z-0 flex min-h-screen flex-col">
            {children}
            <Footer />
          </div>

        </SmoothScroll>
      </body>
    </html>
  );
}

