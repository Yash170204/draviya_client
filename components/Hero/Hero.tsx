"use client";

import HeroLogos from "./HeroLogos";
import { motion } from "motion/react";
import HeroText from "./HeroText";

const Hero = () => {
  return (
    <section className="relative h-[300dvh] w-dvw">
      {/* HERO TOP - Background + Floating Logos */}
      <div className="hero relative h-dvh w-dvw overflow-hidden">
        {/* Background image */}
        <img
          className="masked-img"
          src="/images/hero/hero-image.jpg"
          alt="Hero Background"
        />

        {/* Mask/Overlay */}
        <div className="hero-overlay" aria-hidden="true" />

        {/* Floating platform logos */}
        <HeroLogos />
      </div>

      {/* HERO CONTENT BELOW */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full pt-60 gap-40">
        <HeroText text="Meet the World's First Creator Stock Exchange" />

        {/* Dashboard Animation */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            scale: {
              type: "spring",
              stiffness: 80,
              damping: 18,
              mass: 1.5,
            },
            opacity: {
              duration: 0.8,
              ease: [0.23, 1, 0.32, 1],
            },
          }}
          className="relative"
        >
          <img
            src="/images/hero/dashboard-img.png"
            alt="Dashboard"
            className="h-[800px] rounded-4xl relative z-10"
          />

          {/* Glow after reveal */}
          <motion.div
            className="absolute inset-0 rounded-4xl pointer-events-none"
            style={{
              boxShadow: "1px -10px 80px -10px #f8532e",
              opacity: 0,
            }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
