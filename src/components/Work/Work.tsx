import { motion } from "framer-motion";
import {
  slideInLeft,
  slideInRight,
  staggerContainer,
} from "../../animations/variants";
import ProjectCard from "./ProjectCard";

const Work = () => {
  return (
    <motion.section
      id="work"
      className="bg-[#081425] flex flex-col justify-center py-20 md:py-40 px-6 md:px-20 gap-12 md:gap-20 w-full"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col justify-start md:justify-between md:flex-row p-4 md:items-end">
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-4"
        >
          <p className="uppercase font-medium tracking-[1.4px] text-text">
            Selected works
          </p>
          <h1 className="uppercase font-semibold tracking-[-0.8px] text-3xl md:text-5xl">
            Digital Craftsmanship
          </h1>
        </motion.div>

        <div className="hidden md:flex h-0.5 w-1/6 bg-neutral" />

        <motion.p
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-base text-text"
        >
          A curated collection of interfaces designed <br /> for performance and
          scale.
        </motion.p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProjectCard
          title="Nidaa Prayer Times App"
          tech="TypeScript"
          image="/nidaa.jpg"
          description="A high-precision utility for community prayer schedules featuring
            global location awareness and offline first architecture."
          gitHubOnClick={() => {}}
          liveOnClick={() => {}}
        />
        <ProjectCard
          title="Stellar Store E-commerce"
          tech="TypeScript"
          image="/stellar-store.jpg"
          description="A premium full-stack shopping destination with complex cart logic
            and secure checkout integration."
          gitHubOnClick={() => {}}
          liveOnClick={() => {}}
        />
        <ProjectCard
          title="Movies Search Website"
          tech="TypeScript"
          image="/movies-web-app.jpg"
          description="A premium cinematic discovery platform with real-time TMDB API integration and
           advanced fluid search. Features secure user authentication alongside a persistent favorites dashboard to deliver a seamless,
            high-performance streaming-companion experience."
          gitHubOnClick={() => {}}
          liveOnClick={() => {}}
        />
      </div>
    </motion.section>
  );
};

export default Work;
