"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Ghostpool",
    category: "Web3 / Decentralized",
    description: "An innovative decentralized platform providing seamless cross-chain liquidity pooling and high-yield staking mechanisms.",
    year: "2024",
    link: "https://ghostpool.com"
  },
  {
    title: "LexCrypt",
    category: "AI / Legal Tech",
    description: "Advanced AI-driven legal document analysis tool, leveraging state-of-the-art LLMs to automate contract review.",
    year: "2023",
    link: "#"
  },
  {
    title: "Nexus Protocol",
    category: "Blockchain Architecture",
    description: "High-throughput Layer 1 infrastructure designed for ultra-low latency DeFi applications.",
    year: "2023",
    link: "#"
  },
  {
    title: "Aura Vision",
    category: "Computer Vision",
    description: "Real-time generative AI pipeline for video processing, used by top-tier creative agencies.",
    year: "2022",
    link: "#"
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-32 bg-background border-t border-border relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-[8vw] font-black uppercase leading-none tracking-tighter"
          >
            Selected<br />Works
          </motion.h2>
          <p className="text-xl font-mono text-muted-foreground uppercase max-w-xs mb-2 md:mb-4">
            [ Proof of Work ]
          </p>
        </div>

        <div className="flex flex-col border-t border-border">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group block border-b border-border py-12 md:py-16 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-foreground scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-0" />
              
              <div className="relative z-10 flex flex-col md:flex-row justify-between md:items-center gap-8 w-full">
                <div className="flex-1 flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12">
                  <span className="font-mono text-sm text-muted-foreground group-hover:text-background/60 transition-colors">0{index + 1}</span>
                  <h3 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-foreground group-hover:text-background transition-colors duration-500">
                    {project.title}
                  </h3>
                </div>
                
                <div className="flex flex-col md:items-end gap-2 md:max-w-xs">
                  <span className="text-primary font-mono text-sm uppercase tracking-widest">{project.category}</span>
                  <span className="text-muted-foreground group-hover:text-background/80 transition-colors hidden md:block text-right line-clamp-2">
                    {project.description}
                  </span>
                </div>

                <div className="md:ml-8 mt-4 md:mt-0">
                  <div className="w-16 h-16 rounded-full border border-border group-hover:border-background flex items-center justify-center text-foreground group-hover:text-background group-hover:bg-primary group-hover:border-primary transition-all duration-500 transform group-hover:rotate-45">
                    <ArrowUpRight className="w-8 h-8" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
