"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const MotionDiv = mounted ? motion.div : 'div';
  const MotionH1 = mounted ? motion.h1 : 'h1';
  const MotionP = mounted ? motion.p : 'p';
  const MotionSpan = mounted ? motion.span : 'span';
  const MotionButton = mounted ? motion.button : 'button';

  return (
    <section className="bg-background pt-20 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 md:px-10 md:my-16 my-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <MotionDiv
            {...mounted ? {
              initial: { opacity: 0, x: -100, rotateY: -15 },
              animate: { opacity: 1, x: 0, rotateY: 0 },
              transition: { duration: 0.8, ease: "easeOut" }
            } : {}}
            className="flex items-center justify-center perspective-1000 !text-[27px]">

            {mounted ?
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5 }}
              transition={{ duration: 0.4 }}>

                <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3439fb31-d549-4416-a97d-21355b70295c-maxgentechnologies-com/assets/images/SliderImg3-fBBuA2xN-2.webp"
                alt="An illustration of a team maintaining a business website and application"
                width={800}
                height={700}
                className="w-full h-auto max-w-2xl mx-auto will-change-transform !text-[22px]"
                priority />

              </motion.div> :

            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3439fb31-d549-4416-a97d-21355b70295c-maxgentechnologies-com/assets/images/SliderImg3-fBBuA2xN-2.webp"
              alt="An illustration of a team maintaining a business website and application"
              width={800}
              height={700}
              className="w-full h-auto max-w-2xl mx-auto"
              priority />

            }
          </MotionDiv>

          <MotionDiv
            {...mounted ? {
              initial: { opacity: 0, x: 100, rotateY: 15 },
              animate: { opacity: 1, x: 0, rotateY: 0 },
              transition: { duration: 0.8, ease: "easeOut", delay: 0.2 }
            } : {}}
            className="text-left">

            <div className="space-y-5">
              <MotionH1
                {...mounted ? {
                  initial: { opacity: 0, y: 30 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.6, delay: 0.4 }
                } : {}}
                className="text-4xl lg:text-5xl font-semibold text-gray-800 leading-tight">

                Maintain your Business Website/App with Us at{' '}
                <MotionSpan
                  {...mounted ? {
                    initial: { opacity: 0, scale: 0.8 },
                    animate: { opacity: 1, scale: 1 },
                    transition: { duration: 0.5, delay: 0.6 }
                  } : {}}
                  className="text-primary inline-block">

                  InfoZenX IT
                </MotionSpan>
              </MotionH1>
              
              <MotionDiv
                {...mounted ? {
                  initial: { scaleX: 0 },
                  animate: { scaleX: 1 },
                  transition: { duration: 0.6, delay: 0.7 }
                } : {}}
                className="bg-primary h-1 w-48 origin-left" />

              
              <MotionP
                {...mounted ? {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.6, delay: 0.8 }
                } : {}}
                className="text-lg text-foreground">

                A better digital experience for your customers and staff is made possible by
                always-on managed services and support.
              </MotionP>
              
              <MotionDiv
                {...mounted ? {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.6, delay: 1 }
                } : {}}
                className="pt-4">

                <Link href="/contact">
                  <MotionButton
                    {...mounted ? {
                      whileHover: { scale: 1.05, rotateX: 5, boxShadow: "0 10px 30px rgba(50, 56, 100, 0.3)" },
                      whileTap: { scale: 0.95 },
                      transition: { duration: 0.2 }
                    } : {}}
                    className="group relative inline-block cursor-pointer overflow-hidden rounded-sm bg-secondary px-6 py-3 text-sm font-semibold uppercase text-secondary-foreground shadow-md">

                    <span className="relative z-10">GET QUOTE NOW</span>
                    <span className="absolute left-0 top-0 z-0 h-[590%] w-[50%] translate-x-[-120%] translate-y-[3%] rotate-45 bg-primary transition-all duration-300 ease-in-out group-hover:w-[325%] group-hover:translate-x-[-15px]"></span>
                  </MotionButton>
                </Link>
              </MotionDiv>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>);

};

export default HeroSection;