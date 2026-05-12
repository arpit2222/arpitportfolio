"use client";

import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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
        </div>
      </div>
    </motion.header>
  );
}
