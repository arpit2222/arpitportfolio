"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary w-fit text-sm font-medium">
            <Terminal className="w-4 h-4" />
            <span>Available for new opportunities</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">
            Building the <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500 glow-text-primary">
              Web3 & AI
            </span><br/>
            Future.
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
            I&apos;m Arpit Chauhan, a Fullstack Blockchain Developer and Founder. I engineer scalable L1 blockchains, AI-driven SaaS products, and highly-performant web applications.
          </p>

          <div className="flex items-center gap-4 pt-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-12">
              View My Work
            </Button>
            <a href="https://calendly.com/arpitchauhan2468" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="rounded-full px-8 h-12 group border-white/10 hover:bg-white/5">
                Let&apos;s Talk
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </motion.div>

        {/* Right Content - Static Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative lg:ml-auto w-full max-w-md aspect-[4/5] rounded-2xl glass-card tech-border overflow-hidden group"
        >
          <div className="absolute inset-0 z-10">
            <Image 
              src="/hero-2.png" 
              alt="Arpit Chauhan - Founder & Web3/AI Developer" 
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
          </div>
          
          {/* Decorative tech grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none z-20 mix-blend-overlay" />
          
          {/* Decorative glowing orb behind the image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-primary/20 blur-[120px] rounded-full z-0 group-hover:bg-primary/30 transition-colors duration-700" />
        </motion.div>

      </div>
    </section>
  );
}
