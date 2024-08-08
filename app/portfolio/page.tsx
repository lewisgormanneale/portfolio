import { Badge } from "@/components/ui/badge";
import { Fragment } from "react";

export default function Portfolio() {
  return (
    <Fragment>
      <section className="mt-32 h-80 flex items-center font-unbounded">
        <h2 className="text-4xl [writing-mode:vertical-lr] rotate-180 px-4">
          featured
        </h2>
        <div className="flex gap-8 w-full">
          <div className="h-72 w-72 bg-secondary"></div>
        </div>
      </section>
      <section className="h-2/3 flex items-center justify-start gap-2 font-mono">
        <h2 className="text-4xl [writing-mode:vertical-lr] rotate-180 font-unbounded px-4">
          all
        </h2>
        <ul className="h-2/3">
          <li className="flex gap-2">
            <a href="https://teiai-group.vercel.app/">Teiai Group</a>
            <Badge variant="outline">
              <a href="https://teiai-group.vercel.app/">Live</a>
            </Badge>
            <Badge variant="outline">
              <a href="https://github.com/lewisgormanneale/teiai-group">
                GitHub
              </a>
            </Badge>
          </li>
        </ul>
      </section>
    </Fragment>
  );
}
