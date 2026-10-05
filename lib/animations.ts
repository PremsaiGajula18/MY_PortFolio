import { Variants } from "framer-motion";

export const fadeIn = (
  direction: "up" | "down" | "left" | "right" | "none" = "up",
  delay: number = 0,
  duration: number = 0.6
): Variants => {
  return {
    hidden: {
      y: direction === "up" ? 28 : direction === "down" ? -28 : 0,
      x: direction === "left" ? 28 : direction === "right" ? -28 : 0,
      opacity: 0,
    },
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 24,
        stiffness: 100,
        duration,
        delay,
      },
    },
  };
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const floatAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-8, 8, -8],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const pulseGlow = {
  initial: { opacity: 0.4, scale: 1 },
  animate: {
    opacity: [0.4, 0.7, 0.4],
    scale: [1, 1.05, 1],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const cardHover = {
  rest: { y: 0, scale: 1, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)" },
  hover: {
    y: -6,
    scale: 1.015,
    boxShadow: "0 20px 40px -15px rgba(79, 70, 229, 0.25)",
    transition: { type: "spring", stiffness: 350, damping: 25 },
  },
};
