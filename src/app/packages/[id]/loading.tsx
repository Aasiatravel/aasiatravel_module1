import React from 'react';
import { Skeleton } from '@/components/ui';

export default function PackageLoading() {
  return (
    <div className="container-custom py-20 space-y-12 font-sans">
      <Skeleton className="h-6 w-1/4" />

      <div className="grid lg:grid-cols-[1fr_415px] gap-12">
        <div className="space-y-6">
          <Skeleton className="h-10 w-2/3" />
          <Skeleton className="h-32 w-full" />
        </div>
        <Skeleton className="h-64 w-full" />
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Skeleton className="h-32 w-full" />
        <Skeleton className="h-32 w-full" />
        <Skeleton className="h-32 w-full" />
      </div>
    </div>
  );
}
