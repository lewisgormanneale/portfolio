import { Badge } from "@/components/ui/badge";
import { LucideGithub } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <div className="w-full h-[calc(100vh-80px)] flex flex-col justify-evenly">
      <section className="w-full flex flex-col md:flex-row gap-8 justify-center items-center px-4 md:px-24 mb-12">
        <div className="md:w-1/2 flex justify-center items-center">
          <Image
            src="/images/memoji.jpeg"
            alt="Lewis"
            width={256}
            height={256}
            className="rounded-full"
          ></Image>
        </div>
        <div className="flex flex-col justify-center items-center font-mono text-sm w-full md:w-1/2">
          <p className="font-unbounded text-3xl mb-4">hi, i&apos;m lewis</p>
          <p className="mb-3">Some facts about me:</p>
          <ul className="list-disc pl-5 text-xs space-y-2">
            <li>
              I&apos;m currently working as a frontend developer at{" "}
              <a
                className="underline"
                href="https://www.codeweavers.net/"
                target="_blank"
              >
                Codeweavers
              </a>{" "}
              (not CodeWeavers, they&apos;re different!)
            </li>
            <li>
              Before becoming a developer, I&apos;ve worked in IT, as a Business
              Systems Manager, in QA and technical support roles, and more.
            </li>
            <li>I&apos;m a dual British/Canadian citizen 🇬🇧/🇨🇦</li>
            <li>
              When I&apos;m not coding projects outside of work, my other main
              hobby is gaming 🎮 Favourite games include anything FromSoft,
              Final Fantasy, Yakuza, Shin Megami Tensei...
            </li>
          </ul>
        </div>
      </section>
      <section className="flex items-center justify-center gap-8 mb-8">
        <div className="w-1/2 flex items-center  max-w-[600px]">
          <h2 className="text-3xl [writing-mode:vertical-lr] rotate-180 px-4 font-unbounded">
            skills
          </h2>
          <div className="flex gap-2 w-full flex-wrap items-start">
            <Badge>JavaScript</Badge>
            <Badge>TypeScript</Badge>
            <Badge>React</Badge>
            <Badge>Angular</Badge>
            <Badge>Next.js</Badge>
            <Badge>Vue</Badge>
            <Badge>Nuxt</Badge>
            <Badge>Jest</Badge>
            <Badge>Cypress</Badge>
            <Badge>Playwright</Badge>
            <Badge>Git</Badge>
            <Badge>PostgreSQL</Badge>
            <Badge>Docker</Badge>
            <Badge>Express</Badge>
            <Badge>Node.js</Badge>
            <Badge>Figma</Badge>
            <Badge>Tailwind CSS</Badge>
            <Badge>Three.js</Badge>
            <Badge>Framer Motion</Badge>
            <Badge variant={"outline"}>and more...</Badge>
          </div>
        </div>
        <div className="w-1/2 flex items-center max-w-[600px]">
          <h2 className="text-3xl [writing-mode:vertical-lr] rotate-180 px-4 font-unbounded">
            contact
          </h2>
          <div className="flex sm:flex-row flex-col gap-8 w-full justify-evenly items-center">
            <a
              href="https://github.com/lewisgormanneale"
              className="text-2xl h-16 w-16 md:h-24 md:w-24 hover:text-cyan-500 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <svg
                role="img"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>GitHub</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/lewisgormanneale/"
              className="text-2xl h-16 w-16 md:h-24 md:w-24 hover:text-cyan-500 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg
                role="img"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>LinkedIn</title>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
