import { MdOutlineOpenInNew } from "react-icons/md";
import { PiBracketsAngleLight } from "react-icons/pi";

const Work = () => {
  return (
    <section
      id="work"
      className="bg-[#081425] flex flex-col justify-center py-40 px-20 gap-20"
    >
      <div className="flex justify-between p-4 items-end">
        <div className="flex flex-col gap-4">
          <p className="uppercase font-medium tracking-[1.4px] text-text">
            Selected works
          </p>
          <h1 className="uppercase font-semibold tracking-[-0.8px] text-5xl">
            Digital Craftsmanship
          </h1>
        </div>
        <p className="text-base text-text">
          A curated collection of interfaces designed <br /> for performance and
          scale.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-12">
        <div className="bg-[#111827] rounded-xl flex flex-col gap-4 overflow-hidden p-6 border border-text/20">
          <div className="relative h-90 overflow-hidden rounded-2xl">
            <img
              src="/bg.jpg"
              className="absolute inset-0 h-full object-cover blur-sm scale-110"
            />

            <img
              src="/nidaa.png"
              className="relative z-10 h-full object-contain grayscale"
            />

            <div className="absolute inset-0 bg-black/40 z-20" />
          </div>

          <div className="px-3 py-1 border border-secondary w-fit mx-4 mb-4 rounded-full">
            <p className="text-secondary">TypeScript</p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-second-text font-medium text-2xl font-headline">
              Nidaa Prayer Times App
            </h1>
            <div className="w-16 h-0.5 bg-secondary" />
          </div>
          <p className="text-text text-base font-headline">
            A high-precision utility for community prayer schedules featuring
            global location awareness and offline first architecture.
          </p>
          <div className="flex items-center gap-6">
            <button className="flex gap-2 items-center text-text cursor-pointer">
              <p className="text-sm">Live Demo</p>
              <MdOutlineOpenInNew />
            </button>
            <button className="flex gap-2 items-center text-text cursor-pointer">
              <p className="text-sm">GitHub</p>
              <PiBracketsAngleLight />
            </button>
          </div>
        </div>
        <div className="bg-[#111827] rounded-xl flex flex-col gap-4 overflow-hidden p-6 border border-text/20">
          <div className="relative h-90 overflow-hidden rounded-2xl">
            <img
              src="/bg.jpg"
              className="absolute inset-0 h-full object-cover blur-sm scale-110"
            />

            <img
              src="/stellar-store.png"
              className="relative z-10 h-full object-contain grayscale"
            />

            <div className="absolute inset-0 bg-black/40 z-20" />
          </div>

          <div className="px-3 py-1 border border-secondary w-fit mx-4 mb-4 rounded-full">
            <p className="text-secondary">TypeScript</p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-second-text font-medium text-2xl font-headline">
              Stellar Store E-commerce
            </h1>
            <div className="w-16 h-0.5 bg-secondary" />
          </div>
          <p className="text-text text-base font-headline">
            A premium full-stack shopping destination with complex cart logic
            and secure checkout integration.
          </p>
          <div className="flex items-center gap-6">
            <button className="flex gap-2 items-center text-text cursor-pointer">
              <p className="text-sm">Live Demo</p>
              <MdOutlineOpenInNew />
            </button>
            <button className="flex gap-2 items-center text-text cursor-pointer">
              <p className="text-sm">GitHub</p>
              <PiBracketsAngleLight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
