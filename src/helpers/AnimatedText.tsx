import { motion } from "framer-motion";
import { textContainer, letterAnimation } from "../animations/variants";
import type { AnimatedTextProps } from "../types/animatedText.type";


export const AnimatedText = ({ text }: AnimatedTextProps) => (
  <motion.span variants={textContainer}>
    {text.split("").map((char, index) => (
      <motion.span
        key={index}
        variants={letterAnimation}
        className="inline-block"
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ))}
  </motion.span>
);
