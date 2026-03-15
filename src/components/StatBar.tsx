const stats = [
  { value: "12",   label: "Free Templates" },
  { value: "4",    label: "Categories" },
  { value: "100%", label: "Open Source" },
];

export default function StatBar() {
  return (
    <div className="flex flex-wrap justify-center gap-8 sm:gap-20">
      {stats.map(({ value, label }) => (
        <div key={label} className="text-center">
          <p className="text-4xl font-bold tracking-tight text-indigo-500">{value}</p>
          <p className="mt-1 text-sm text-tx-secondary">{label}</p>
        </div>
      ))}
    </div>
  );
}
