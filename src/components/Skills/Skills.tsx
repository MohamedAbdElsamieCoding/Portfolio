import { MdOutlineLogoDev } from "react-icons/md";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative h-screen flex flex-col justify-center py-40 px-20 gap-20 overflow-hidden"
    >
      <h1 className="absolute font-black text-[180px] text-center tracking-[-9px] font-headline select-none pointer-events-none text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.1)]">
        FRONTEND ENGINEERING
      </h1>
      <div className="flex flex-col gap-4 justify-center items-center">
        <p className="font-medium text-sm tracking-[1.4px] text-text">
          CORE COMPETENCIES
        </p>
        <h1 className="font-headline font-semibold text-4xl text-second-text">
          Technical Arsenal
        </h1>
      </div>
      <div className="grid grid-cols-4 gap-8">
        <div className="p-8 flex flex-col gap-6  bg-black/10 border-l border-text">
          <div className="flex items-center gap-4">
            <MdOutlineLogoDev className="text-text text-xl" />
            <p className="text-second-text font-bold tracking-[1.4px] text-sm">
              Frontend
            </p>
          </div>
          <ul className="list-disc space-y-4 list-inside text-text font-headline text-base">
            <li>React / Next.js</li>
            <li>TypeScript</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>
        <div className="p-8 flex flex-col gap-6  bg-black/10 border-l border-text">
          <div className="flex items-center gap-4">
            <MdOutlineLogoDev className="text-text text-xl" />
            <p className="text-second-text font-bold tracking-[1.4px] text-sm">
              State
            </p>
          </div>
          <ul className="list-disc space-y-4 list-inside text-text font-headline text-base">
            <li>Redux / Toolkit</li>
            <li>Zustand</li>
            <li>React Query</li>
          </ul>
        </div>
        <div className="p-8 flex flex-col gap-6  bg-black/10 border-l border-text">
          <div className="flex items-center gap-4">
            <MdOutlineLogoDev className="text-text text-xl" />
            <p className="text-second-text font-bold tracking-[1.4px] text-sm">
              Tools
            </p>
          </div>
          <ul className="list-disc space-y-4 list-inside text-text font-headline text-base">
            <li>Git / GitHub</li>
            <li>Vite / Webpack</li>
            <li>Figma</li>
          </ul>
        </div>
        <div className="p-8 flex flex-col gap-6  bg-black/10 border-l border-text">
          <div className="flex items-center gap-4">
            <MdOutlineLogoDev className="text-text text-xl" />
            <p className="text-second-text font-bold tracking-[1.4px] text-sm">
              Backend
            </p>
          </div>
          <ul className="list-disc space-y-4 list-inside text-text font-headline text-base">
            <li>Firebase / Supabase</li>
            <li>Node.js Basics</li>
            <li>REST / GraphQL</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
