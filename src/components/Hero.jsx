import { motion } from "motion/react";
import Aurora from "./Aurora";
import RotatingText from "./RotatingText";

const rotatingTexts = [
  "Websites.",
  "SaaS Platforms.",
  "Mobile Apps.",
  "Digital Products."
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Aurora Background */}
      <div className="absolute inset-0 z-0">
        <Aurora
          colorStops={['#5227FF', '#7cff67', '#5227FF']}
          amplitude={1.0}
          blend={0.5}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[var(--bg)]/60 z-10" />

      {/* Content */}
      <div className="relative z-20 min-h-screen flex items-center justify-center md:justify-start px-4 sm:px-6 md:px-8 lg:px-16">
        {/* Main Container */}
        <div className="w-full max-w-7xl">
          {/* Mobile: Center aligned row, Desktop: Left-aligned row */}
          <motion.div
            layout
            className="flex flex-row items-center justify-center md:justify-start gap-2 md:gap-4"
          >
            {/* We Build Text */}
            <motion.p
              layout
              className=" text-xl sm:text-2xl md:text-3xl font-medium font-clash text-white whitespace-nowrap"
            >
              We Build
            </motion.p>

            {/* Rotating Text */}
            <RotatingText
              texts={rotatingTexts}
              mainClassName="px-2 sm:px-3 md:px-4 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 rounded-lg text-xl sm:text-4xl md:text-5xl font-medium font-clash whitespace-nowrap inline-flex items-center"
              staggerFrom="last"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-120%", opacity: 0 }}
              staggerDuration={0.03}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{
                type: "spring",
                damping: 20,
                stiffness: 300
              }}
              animatePresenceMode="popLayout"
              rotationInterval={2500}
              splitBy="characters"
              auto
              loop
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
