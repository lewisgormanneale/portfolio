import Link from "next/link";

export function Header() {
  return (
    <header className="absolute top-10 left-10 flex justify-between">
      <Link className="font-sans pr-10 pl-2 bg-background z-10" href="/">
        lewis gorman-neale
      </Link>
    </header>
  );
}
