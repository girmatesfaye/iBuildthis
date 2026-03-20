import React from "react";

export default function SectionHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div>
      <div>
        <h2 className="text-xl sm:text-2xl font-bold">{title}</h2>
        <p className="text-gray-500 text-sm sm:text-base">{description}</p>
      </div>
    </div>
  );
}
