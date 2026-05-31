import { motion } from "framer-motion";
import { textContainer, letterAnimation } from "../animations/variants";

interface Props {
  text: string;
}

export const AnimatedText = ({ text }: Props) => (
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
