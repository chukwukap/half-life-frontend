import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <Link href="/" className={cn("flex items-center gap-2", className)}>
      <div className="flex items-center">
        <div className="relative h-8 w-8">
          <div className="absolute h-4 w-4 rounded-full bg-primary opacity-70" />
          <div className="absolute bottom-0 right-0 h-6 w-6 rounded-full bg-accent" />
        </div>
        <span className="text-xl font-semibold ml-2">halflife</span>
      </div>
    </Link>
  );
};
