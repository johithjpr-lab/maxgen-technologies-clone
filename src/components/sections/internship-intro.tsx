"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const InternshipIntro = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={ref} className="bg-background py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-10">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50, rotateX: -20 }}
            animate={isVisible ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mx-auto max-w-4xl font-semibold text-2xl text-heading-gray md:text-3xl lg:text-4xl"
          >
            Grab The Opportunity to Work with Us & Learn As Well
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="mx-auto mt-5 w-full text-base font-medium text-foreground md:w-3/4"
          >
            InfoZen's internship will allow you to work alongside and pick the brains of a group of web developers with the
            ultimate knowledge for Mobile app development, Android app development, Flutter app development, WordPress web
            development, Front-end development, UI design, Software development, etc.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default InternshipIntro;