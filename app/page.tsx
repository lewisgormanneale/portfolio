import Hero from "@/components/hero";
import Link from "next/link";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <section className="flex min-h-screen flex-col items-center">
        <Hero />
      </section>
      <div className="absolute bottom-10 flex justify-center w-full z-10">
        <Link className="font-unbounded" href="/portfolio">
          view projects
        </Link>
      </div>
    </Fragment>
  );
}
