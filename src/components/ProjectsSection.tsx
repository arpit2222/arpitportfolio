"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  const displayProjects = projects.slice(0, 4);
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-border pt-12">
          {displayProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group flex flex-col border border-border p-8 md:p-12 relative overflow-hidden bg-background hover:bg-foreground transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
            >
              <div className="relative z-10 flex flex-col h-full justify-between gap-8">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="font-mono text-sm text-muted-foreground group-hover:text-background/60 transition-colors">0{index + 1}</span>
                    <span className="text-primary font-mono text-sm uppercase tracking-widest text-right">{project.category}</span>
                  </div>
                  
                  <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-foreground group-hover:text-background transition-colors duration-500 break-words mb-6">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground group-hover:text-background/80 transition-colors text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-3 mt-8">
                  {project.extraLinks ? (
                    project.extraLinks.map((link, i) => (
                      <a 
                        key={i} 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-mono text-xs uppercase tracking-wider px-4 py-2 border border-border text-foreground group-hover:border-background/30 group-hover:text-background hover:!bg-primary hover:!border-primary hover:!text-primary-foreground transition-all"
                      >
                        {link.label}
                      </a>
                    ))
                  ) : (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-mono text-xs uppercase tracking-wider px-4 py-2 border border-border text-foreground group-hover:border-background/30 group-hover:text-background hover:!bg-primary hover:!border-primary hover:!text-primary-foreground transition-all"
                    >
                      View Project
                    </a>
                  )}
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-mono text-xs uppercase tracking-wider px-4 py-2 border border-border text-foreground group-hover:border-background/30 group-hover:text-background hover:!bg-primary hover:!border-primary hover:!text-primary-foreground transition-all"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link href="/projects">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-8 h-14 font-bold uppercase tracking-wider text-sm transition-transform hover:-translate-y-1 group">
              View All Works
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
