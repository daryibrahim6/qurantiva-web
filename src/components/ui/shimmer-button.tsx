import Link from "next/link";
import { cn } from "@/lib/utils";

interface ShimmerButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function ShimmerButton({ href, children, className }: ShimmerButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-8 py-4 text-base font-semibold text-accent-900",
        "bg-primary-500 shadow-lg shadow-primary-500/25 transition-all duration-300 hover:shadow-primary-500/40",
        "[background-image:linear-gradient(110deg,#fedd01_45%,#fff099_50%,#fedd01_55%)] [background-size:200%_100%] [animation:shimmer_3s_ease-in-out_infinite]",
        className,
      )}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </Link>
  );
}
