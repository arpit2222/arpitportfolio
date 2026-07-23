"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-32 md:py-48 bg-[#0A2F1D] border-t border-border relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center justify-center text-center">
        
        {/* Massive Let's Build Typography */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full flex justify-center mb-16"
        >
          <h2 className="text-[15vw] leading-none font-black uppercase tracking-tighter z-20 text-white">
            LET&apos;S<br/>BUILD.
          </h2>
          
          {/* Restored Hero 3 Image with geometric mask */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] md:w-[30vw] aspect-[4/5] z-10 opacity-80 pointer-events-none grayscale hover:grayscale-0 transition-all duration-1000" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
            <Image 
              src="/hero-3.png" 
              alt="Let's build together" 
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-col items-center gap-8 relative z-30 mt-8"
        >
          <p className="text-xl md:text-2xl text-white/80 font-medium max-w-xl">
            Ready to architect the next generation of decentralized infrastructure or AI integration?
          </p>
          
          <a href="https://github.com/arpit2222/arpitportfolio" target="_blank" rel="noopener noreferrer" className="group">
            <div className="flex items-center gap-4 border-b-4 border-white/50 pb-2 px-4 hover:border-white transition-colors cursor-pointer">
              <span className="text-2xl md:text-4xl font-bold uppercase tracking-tight text-white transition-colors">
                Start a Conversation
              </span>
              <ArrowRight className="w-8 h-8 text-white group-hover:translate-x-2 transition-all" />
            </div>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
