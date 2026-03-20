import { Button } from "@/components/ui/button";
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { HomeIcon, SearchIcon, SparkleIcon, UserIcon } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-b backdrop-blur-sm flex items-center justify-between from-amber-100 via-amber-50 to-white px-4 sm:px-6 lg:px-10 py-4 border-b">
      <div className="text-lg sm:text-xl font-bold text-green-700">
        iBuiltThis
      </div>

      <div className="hidden sm:flex items-center justify-center gap-6 text-sm">
        <Link
          href="/"
          className="flex items-center gap-2 hover:text-green-600 transition"
        >
          <HomeIcon />
          <span>Home</span>
        </Link>
        <Link
          href="/explore"
          className="flex items-center gap-2 hover:text-green-600 transition"
        >
          <SearchIcon />
          <span>Explore</span>
        </Link>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <Show when="signed-out">
          <SignInButton mode="modal">
            <Button variant="ghost" className="text-sm">
              Sign In
            </Button>
          </SignInButton>
          <SignUpButton mode="modal">
            <Button className="bg-green-600 text-white text-sm">Sign Up</Button>
          </SignUpButton>
        </Show>

        <Show when="signed-in">
          <Button asChild variant="ghost" className="text-sm">
            <Link
              href="/submit"
              className="flex items-center gap-2 hover:text-green-600 transition"
            >
              <SparkleIcon />
              <span>Submit Your Project</span>
            </Link>
          </Button>
          <UserButton />
        </Show>
      </div>
    </nav>
  );
}
