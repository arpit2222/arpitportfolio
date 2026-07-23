"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] flex items-start pt-32 md:items-center md:pt-16 overflow-hidden bg-background">
      <div className="container mx-auto px-6 md:px-12 relative z-10 w-full">
        
        {/* Massive Typography */}
        <div className="relative z-20 mix-blend-difference pointer-events-none mb-10">
          <motion.h1 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[12vw] md:text-[10vw] font-black tracking-tighter leading-[0.8] text-foreground uppercase mix-blend-difference break-words"
          >
            ARPIT<br />CHAUHAN.
          </motion.h1>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 w-full pb-12 z-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-md"
          >
            <p className="text-xl md:text-2xl text-foreground font-medium uppercase tracking-widest mb-4">
              [ AI / Web3 Architect ]
            </p>
            <p className="text-muted-foreground text-lg font-light leading-relaxed">
              Engineering highly scalable decentralised infrastructure and orchestrating advanced AI systems for the next web.
            </p>
            <div className="mt-8 flex gap-4">
              <a href="#projects">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-8 h-14 font-bold uppercase tracking-wider text-sm transition-transform hover:-translate-y-1">
                  View Index
                </Button>
              </a>
              <a href="https://calendly.com/arpit_info/" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="rounded-none px-8 h-14 text-sm uppercase tracking-wider group border-border hover:bg-foreground hover:text-background transition-all">
                  Contact
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Abstract Image Positioning - Behind Text */}
        <motion.div 
          initial={{ opacity: 0, scale: 1.1, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute right-0 top-[60%] md:top-1/2 -translate-y-1/2 w-[90vw] md:w-[45vw] h-[50vh] md:h-[85vh] z-0 pointer-events-none opacity-20 md:opacity-100"
        >
          {/* Creative Masking */}
          <div className="relative w-full h-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000" style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0% 100%)' }}>
            <Image 
              src="/hero-2.png" 
              alt="Arpit Chauhan" 
              fill
              className="object-cover object-center"
              priority
            />
            {/* Minimalist Overlay */}
            <div className="absolute inset-0 bg-background/20" />
          </div>
        </motion.div>

        {/* Scrolling Ticker (Brutalist touch) */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden border-t border-border py-4 bg-background z-30">
          <div className="flex whitespace-nowrap animate-marquee">
            <span className="text-sm font-mono tracking-widest uppercase mx-8 text-muted-foreground">System Architecture</span>
            <span className="text-sm font-mono tracking-widest uppercase mx-8 text-primary">•</span>
            <span className="text-sm font-mono tracking-widest uppercase mx-8 text-muted-foreground">Smart Contracts</span>
            <span className="text-sm font-mono tracking-widest uppercase mx-8 text-primary">•</span>
            <span className="text-sm font-mono tracking-widest uppercase mx-8 text-muted-foreground">LLM Orchestration</span>
            <span className="text-sm font-mono tracking-widest uppercase mx-8 text-primary">•</span>
            <span className="text-sm font-mono tracking-widest uppercase mx-8 text-muted-foreground">L1 Consensus</span>
            <span className="text-sm font-mono tracking-widest uppercase mx-8 text-primary">•</span>
            <span className="text-sm font-mono tracking-widest uppercase mx-8 text-muted-foreground">React Optimization</span>
            <span className="text-sm font-mono tracking-widest uppercase mx-8 text-primary">•</span>
            <span className="text-sm font-mono tracking-widest uppercase mx-8 text-muted-foreground">System Architecture</span>
            <span className="text-sm font-mono tracking-widest uppercase mx-8 text-primary">•</span>
            <span className="text-sm font-mono tracking-widest uppercase mx-8 text-muted-foreground">Smart Contracts</span>
            <span className="text-sm font-mono tracking-widest uppercase mx-8 text-primary">•</span>
            <span className="text-sm font-mono tracking-widest uppercase mx-8 text-muted-foreground">LLM Orchestration</span>
            <span className="text-sm font-mono tracking-widest uppercase mx-8 text-primary">•</span>
            <span className="text-sm font-mono tracking-widest uppercase mx-8 text-muted-foreground">L1 Consensus</span>
            <span className="text-sm font-mono tracking-widest uppercase mx-8 text-primary">•</span>
            <span className="text-sm font-mono tracking-widest uppercase mx-8 text-muted-foreground">React Optimization</span>
          </div>
        </div>

      </div>
    </section>
  );
}
