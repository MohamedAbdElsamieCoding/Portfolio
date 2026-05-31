import { motion } from "framer-motion";
import { navLinks } from "./navbar.service";
import { useState, useEffect } from "react";
import { fadeInOut } from "../../animations/variants";

const Navbar = () => {
  const [active, setActive] = useState("work");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 150;

      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);

        if (
          section &&
          scrollY >= section.offsetTop &&
          scrollY < section.offsetTop + section.offsetHeight
        ) {
          setActive(link.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <motion.nav
      variants={fadeInOut}
      initial="hidden"
      animate="visible"
      className="fixed top-0 left-0 w-full py-3 md:py-4 px-4 md:px-20 bg-[#0C1725] shadow-lg shadow-primary/4 z-50"
    >
      <div className="flex justify-between items-center md:py-6">
        <h1 className="text-primary font-bold tracking-[-1.2px] leading-7 md:leading-[33.6px] cursor-default font-headline text-sm md:text-base">
          ARCHITECT.DEV
        </h1>
        <ul className="hidden md:flex gap-8">
          {navLinks.map((item) => (
            <li key={item.id} className="relative">
              <a
                href={`#${item.id}`}
                onClick={() => setActive(item.id)}
                className="relative cursor-pointer text-text text-sm tracking-[1.4px] pb-2"
              >
                {item.title}
                {active === item.id && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 -bottom-1 h-0.5 w-full bg-primary rounded-full"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 40,
                    }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>
        <button className="bg-primary px-4 md:px-6 py-2 rounded-full text-neutral font-bold text-sm tracking-[1.4px]">
          Hire Me
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
