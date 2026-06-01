import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import {
  fadeInUp,
  linesContainer,
  lineVariant,
  staggerContainer,
} from "../../animations/variants";
import { AnimatedText } from "../../helpers/AnimatedText";
import { scrollToSection } from "../../helpers/scrollToSection";
import { focusContactForm } from "../../helpers/focusContactForm";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full bg-linear-to-b from-primary/10 to-transparent min-h-screen py-20 px-6 md:px-0">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-6 items-center max-w-4xl"
      >
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="rounded-full bg-neutral px-4 py-1.5 flex items-center justify-center gap-2 border border-primary/50 w-fit"
        >
          <div className="rounded-full h-2 w-2 bg-[#8BD6B4]" />
          <p className="uppercase text-xs font-medium text-text">
            AVAILABLE FOR NEW PROJECTS
          </p>
        </motion.div>
        <motion.div
          variants={linesContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-0 leading-tight text-center md:text-left"
        >
          <motion.h1
            variants={lineVariant}
            className="text-4xl md:text-7xl font-headline font-bold tracking-[-2.88px] text-second-text"
          >
            <AnimatedText text="Frontend Developer" />
            <span className="text-primary"> |</span>
          </motion.h1>

          <motion.h1
            variants={lineVariant}
            className="text-4xl md:text-7xl font-headline font-bold tracking-[-2.88px] md:text-center text-second-text"
          >
            <AnimatedText text="React.js" />
            <span className="text-primary"> | </span>
            <AnimatedText text="TypeScript" />
            <br />
            <AnimatedText text="Specialist" />
          </motion.h1>
        </motion.div>
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="font-headline text-text text-center"
        >
          Crafting scalable, high-performance applications with precision and
          clean architecture.
          <br /> Focused on building the web's next premium experiences.
        </motion.p>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-center w-full"
        >
          <motion.button
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-3 text-[#6C4F00] bg-primary rounded-full px-6 md:px-10 py-3 md:py-4"
            onClick={() => scrollToSection("work")}
          >
            <p className="font-bold text-sm tracking-[1.4px]">View My Work</p>
            <FaArrowRight />
          </motion.button>
          <motion.button
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-3 text-primary rounded-full px-6 md:px-10 py-3 md:py-4 border-2 border-primary"
            onClick={() => focusContactForm()}
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
