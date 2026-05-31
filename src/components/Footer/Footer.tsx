import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
} from "../../animations/variants";
const Footer = () => {
  return (
    <motion.footer variants={staggerContainer}>
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col md:flex-row md:justify-between items-center border-t border-neutral py-8 md:py-20 px-6 md:px-20 bg-[#040E1F] w-full gap-4"
      >
        <p className="tracking-[-0.7px] font-black text-sm">ARCHITECT.DEV</p>
        <ul className="flex flex-wrap md:flex-nowrap gap-4 md:gap-10 text-text font-medium text-xs justify-center md:justify-start">
          <li>Source Code</li>
          <li>Privacy</li>
          <li>LinkedIn</li>
          <li>GitHub</li>
        </ul>
        <p className="text-text tracking-[1.2px] font-medium text-xs text-center md:text-right">
          © 2024 ARCHITECT.DEV — ENGINEERED WITH PRECISION
        </p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
