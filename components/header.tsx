import Link from "next/link";

export function Header() {
  return (
    <header className="absolute top-10 left-10 flex justify-between">
      <Link className="font-serif" href="/">
        lewis gorman-neale
      </Link>
    </header>
  );
}
