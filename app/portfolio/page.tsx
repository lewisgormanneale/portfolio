import { Project } from "@/components/project";
import { Badge } from "@/components/ui/badge";
import { Fragment } from "react";

export default function Portfolio() {
  return (
    <Fragment>
      <section className="h-80 flex items-center">
        <h2 className="text-4xl [writing-mode:vertical-lr] rotate-180 px-4 font-unbounded">
          featured
        </h2>
        <div className="flex gap-8 w-full">
          <div className="h-72 w-72 bg-secondary"></div>
        </div>
      </section>
      <section className="h-2/3 flex items-center gap-2 font-mono">
        <h2 className="text-4xl [writing-mode:vertical-lr] rotate-180 px-4 font-unbounded">
          all
        </h2>
        <div className="h-2/3 max-w-[800px] flex gap-2">
          <Project
            title="Teiai Group"
            description="Fake company website built with Nuxt, based on the fictional (and evil) Teiai Corporation from the manga Kaiji."
            techStack={["Vue", "Nuxt", "Tailwind CSS"]}
            liveUrl="https://teiai-group.vercel.app/"
            githubUrl="https://github.com/lewisgormanneale/teiai-group"
          />
        </div>
      </section>
    </Fragment>
  );
}
