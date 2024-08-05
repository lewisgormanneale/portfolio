import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-10 flex justify-between p-3">
      <Link className="font-serif" href="/">
        lewis gorman-neale
      </Link>
    </header>
  );
}
