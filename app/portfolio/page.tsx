import { Badge } from "@/components/ui/badge";
import { Fragment } from "react";

export default function Portfolio() {
  return (
    <Fragment>
      <section className="mt-32 flex flex-col mb-8">
        <h3 className="ml-2">featured</h3>
        <div className="flex gap-8 px-4 mt-3">
          <div className="h-72 w-72 bg-white"></div>
          <div className="h-72 w-72 bg-white"></div>
          <div className="h-72 w-72 bg-white"></div>
        </div>
      </section>
      <section>
        <h3 className="ml-2">all</h3>
        <ul>
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
