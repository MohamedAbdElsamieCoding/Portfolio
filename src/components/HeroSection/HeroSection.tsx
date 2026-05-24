import { FaArrowRight } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-linear-to-b from-primary/10 to-transparent min-h-screen">
      <div className="flex flex-col gap-6 items-center">
        <div className="rounded-full bg-neutral px-4 py-1.5 flex items-center justify-center gap-2 border border-primary/50 w-fit">
          <div className="rounded-full h-2 w-2 bg-[#8BD6B4]" />
          <p className="uppercase text-xs font-medium text-text">
            AVAILABLE FOR NEW PROJECTS
          </p>
        </div>
        <div className="flex flex-col gap-[-1px]">
          <h1 className="text-7xl font-headline font-bold tracking-[-2.88px] text-[#D8E3FB]">
            Frontend Developer <span className="text-primary">|</span>
          </h1>
          <h1 className="text-7xl font-headline font-bold tracking-[-2.88px] text-center text-[#D8E3FB]">
            React.js <span className="text-primary">|</span> TypeScript <br />
            Specialist
          </h1>
        </div>
        <p className="font-headline text-text text-center">
          Crafting scalable, high-performance applications with precision and
          clean architecture.
          <br /> Focused on building the web's next premium experiences.
        </p>
        <div className="flex gap-6 items-center justify-center">
          <button className="flex items-center gap-3 text-[#6C4F00] bg-primary rounded-full px-10 py-4">
            <p className="font-bold text-sm tracking-[1.4px]">View My Work</p>
            <FaArrowRight />
          </button>
          <button className="flex items-center gap-3 text-primary rounded-full px-10 py-4 border-2 border-primary ">
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
