import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <Link href="/" className={cn("", className)}>
      <Image
        src="/logo-named.png"
        alt="Halflife Logo"
        width={127}
        height={31}
        priority
      />
    </Link>
  );
};
