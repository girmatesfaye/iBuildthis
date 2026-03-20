import { LucideIcon } from "lucide-react";
import React from "react";

export default function EmptyState({
  message,
  icon: Icon,
}: {
  message: string;
  icon?: LucideIcon;
}) {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center gap-4">
      {Icon && <Icon className="size-25"></Icon>}
      <p>{message}</p>
    </div>
  );
}
