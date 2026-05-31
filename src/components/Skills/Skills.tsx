import { MdOutlineLogoDev } from "react-icons/md";
import { motion } from "framer-motion";
import {
  fadeInUp,
  marqueeVariants,
  staggerContainer,
} from "../../animations/variants";
const Skills = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      id="skills"
      className="relative min-h-175 md:h-screen flex flex-col justify-center py-20 md:py-40 px-6 md:px-20 gap-12 md:gap-20 overflow-hidden"
    >
      <motion.h1
        variants={marqueeVariants}
        animate="animate"
        className="
    absolute
    hidden
    md:block
    font-black
    text-[180px]
    text-center
    tracking-[-9px]
    font-headline
    select-none
    pointer-events-none
    whitespace-nowrap
    text-transparent
    [-webkit-text-stroke:1px_rgba(255,255,255,0.1)]
  "
      >
        FRONTEND ENGINEERING FRONTEND ENGINEERING
      </motion.h1>
      <div className="flex flex-col gap-4 justify-center items-center">
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-medium text-sm tracking-[1.4px] text-text"
        >
          CORE COMPETENCIES
        </motion.p>
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-headline font-semibold text-4xl text-second-text"
        >
          Technical Arsenal
        </motion.h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="p-8 flex flex-col gap-6  bg-black/10 border-l border-text"
        >
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
        </motion.div>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="p-8 flex flex-col gap-6  bg-black/10 border-l border-text"
        >
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
        </motion.div>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="p-8 flex flex-col gap-6  bg-black/10 border-l border-text"
        >
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
        </motion.div>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="p-8 flex flex-col gap-6  bg-black/10 border-l border-text"
        >
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
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
