export default function About() {
  return (
    <div className="w-full h-[calc(100vh-80px)]">
      <section className="w-full h-2/3 flex flex-col md:flex-row gap-8 justify-center items-center px-4 md:px-24">
        <div className="md:w-1/2 flex justify-center items-center">
          <div className="bg-white w-64 h-64 rounded-full"></div>
        </div>
        <div className="flex flex-col justify-center items-center font-mono text-sm w-full md:w-1/2">
          <p className="font-unbounded text-3xl mb-4">hi, i'm lewis</p>
          <p className="mb-3">Some facts about me:</p>
          <ul className="list-disc pl-5 text-xs space-y-2">
            <li>
              I'm currently working as a frontend developer at{" "}
              <a
                className="underline"
                href="https://www.codeweavers.net/"
                target="_blank"
              >
                Codeweavers
              </a>{" "}
              (not CodeWeavers, they're different!)
            </li>
            <li>
              Before becoming a developer, I've worked in IT, as a Business
              Systems Manager, in QA and technical support roles, and more.
            </li>
            <li>I'm a dual British/Canadian citizen 🇬🇧/🇨🇦</li>
            <li>
              When I'm not coding projects outside of work, my other main hobby
              is gaming 🎮 Favourite games incl. anything FromSoft, Final
              Fantasy, Yakuza, Shin Megami Tensei...
            </li>
          </ul>
        </div>
      </section>
      <section className="h-1/3 flex items-center">
        <div className="w-1/2">
          <h2 className="text-3xl [writing-mode:vertical-lr] rotate-180 px-4 font-unbounded">
            skills
          </h2>
          <div className="flex gap-8 w-full"></div>
        </div>
        <div className="w-1/2">
          <h2 className="text-3xl [writing-mode:vertical-lr] rotate-180 px-4 font-unbounded">
            contact
          </h2>
          <div className="flex gap-8 w-full"></div>
        </div>
      </section>
    </div>
  );
}
