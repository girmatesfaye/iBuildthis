import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Featured() {
  const items = [
    {
      title: "ParityKit",
      desc: "Price parity for global SaaS products",
      tags: ["SaaS", "Pricing", "Global"],
    },
    {
      title: "Developer to Leader",
      desc: "A course on Engineering Leadership",
      tags: ["Course", "Leadership"],
    },
  ];

  return (
    <section className="px-4 sm:px-6 py-12 sm:py-16">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold">Featured Today</h2>
          <p className="text-gray-500 text-sm sm:text-base">
            Top picks from our community
          </p>
        </div>
        <Button variant="outline" className="w-full sm:w-auto">
          View All
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item, i) => (
          <Card key={i} className="rounded-2xl shadow-sm">
            <CardContent className="p-4 sm:p-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-sm sm:text-base">
                  {item.title}
                </h3>
                <Badge className="bg-pink-500 text-white text-xs">
                  Featured
                </Badge>
              </div>

              <p className="text-gray-600 text-sm mb-4">{item.desc}</p>

              <div className="flex gap-2 flex-wrap">
                {item.tags.map((tag, idx) => (
                  <Badge key={idx} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}