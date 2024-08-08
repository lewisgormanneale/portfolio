import Link from "next/link";

export function Header() {
  return (
    <header className="absolute h-20 top-0 px-4 sm:px-10 w-full flex justify-between items-center font-unbounded">
      <Link
        className="transition-all z-10 text-sm sm:text-lg md:text-2xl lg:text-3xl"
        href="/"
      >
        lewis gorman-neale
      </Link>
      <nav className="flex gap-2 sm:gap-6 flex-col sm:flex-row text-right">
        <Link
          className="z-10 transition-all text-sm sm:text-lg md:text-2xl lg:text-3xl"
          href="/portfolio"
        >
          portfolio
        </Link>
        <Link
          className="z-10 transition-all text-sm sm:text-lg md:text-2xl lg:text-3xl"
          href="/about"
        >
          about
        </Link>
      </nav>
    </header>
  );
}
