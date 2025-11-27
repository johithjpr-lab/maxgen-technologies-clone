"use client";

import Image from "next/image";
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const ExpertiseSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={ref} className="bg-background py-8 md:py-16 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 md:px-10">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -100, rotateY: -15 }}
            animate={isVisible ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05, rotateY: -5, rotateX: 5 }}
            className="flex items-center justify-center perspective-1000"
          >
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3439fb31-d549-4416-a97d-21355b70295c-maxgentechnologies-com/assets/images/ourexpertise-xcHcdE2D-4.webp"
              alt="Illustration of a team providing expert support"
              width={520}
              height={450}
              className="h-auto w-full max-w-lg will-change-transform"
            />
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 100, rotateY: 15 }}
            animate={isVisible ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="space-y-5 text-center md:text-left"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-3xl font-semibold text-heading-gray md:text-4xl"
            >
              Our Expertise & Support
            </motion.h2>
            
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isVisible ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mx-auto h-1 w-48 bg-primary md:mx-0 origin-left md:origin-left"
            />
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-lg text-foreground"
            >
              We have a team of experts who help developers in multiple ways.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;