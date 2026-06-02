import { MdOutlineOpenInNew } from "react-icons/md";
import { PiBracketsAngleLight } from "react-icons/pi";
import { motion } from "framer-motion";
import { fadeInUp } from "../../animations/variants";
import type { ProjectCardProps } from "../../types/projectCard.type";


const ProjectCard = ({
  image,
  tech,
  title,
  description,
  liveOnClick,
  gitHubOnClick,
}: ProjectCardProps) => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      className="bg-[#111827] rounded-xl flex flex-col gap-4 overflow-hidden p-6 border border-text/20"
    >
      <div className="relative h-90 overflow-hidden rounded-2xl">
        <img
          src="/bg.jpg"
          className="absolute inset-0 h-full object-cover blur-sm scale-110"
        />

        <img
          src={image}
          className="relative z-10 h-full object-contain grayscale"
        />

        <div className="absolute inset-0 bg-black/40 z-20" />
      </div>

      <div className="px-3 py-1 border border-secondary w-fit mx-4 mb-4 rounded-full">
        <p className="text-secondary">{tech}</p>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-second-text font-medium text-2xl font-headline">
          {title}
        </h1>
        <div className="w-16 h-0.5 bg-secondary" />
      </div>
      <p className="text-text text-base font-headline">{description}</p>
      <div className="flex items-center gap-6">
        <button
          onClick={liveOnClick}
          className="flex gap-2 items-center text-text cursor-pointer"
        >
          <p className="text-sm">Live Demo</p>
          <MdOutlineOpenInNew />
        </button>
        <button
          onClick={gitHubOnClick}
          className="flex gap-2 items-center text-text cursor-pointer"
        >
          <p className="text-sm">GitHub</p>
          <PiBracketsAngleLight />
        </button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
