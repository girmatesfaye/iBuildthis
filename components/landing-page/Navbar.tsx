import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between from-amber-100 via-amber-50 to-white px-4 sm:px-6 lg:px-10 py-4 border-b">
      <div className="text-lg sm:text-xl font-bold text-pink-700">
        iBuiltThis
      </div>

      <div className="hidden md:flex items-center gap-6 text-sm">
        <a href="#">Home</a>
        <a href="#">Explore</a>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <Button variant="ghost" className="text-sm">
          Sign In
        </Button>
        <Button className="bg-pink-600 text-white text-sm">Sign Up</Button>
      </div>
    </nav>
  );
}
