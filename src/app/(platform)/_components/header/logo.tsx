import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <Link href="/" className={cn("flex items-center gap-2", className)}>
      <div className="flex items-center">
        <Image src="/logo.svg" alt="halflife" width={32} height={32} />
        <span className="text-xl font-semibold ml-2">halflife</span>
      </div>
    </Link>
  );
};
