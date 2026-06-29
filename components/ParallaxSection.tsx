import React, { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

type ParallaxSectionProps = {
  children: ReactNode;
  backgroundImage?: any;
  overlay?: boolean;
  speed?: number; // controls intensity of parallax
  className?: string;
};

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  backgroundImage,
  overlay = true,
  speed = 0.3,
  className = "",
}) => {
  const ref = useRef<HTMLDivElement>(null);

  // Track scroll relative to this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Transform scroll into movement
  const translateY = useTransform(
    scrollYProgress,
    [0, 1],
    ["-10%", `${10 * speed}%`],
  );

  return (
    <section
      ref={ref}
      className={`relative flex items-center justify-center overflow-hidden py-24 ${className}`}
    >
      {/* Background Layer */}
      {backgroundImage && (
        <motion.div style={{ y: translateY }} className="absolute inset-0 z-0">
          <Image
            className="w-full h-[120%] bg-cover bg-center"
            src={backgroundImage}
            alt="parallax-img"
          />
        </motion.div>
      )}

      {/* Overlay */}
      {overlay && <div className="absolute inset-0 bg-black/40 z-10" />}

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 text-center text-white">
        {children}
      </div>
    </section>
  );
};

export default ParallaxSection;
