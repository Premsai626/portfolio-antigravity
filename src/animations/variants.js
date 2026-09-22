/**
 * Centralized Animation System
 * Strict compliance with ANTIGRAVITY_PORTFOLIO_ARCHITECTURE.md:
 * - Micro: 150–250ms (buttons, hovers)
 * - Standard: 300–500ms (cards, navigation)
 * - Reveal: 500–800ms (sections, titles)
 * - Cinematic: 2–3s (Intro)
 */

export const transitions = {
  micro: {
    duration: 0.2,
    ease: [0.25, 0.1, 0.25, 1.0]
  },
  standard: {
    duration: 0.4,
    ease: [0.16, 1, 0.3, 1]
  },
  reveal: {
    duration: 0.7,
    ease: [0.16, 1, 0.3, 1]
  },
  cinematic: {
    duration: 2.2,
    ease: [0.22, 1, 0.36, 1]
  },
  springFast: {
    type: "spring",
    stiffness: 400,
    damping: 30
  },
  springSmooth: {
    type: "spring",
    stiffness: 260,
    damping: 24
  }
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: transitions.standard
  }
};

export const scrollReveal = {
  hidden: { 
    opacity: 0, 
    y: 30,
    filter: "blur(6px)"
  },
  visible: { 
    opacity: 1, 
    y: 0,
    filter: "blur(0px)",
    transition: transitions.reveal
  }
};

export const staggerContainer = (staggerChildren = 0.08, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren
    }
  }
});

export const cardHover = {
  rest: { 
    y: 0, 
    scale: 1,
    transition: transitions.standard
  },
  hover: { 
    y: -4, 
    scale: 1.01,
    transition: transitions.springSmooth
  }
};

export const buttonHover = {
  rest: { scale: 1 },
  hover: { scale: 1.03, transition: transitions.micro },
  tap: { scale: 0.97, transition: transitions.micro }
};

export const imageReveal = {
  hidden: { 
    opacity: 0, 
    scale: 1.04,
    filter: "blur(8px)"
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};
