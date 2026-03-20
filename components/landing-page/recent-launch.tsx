"use client";
import { use, useState } from "react";
import SectionHeader from "../common/section-header";
import {
  Badge,
  ChevronDown,
  ChevronUp,
  Rocket,
  CalendarIcon,
} from "lucide-react";
import { Card, CardContent } from "../ui/card";
import Link from "next/link";
import EmptyState from "../common/empty-state";
const RecentLaunch = [
  {
    id: 1,
    name: "ParityKit",
    desc: "Price parity for global SaaS products",
    tags: ["SaaS", "Pricing", "Global"],
    vote: 120,
    isFeatured: true,
  },
  {
    id: 2,
    name: "Leadership Course",
    desc: "A course on Engineering Leadership",
    tags: ["Course", "Leadership"],
    vote: 95,
    isFeatured: false,
  },
];
export default function RecentLaunchProduct() {
  const [votes, setVotes] = useState<Record<number, number>>(() =>
    RecentLaunch.reduce(
      (acc, product) => {
        acc[product.id] = product.vote;
        return acc;
      },
      {} as Record<number, number>,
    ),
  );

  const updateVote = (id: number, value: number) => {
    setVotes((prev) => ({
      ...prev,
      [id]: Math.max(0, (prev[id] ?? 0) + value),
    }));
  };
  return (
    <section className="px-4 sm:px-6 py-12 sm:py-16">
      <div>
        <SectionHeader
          icon={Rocket}
          title="Recent Launches"
          description="Discover our latest projects and innovations "
        />
      </div>
      {RecentLaunch.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {RecentLaunch.map((product, i) => (
            <Card key={i} className="rounded-2xl shadow-sm">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center justify-between gap-4">
                  <Link
                    href={`/products/${product.id}`}
                    className="flex-1 min-w-0"
                  >
                    <div className="flex justify-between items-center mb-2 gap-2">
                      <h3 className="font-semibold text-sm sm:text-base truncate">
                        {product.name}
                      </h3>
                      <Badge
                        className={`text-white text-xs ${
                          product.isFeatured ? "bg-green-500" : "bg-slate-500"
                        }`}
                      >
                        {product.isFeatured ? "Featured" : "Project"}
                      </Badge>
                    </div>

                    <p className="text-gray-600 text-sm mb-4">{product.desc}</p>

                    <div className="flex gap-2 flex-wrap">
                      {product.tags.map((tag, idx) => (
                        <Badge key={idx} className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </Link>

                  <div className="flex flex-col items-center justify-center self-center">
                    <button
                      type="button"
                      onClick={() => updateVote(product.id, 1)}
                      className="p-1 rounded-md hover:bg-gray-100"
                      aria-label={`Up vote ${product.name}`}
                    >
                      <ChevronUp className="h-4 w-4" />
                    </button>
                    <span className="text-sm font-medium leading-none">
                      {votes[product.id]}
                    </span>
                    <button
                      type="button"
                      onClick={() => updateVote(product.id, -1)}
                      className="p-1 rounded-md hover:bg-gray-100"
                      aria-label={`Down vote ${product.name}`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <EmptyState
          message="NO PRODUCT LAUNCH IN THE PAST WEEK"
          icon={CalendarIcon}
        />
      )}
    </section>
  );
}
