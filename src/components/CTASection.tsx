"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="container mx-auto px-6 md:px-12 py-24">
      <div className="glass-card tech-border rounded-3xl overflow-hidden relative p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 relative z-10"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            Ready to build the <span className="text-primary glow-text-primary">next big thing?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-md leading-relaxed">
            Whether you need a scalable Web3 architecture, a cutting-edge AI integration, or a premium web application, let&apos;s connect and make it happen.
          </p>
          <a href="https://calendly.com/arpitchauhan2468" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-12 group mt-4">
              Start a Conversation
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full md:w-[400px] aspect-square relative rounded-2xl overflow-hidden border border-white/10 group"
        >
          <Image 
            src="/hero-3.png" 
            alt="Let's build together" 
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:bg-transparent transition-colors duration-500" />
        </motion.div>
        
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] rounded-full z-0 pointer-events-none" />
      </div>
    </section>
  );
}
