'use client';

// imports
import { Skeleton } from '@/components/ui/skeleton';

export default function Loader() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <Skeleton className="w-96 h-12" />
        <Skeleton className="w-3/4 h-5" />
        <Skeleton className="w-32 h-5" />
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Skeleton className="rounded-full h-12 w-12" />
          <Skeleton className="w-80 h-5" />
        </div>
        <Skeleton className="w-96 h-5" />
        <Skeleton className="w-44 h-5" />
        <Skeleton className="w-16 h-5" />
      </div>
    </div>
  );
}
