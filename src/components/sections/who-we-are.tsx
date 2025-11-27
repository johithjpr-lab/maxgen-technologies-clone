"use client";

import Image from "next/image";
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const WhoWeAre = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={ref} className="my-16 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 md:px-10">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -100, rotateY: -15 }}
            animate={isVisible ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-5"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl font-semibold text-heading-gray md:text-4xl"
            >
              Who We Are ?
            </motion.h2>
            
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isVisible ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="h-1 w-48 bg-primary origin-left"
            />
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg leading-relaxed text-foreground"
            >
              We are a full-service digital consultant with the skills and ability to serve the requirements of even the biggest and most complicated businesses worldwide. To ensure that we focus on their needs and customers and provide real value to the business, we offer an extensive services portfolio. Endless ideas, end-to-end services.
            </motion.p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 100, rotateY: 15 }}
            animate={isVisible ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5 }}
            className="flex justify-center perspective-1000"
          >
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3439fb31-d549-4416-a97d-21355b70295c-maxgentechnologies-com/assets/images/WhoWeAre-BmwEPSny-3.webp"
              alt="Illustration of a team collaborating, representing 'Who We Are'"
              width={558}
              height={454}
              className="h-auto w-full max-w-full rounded-lg object-contain will-change-transform"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;