import Link from 'next/link';
import { Button } from '@/components/ui';

export default function PackageNotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-6 font-sans">
      <h2 className="text-3xl font-serif font-bold text-primary mb-4">Package Not Found</h2>
      <p className="text-primary-light mb-8 max-w-md">
        The requested travel package does not exist or has expired. Please select a different
        package.
      </p>
      <Link href="/#packages">
        <Button variant="primary">View Packages</Button>
      </Link>
    </div>
  );
}
