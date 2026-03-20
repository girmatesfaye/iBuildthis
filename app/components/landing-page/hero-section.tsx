// ================= Hero.tsx =================
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="text-center py-20 px-6 bg-gradient-to-b from-amber-50 to-white">
      <p className="inline-block px-4 py-2 border rounded-full text-sm mb-6">
        Join thousands of creators sharing their work
      </p>

      <h1 className="text-5xl font-bold leading-tight mb-6">
        Share What You've <span className="text-pink-600">Built</span>,
        <br />
        Discover What's <span className="text-purple-600">Launching</span>
      </h1>

      <p className="text-gray-600 max-w-2xl mx-auto mb-8">
        A community platform for creators to showcase their apps, AI tools, SaaS
        products, and creative projects.
      </p>

      <div className="flex justify-center gap-4">
        <Button className="bg-pink-600 text-white">Share Your Project</Button>
        <Button variant="secondary">Explore Projects →</Button>
      </div>
    </section>
  );
}
