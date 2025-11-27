"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const offerings = [
  'Python Django',
  'Machine Learning & Data Science',
  'PHP Web Development',
  'Java',
  'React JS',
  'Android',
  'Software Testing',
  'Flutter',
  'AWS Solution Architect',
  'Data Analytics',
];

const InternshipOfferings = () => {
  const [mounted, setMounted] = useState(false);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  useEffect(() => {
    setMounted(true);
  }, []);

  const MotionDiv = mounted ? motion.div : 'div';
  const MotionH2 = mounted ? motion.h2 : 'h2';
  const MotionLi = mounted ? motion.li : 'li';

  return (
    <section ref={ref} className="bg-background py-16 overflow-hidden">
      <div className="container mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Image */}
          <MotionDiv
            {...(mounted ? {
              initial: { opacity: 0, x: -100, rotateY: -15 },
              animate: isVisible ? { opacity: 1, x: 0, rotateY: 0 } : {},
              transition: { duration: 0.8, ease: "easeOut" },
              whileHover: { scale: 1.05, rotateY: -5, rotateX: 5 }
            } : {})}
            className="flex justify-center perspective-1000"
          >
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3439fb31-d549-4416-a97d-21355b70295c-maxgentechnologies-com/assets/images/IT-internship-BlDTu_1_-5.webp"
              alt="A group of four diverse students with backpacks and books, representing IT internship candidates."
              width={500}
              height={387}
              className="h-auto w-full max-w-md will-change-transform"
            />
          </MotionDiv>

          {/* Right Column: Text Content */}
          <MotionDiv
            {...(mounted ? {
              initial: { opacity: 0, x: 100, rotateY: 15 },
              animate: isVisible ? { opacity: 1, x: 0, rotateY: 0 } : {},
              transition: { duration: 0.8, ease: "easeOut", delay: 0.2 }
            } : {})}
            className="text-center md:text-left"
          >
            <MotionH2
              {...(mounted ? {
                initial: { opacity: 0, y: 30 },
                animate: isVisible ? { opacity: 1, y: 0 } : {},
                transition: { duration: 0.6, delay: 0.4 }
              } : {})}
              className="text-3xl font-semibold text-heading-gray mb-6"
            >
              Our Internship Offerings
            </MotionH2>
            
            <ul className="space-y-3 inline-block text-left">
              {offerings.map((item, index) => (
                <MotionLi
                  key={index}
                  {...(mounted ? {
                    initial: { opacity: 0, x: -20 },
                    animate: isVisible ? { opacity: 1, x: 0 } : {},
                    transition: { duration: 0.4, delay: 0.5 + index * 0.1 },
                    whileHover: { x: 10, color: "#B63339" }
                  } : {})}
                  className="flex items-start cursor-default transition-colors"
                >
                  <span className="text-foreground/80 mr-3 mt-[7px] text-[8px]">&#9679;</span>
                  <span className="text-foreground">{item}</span>
                </MotionLi>
              ))}
            </ul>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default InternshipOfferings;