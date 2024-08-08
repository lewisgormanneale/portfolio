"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="absolute h-20 top-0 px-4 sm:px-10 w-full flex justify-between items-center font-unbounded">
      <Link
        className={`transition-all duration-500 z-10 text-sm sm:text-lg md:text-2xl lg:text-3xl py-2 px-4 ${
          pathname === "/"
            ? "bg-foreground text-background animate-slide-bg"
            : "underline"
        }`}
        href="/"
      >
        lewis gorman-neale
      </Link>
      <nav className="flex gap-2 sm:gap-6 flex-col sm:flex-row text-right">
        <Link
          className={`transition-all duration-500 z-10 text-sm sm:text-lg md:text-2xl lg:text-3xl py-2 px-4 ${
            pathname === "/portfolio"
              ? "bg-foreground text-background"
              : "underline"
          }`}
          href="/portfolio"
        >
          portfolio
        </Link>
        <Link
          className={`transition-all duration-500 z-10 text-sm sm:text-lg md:text-2xl lg:text-3xl py-2 px-4 ${
            pathname === "/about"
              ? "bg-foreground text-background"
              : "underline"
          }`}
          href="/about"
        >
          about
        </Link>
      </nav>
    </header>
  );
}
