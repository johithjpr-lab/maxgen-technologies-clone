"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/internship", label: "Internship" },
  { href: "/career", label: "Career" },
  { href: "/about", label: "About" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`bg-white fixed top-0 w-full z-[1020] transition-all duration-300 ${
        scrolled ? 'shadow-lg' : 'shadow-sm'
      }`}
    >
      <div className="container mx-auto py-4 flex items-center justify-between px-4 md:px-10">
        <Link href="/" onClick={() => setIsMenuOpen(false)}>
          <motion.div
            whileHover={{ scale: 1.05, rotateY: 5 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/InfoZen-IT-1764253329219.jpg"
              alt="InfoZen IT Logo"
              width={160}
              height={80}
              className="h-20 w-auto"
            />
          </motion.div>
        </Link>

        <button
          className="lg:hidden text-foreground text-3xl z-[1030]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <motion.div
            animate={{ rotate: isMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </motion.div>
        </button>

        <AnimatePresence>
          {(isMenuOpen || window.innerWidth >= 1024) && (
            <motion.nav
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.3 }}
              className={`fixed top-[80px] right-0 w-full bg-white shadow-lg lg:shadow-none lg:static lg:flex lg:w-auto lg:items-center lg:space-x-10 transition-transform duration-300 ease-in-out transform z-[101] ${
                isMenuOpen ? "translate-x-0" : "translate-x-full"
              } lg:translate-x-0`}
            >
              <ul className="flex flex-col lg:flex-row lg:space-x-10 text-start py-8 lg:py-0">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="py-2 lg:py-0"
                  >
                    <Link
                      href={link.href}
                      className={`font-semibold block px-6 lg:px-0 transition-all duration-300 ${
                        link.label === "Home"
                          ? "text-primary"
                          : "text-foreground hover:text-primary hover:scale-105 inline-block"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
                <li className="py-2 lg:py-0 lg:hidden">
                  <Link
                    href="/contact"
                    className="font-semibold block px-6 lg:px-0 text-foreground hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
              </ul>

              <div className="hidden lg:block">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05, rotateX: 5 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="bg-primary text-primary-foreground px-6 py-2 rounded hover:bg-[#a02c33] transition-colors shadow-md hover:shadow-lg"
                  >
                    Contact
                  </motion.button>
                </Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;