import Hero from "@/components/hero";
import { unbounded } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <section className="flex min-h-screen flex-col items-center">
        <Hero />
      </section>
      <div className="absolute bottom-10 flex justify-center w-full z-10">
        <Link className={unbounded.className} href="/portfolio">
          view projects
        </Link>
      </div>
    </Fragment>
  );
}
