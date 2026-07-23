"use client";

import { motion } from "framer-motion";
import { Code2, Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "glass-card py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Code2 className="text-primary w-8 h-8 group-hover:rotate-12 transition-transform" />
          <span className="font-bold text-xl tracking-tighter">Arpit.dev</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <Link href="#experience" className="hover:text-primary transition-colors">Experience</Link>
          <Link href="#projects" className="hover:text-primary transition-colors">Projects</Link>
          <Link href="#skills" className="hover:text-primary transition-colors">Skills</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="https://github.com/arpit2222" target="_blank" className="text-muted-foreground hover:text-white transition-colors">
            <FaGithub className="w-5 h-5" />
          </Link>
          <Link href="https://www.linkedin.com/in/arpit099/" target="_blank" className="text-muted-foreground hover:text-[#0A66C2] transition-colors">
            <FaLinkedin className="w-5 h-5" />
          </Link>
          <Link href="https://x.com/Arpit39338561" target="_blank" className="text-muted-foreground hover:text-white transition-colors">
            <FaTwitter className="w-5 h-5" />
          </Link>
          <button 
            className="md:hidden text-foreground ml-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border py-6 px-6 flex flex-col gap-6 shadow-xl"
        >
          <Link href="#experience" className="text-lg font-medium hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Experience</Link>
          <Link href="#projects" className="text-lg font-medium hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Projects</Link>
          <Link href="#skills" className="text-lg font-medium hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Skills</Link>
        </motion.div>
      )}
    </motion.header>
  );
}
