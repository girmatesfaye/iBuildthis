import Navbar from "@/components/landing-page/Navbar";
import Hero from "@/components/landing-page/hero-section";
import Stats from "@/components/landing-page/stats-card";
import Featured from "@/components/landing-page/Features";
import RecentLaunchProduct from "../components/landing-page/recent-launch";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <Stats />
      <Featured />
      <RecentLaunchProduct />
    </main>
  );
}
