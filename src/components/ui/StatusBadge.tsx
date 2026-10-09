import type { Availability } from '@/types';

export default function StatusBadge({ status }: { status: Availability }) {
  const isAvailable = status === 'Available';
  return (
    <span className={`badge ${isAvailable ? 'badge-available' : 'badge-out-of-stock'}`}>
      <span
        className={`inline-block h-1.5 w-1.5 rounded-full ${isAvailable ? 'bg-green-500' : 'bg-amber-500'}`}
        aria-hidden="true"
      />
      {status}
    </span>
  );
}
