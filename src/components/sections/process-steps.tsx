"use client";

import { useState, useEffect } from 'react';
import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const processStepsData = [
  {
    title: 'Identify',
    alt: 'Identify process icon',
  },
  {
    title: 'Implement',
    alt: 'Implement process icon',
  },
  {
    title: 'Manage',
    alt: 'Manage process icon',
  },
];

export default function ProcessSteps() {
  const [mounted, setMounted] = useState(false);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  useEffect(() => {
    setMounted(true);
  }, []);

  const MotionDiv = mounted ? motion.div : 'div';
  const MotionP = mounted ? motion.p : 'p';

  return (
    <section ref={ref} className="container mx-auto my-8 md:my-16 px-4">
      <div className="relative flex flex-col sm:flex-row justify-center items-center gap-12 sm:gap-40 py-8">
        {/* Connecting line */}
        <MotionDiv
          {...(mounted ? {
            initial: { scaleX: 0 },
            animate: isVisible ? { scaleX: 1 } : {},
            transition: { duration: 1, delay: 0.3 }
          } : {})}
          className="absolute top-[15%] sm:top-[40%] left-0 right-0 h-[1px] w-full bg-gray-300 -z-10 sm:block hidden origin-center"
        />
        <MotionDiv
          {...(mounted ? {
            initial: { scaleY: 0 },
            animate: isVisible ? { scaleY: 1 } : {},
            transition: { duration: 1, delay: 0.3 }
          } : {})}
          className="absolute top-0 bottom-0 left-1/2 w-[1px] h-full bg-gray-300 -z-10 sm:hidden block origin-top"
        />
        
        {processStepsData.map((step, index) => (
          <MotionDiv
            key={index}
            {...(mounted ? {
              initial: { opacity: 0, y: 50, rotateY: -30, scale: 0.8 },
              animate: isVisible ? { opacity: 1, y: 0, rotateY: 0, scale: 1 } : {},
              transition: { duration: 0.6, delay: index * 0.2 + 0.4, ease: "easeOut" },
              whileHover: { scale: 1.1, rotateY: 10, rotateX: 5, z: 50 }
            } : {})}
            className="flex flex-col items-center text-center relative z-20 perspective-1000"
          >
            {/* Icon circle */}
            <MotionDiv
              {...(mounted ? {
                whileHover: { boxShadow: "0 20px 40px rgba(182, 51, 57, 0.3)" },
                transition: { duration: 0.3 }
              } : {})}
              className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white shadow-md flex items-center justify-center mb-4 border-4 border-gray-100 will-change-transform"
            >
              <MotionDiv
                {...(mounted ? {
                  initial: { scale: 0 },
                  animate: isVisible ? { scale: 1 } : {},
                  transition: { duration: 0.5, delay: index * 0.2 + 0.6, type: "spring" }
                } : {})}
                className="text-4xl md:text-5xl font-bold text-primary"
              >
                {index + 1}
              </MotionDiv>
            </MotionDiv>
            {/* Label */}
            <MotionP
              {...(mounted ? {
                initial: { opacity: 0 },
                animate: isVisible ? { opacity: 1 } : {},
                transition: { duration: 0.5, delay: index * 0.2 + 0.8 }
              } : {})}
              className="text-base md:text-lg font-medium text-heading-gray"
            >
              {step.title}
            </MotionP>
          </MotionDiv>
        ))}
      </div>
    </section>
  );
}