"use client";

import { useState, useEffect } from 'react';
import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const ServicesIntro = () => {
  const [mounted, setMounted] = useState(false);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  useEffect(() => {
    setMounted(true);
  }, []);

  const MotionH2 = mounted ? motion.h2 : 'h2';
  const MotionP = mounted ? motion.p : 'p';

  return (
    <section ref={ref} className="mx-5 my-5 px-5 py-0 sm:py-5">
      <div className="my-5 text-center">
        <MotionH2
          {...(mounted ? {
            initial: { opacity: 0, y: 50, rotateX: -20 },
            animate: isVisible ? { opacity: 1, y: 0, rotateX: 0 } : {},
            transition: { duration: 0.7, ease: "easeOut" }
          } : {})}
          className="text-xl font-semibold md:text-2xl lg:text-3xl"
        >
          Let Us Help with Your Business IT Needs
        </MotionH2>
        
        <MotionP
          {...(mounted ? {
            initial: { opacity: 0, y: 30 },
            animate: isVisible ? { opacity: 1, y: 0 } : {},
            transition: { duration: 0.7, delay: 0.2, ease: "easeOut" }
          } : {})}
          className="m-auto mt-5 w-full text-base font-medium text-gray-600 md:w-3/4"
        >
          We are a unique product development company offering competitive
          software solutions to unlock your business potential. We help brands
          navigate their digital transformation journey.
        </MotionP>
      </div>
    </section>
  );
};

export default ServicesIntro;