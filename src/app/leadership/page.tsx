import Navbar from "@/components/Navbar";
import Team from "@/components/Team";

export const metadata = {
  title: "Leadership | Monarch TV Studios",
  description: "Meet the visionary leadership team behind Monarch TV Studios — the creative directors, producers, and executives shaping the future of television.",
};

export default function LeadershipPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-24 bg-black min-h-screen">
        <Team />
      </main>
    </>
  );
}
