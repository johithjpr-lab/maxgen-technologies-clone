"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const Footer = () => {
  const [mounted, setMounted] = useState(false);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const headingStyle = "font-semibold text-lg text-secondary mb-4";
  const linkStyle = "text-sm text-foreground hover:text-primary transition-colors";

  useEffect(() => {
    setMounted(true);
  }, []);

  const MotionDiv = mounted ? motion.div : 'div';
  const MotionHr = mounted ? motion.hr : 'hr';

  return (
    <footer ref={ref} className="bg-accent text-foreground font-sans">
      <div className="container mx-auto px-4 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-8 items-start">
          
          <MotionDiv
            {...(mounted ? {
              initial: { opacity: 0, y: 30 },
              animate: isVisible ? { opacity: 1, y: 0 } : {},
              transition: { duration: 0.6 }
            } : {})}
            className="md:col-span-6 lg:col-span-3"
          >
            <a href="/">
              {mounted ? (
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/infoZenX-IT-1764481244986.jpg"
                    alt="InfoZen IT Logo"
                    width={100}
                    height={50}
                    className="h-auto"
                  />
                </motion.div>
              ) : (
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/infoZenX-IT-1764481244986.jpg"
                  alt="InfoZen IT Logo"
                  width={100}
                  height={50}
                  className="h-auto"
                />
              )}
            </a>
          </MotionDiv>

          <MotionDiv
            {...(mounted ? {
              initial: { opacity: 0, y: 30 },
              animate: isVisible ? { opacity: 1, y: 0 } : {},
              transition: { duration: 0.6, delay: 0.1 }
            } : {})}
            className="md:col-span-2 lg:col-span-2"
          >
            <h3 className={headingStyle}>Resources</h3>
            <ul className="space-y-3">
              <li><a href="/services" className={linkStyle}>Services</a></li>
              <li><a href="/internship" className={linkStyle}>Internship</a></li>
              <li><a href="/career" className={linkStyle}>Career</a></li>
            </ul>
          </MotionDiv>

          <MotionDiv
            {...(mounted ? {
              initial: { opacity: 0, y: 30 },
              animate: isVisible ? { opacity: 1, y: 0 } : {},
              transition: { duration: 0.6, delay: 0.2 }
            } : {})}
            className="md:col-span-2 lg:col-span-2"
          >
            <h3 className={headingStyle}>Company</h3>
            <ul className="space-y-3">
              <li><a href="/about" className={linkStyle}>About</a></li>
              <li><a href="/contact" className={linkStyle}>Contact</a></li>
            </ul>
          </MotionDiv>
          
          <MotionDiv
            {...(mounted ? {
              initial: { opacity: 0, y: 30 },
              animate: isVisible ? { opacity: 1, y: 0 } : {},
              transition: { duration: 0.6, delay: 0.3 }
            } : {})}
            className="md:col-span-2 lg:col-span-2"
          >
            <h3 className={headingStyle}>Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className={linkStyle}>Privacy Policy</a></li>
            </ul>
          </MotionDiv>

          <MotionDiv
            {...(mounted ? {
              initial: { opacity: 0, y: 30 },
              animate: isVisible ? { opacity: 1, y: 0 } : {},
              transition: { duration: 0.6, delay: 0.4 }
            } : {})}
            className="md:col-span-6 lg:col-span-3"
          >
            <input
              type="email"
              placeholder="Subscribe for email updates"
              className="bg-gray-200 border-none w-full px-4 py-2.5 rounded-md text-sm placeholder:text-gray-500 text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
            />
            <div className="flex space-x-4 mt-6 justify-start md:justify-end">
              {mounted ? (
                <>
                  <motion.a
                    whileHover={{ scale: 1.2, rotateZ: 5 }}
                    transition={{ duration: 0.2 }}
                    href="#"
                    aria-label="Facebook"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    <Facebook size={20} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.2, rotateZ: 5 }}
                    transition={{ duration: 0.2 }}
                    href="#"
                    aria-label="Instagram"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    <Instagram size={20} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.2, rotateZ: 5 }}
                    transition={{ duration: 0.2 }}
                    href="#"
                    aria-label="LinkedIn"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin size={20} />
                  </motion.a>
                </>
              ) : (
                <>
                  <a href="#" aria-label="Facebook" className="text-foreground hover:text-primary transition-colors">
                    <Facebook size={20} />
                  </a>
                  <a href="#" aria-label="Instagram" className="text-foreground hover:text-primary transition-colors">
                    <Instagram size={20} />
                  </a>
                  <a href="#" aria-label="LinkedIn" className="text-foreground hover:text-primary transition-colors">
                    <Linkedin size={20} />
                  </a>
                </>
              )}
            </div>
          </MotionDiv>
        </div>

        <MotionHr
          {...(mounted ? {
            initial: { scaleX: 0 },
            animate: isVisible ? { scaleX: 1 } : {},
            transition: { duration: 0.8, delay: 0.5 },
            className: "mt-12 mb-8 border-border origin-center"
          } : {
            className: "mt-12 mb-8 border-border"
          })}
        />
        
        <MotionDiv
          {...(mounted ? {
            initial: { opacity: 0 },
            animate: isVisible ? { opacity: 1 } : {},
            transition: { duration: 0.6, delay: 0.7 }
          } : {})}
          className="text-center text-sm text-foreground"
        >
          <p>All copyrights reserved © 2025 - InfoZenX IT</p>
        </MotionDiv>
      </div>
    </footer>
  );
};

export default Footer;