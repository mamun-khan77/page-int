interface StatCardProps {
  value: string;
  label: string;
  className?: string;
}

export default function StatCard({ value, label, className = '' }: StatCardProps) {
  return (
    <div className={`text-center ${className}`}>
      <div className="text-4xl font-extrabold text-accent-600 sm:text-5xl">{value}</div>
      <div className="mt-1.5 text-sm font-medium text-steel-600">{label}</div>
    </div>
  );
}
