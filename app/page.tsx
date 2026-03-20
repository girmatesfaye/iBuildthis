import Navbar from "@/components/landing-page/Navbar";
import Hero from "@/components/landing-page/hero-section";
import Stats from "@/components/landing-page/stats-card";
import Featured from "@/components/landing-page/Features";
import RecentLaunchProduct from "../components/landing-page/recent-launch";
import Footer from "@/components/common/footer";
import { ClerkProvider } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto">
      <Hero />
      <Stats />
      <Featured />
      <RecentLaunchProduct />
    </main>
  );
}
