"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const HeaderWrapper = mounted ? motion.header : 'header';

  return (
    <HeaderWrapper
      {...(mounted ? {
        initial: { y: -100, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.6, ease: "easeOut" }
      } : {})}
      className={`bg-white fixed top-0 w-full z-[1020] transition-all duration-300 ${
        scrolled ? 'shadow-lg' : 'shadow-sm'
      }`}
    >
      <div className="container mx-auto py-4 flex items-center justify-between px-4 md:px-10">
        <Link href="/" onClick={() => setIsMenuOpen(false)}>
          {mounted ? (
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
          ) : (
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/InfoZen-IT-1764253329219.jpg"
              alt="InfoZen IT Logo"
              width={160}
              height={80}
              className="h-20 w-auto"
            />
          )}
        </Link>

        <button
          className="lg:hidden text-foreground text-3xl z-[1030]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        <nav
          className={`fixed top-[80px] right-0 w-full bg-white shadow-lg lg:shadow-none lg:static lg:flex lg:w-auto lg:items-center lg:space-x-10 transition-transform duration-300 ease-in-out transform z-[101] ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } lg:translate-x-0`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-10 text-start py-8 lg:py-0">
            {navLinks.map((link) => (
              <li key={link.href} className="py-2 lg:py-0">
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
              </li>
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
              {mounted ? (
                <motion.button
                  whileHover={{ scale: 1.05, rotateX: 5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="bg-primary text-primary-foreground px-6 py-2 rounded hover:bg-[#a02c33] transition-colors shadow-md hover:shadow-lg"
                >
                  Contact
                </motion.button>
              ) : (
                <button className="bg-primary text-primary-foreground px-6 py-2 rounded hover:bg-[#a02c33] transition-colors shadow-md hover:shadow-lg">
                  Contact
                </button>
              )}
            </Link>
          </div>
        </nav>
      </div>
    </HeaderWrapper>
  );
};

export default Header;