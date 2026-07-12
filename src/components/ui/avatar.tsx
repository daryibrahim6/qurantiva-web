import Image from "next/image";
import { cn } from "@/lib/utils";

interface AvatarProps {
  src?: string;
  alt?: string;
  fallback?: string;
  className?: string;
}

export function Avatar({ src, alt = "", fallback = "", className }: AvatarProps) {
  return (
    <div
      className={cn(
        "relative flex size-10 shrink-0 overflow-hidden rounded-full",
        className,
      )}
    >
      {src ? (
        <Image src={src} alt={alt} fill className="object-cover" sizes="40px" />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-accent-100 text-sm font-semibold text-accent-700">
          {fallback.charAt(0)}
        </div>
      )}
    </div>
  );
}
