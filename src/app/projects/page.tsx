"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsGallery() {
  return (
    <main className="min-h-screen bg-background pt-24 pb-32">
      <div className="container mx-auto px-6 md:px-12">
        <Link href="/#projects" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12 font-mono uppercase text-sm group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Index
        </Link>
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-[8vw] font-black uppercase leading-none tracking-tighter break-words"
          >
            Project<br />Gallery
          </motion.h1>
          <p className="text-xl font-mono text-muted-foreground uppercase max-w-xs mb-2 md:mb-4">
            [ Complete Archive ]
          </p>
        </div>

        <div className="flex flex-col border-t border-border">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (index % 10) * 0.1, duration: 0.8 }}
              className="group block border-b border-border py-12 md:py-16 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-foreground scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-0" />
              
              <div className="relative z-10 flex flex-col lg:flex-row justify-between lg:items-center gap-8 w-full">
                <div className="flex-1 flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12">
                  <span className="font-mono text-sm text-muted-foreground group-hover:text-background/60 transition-colors">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                  <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-foreground group-hover:text-background transition-colors duration-500 break-words">
                    {project.title}
                  </h3>
                </div>
                
                <div className="flex flex-col lg:items-end gap-3 lg:max-w-md w-full">
                  <span className="text-primary font-mono text-sm uppercase tracking-widest">{project.category}</span>
                  <p className="text-muted-foreground group-hover:text-background/80 transition-colors lg:text-right">
                    {project.description}
                  </p>
                  
                  <div className="mt-2 flex flex-wrap gap-3 z-20">
                    {project.extraLinks ? (
                      project.extraLinks.map((link, i) => (
                        <span 
                          key={i} 
                          onClick={(e) => {
                            e.preventDefault();
                            window.open(link.url, '_blank');
                          }}
                          className="font-mono text-xs uppercase tracking-wider px-3 py-1 border border-current text-foreground/50 group-hover:text-background/80 group-hover:border-background/50 hover:!bg-background hover:!text-foreground transition-all cursor-pointer"
                        >
                          {link.label}
                        </span>
                      ))
                    ) : (
                      <span 
                        className="font-mono text-xs uppercase tracking-wider px-3 py-1 border border-current text-foreground/50 group-hover:text-background/80 group-hover:border-background/50 hover:!bg-background hover:!text-foreground transition-all cursor-pointer"
                      >
                        Live App
                      </span>
                    )}
                    {project.github && (
                      <span 
                        onClick={(e) => {
                          e.preventDefault();
                          window.open(project.github, '_blank');
                        }}
                        className="font-mono text-xs uppercase tracking-wider px-3 py-1 border border-current text-foreground/50 group-hover:text-background/80 group-hover:border-background/50 hover:!bg-background hover:!text-foreground transition-all cursor-pointer"
                      >
                        GitHub
                      </span>
                    )}
                  </div>
                </div>

                <div className="lg:ml-8 mt-4 lg:mt-0 self-start lg:self-center">
                  <div className="w-16 h-16 rounded-full border border-border group-hover:border-background flex items-center justify-center text-foreground group-hover:text-background group-hover:bg-primary group-hover:border-primary transition-all duration-500 transform group-hover:rotate-45">
                    <ArrowUpRight className="w-8 h-8" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </main>
  );
}
