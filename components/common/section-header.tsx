import { LucideIcon } from "lucide-react";
import React from "react";

export default function SectionHeader({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: LucideIcon;
}) {
  return (
    <>
      <div className="flex flex-row gap-4 items-center mb-2">
        <Icon size={28} className="text-green-600 mb-2" />
        <h2 className="text-xl sm:text-2xl font-bold">{title}</h2>
      </div>
      <div>
        <p className="text-gray-500 text-sm sm:text-base">{description}</p>
      </div>
    </>
  );
}
