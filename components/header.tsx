import { unbounded } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function Header() {
  return (
    <header
      className={cn(
        "absolute top-10 h-8 px-10 w-full flex justify-between",
        unbounded.className
      )}
    >
      <Link className="pr-10 pl-2 z-10" href="/">
        lewis gorman-neale
      </Link>
      <nav className="flex">
        <Link className="pr-10 pl-2 z-10" href="/portfolio">
          portfolio
        </Link>
        <Link className="pr-10 pl-2 z-10" href="/about">
          about
        </Link>
      </nav>
    </header>
  );
}
