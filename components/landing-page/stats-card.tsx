import { EyeIcon, RocketIcon, UserIcon } from "lucide-react";

export default function Stats() {
  const stats = [
    { icon: RocketIcon, label: "Projects Shared", value: "2.5K+" },
    { icon: UserIcon, label: "Active Creators", value: "10K+" },
    { icon: EyeIcon, label: "Monthly Visitors", value: "50K+" },
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-center gap-6 py-10 px-4">
      {stats.map((item, i) => (
        <div key={i} className="py-4">
          <item.icon className="mx-auto mb-2 text-pink-600" size={32} />
          <h3 className="text-xl sm:text-2xl font-bold">{item.value}</h3>
          <p className="text-gray-500 text-sm sm:text-base">{item.label}</p>
        </div>
      ))}
    </section>
  );
}
