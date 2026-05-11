import Navbar from "@/components/Navbar";
import Facilities from "@/components/Facilities";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Facilities | Monarch TV Studios",
  description: "Explore Monarch TV Studios' world-class production facilities — 4,000 m² of modern infrastructure in Tunisia powering premium content creation.",
};

export default function FacilitiesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-24 bg-black min-h-screen">
        <Facilities />
      </main>
      <Footer />
    </>
  );
}
