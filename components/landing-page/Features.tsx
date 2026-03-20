"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import SectionHeader from "../common/section-header";
import { Star, ArrowBigRight, ChevronUp, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Featured() {
  const products = [
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
    {
      id: 3,
      name: "ParityKit",
      desc: "Price parity for global SaaS products",
      tags: ["SaaS", "Pricing", "Global"],
      vote: 120,
      isFeatured: true,
    },
    {
      id: 4,
      name: "Leadership Course",
      desc: "A course on Engineering Leadership",
      tags: ["Course", "Leadership"],
      vote: 95,
      isFeatured: false,
    },
  ];

  const [votes, setVotes] = useState<Record<number, number>>(() =>
    products.reduce(
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
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <SectionHeader
            icon={Star}
            title="Featured Projects"
            description="Discover some of the most exciting projects shared by our community."
          />
        </div>
        <Button asChild variant="outline" className="w-full sm:w-auto">
          <Link href="/projects">
            View All
            <ArrowBigRight className="w-4 h-4 mr-2" />
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((product, i) => (
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
                      <Badge key={idx} variant="secondary" className="text-xs">
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
    </section>
  );
}
