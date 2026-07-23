"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Founder & Lead Architect",
    company: "Ghostpool",
    period: "2023 - Present",
    description: "Architected and deployed a multi-chain liquidity protocol processing $50M+ in monthly volume. Led a team of 8 senior engineers building smart contracts in Solidity and Go."
  },
  {
    role: "Senior AI Engineer",
    company: "LexCrypt",
    period: "2021 - 2023",
    description: "Spearheaded the integration of custom LLMs for legal document analysis. Reduced processing time by 80% and improved accuracy through advanced RAG architectures."
  },
  {
    role: "Fullstack Architect",
    company: "Nexus Protocol",
    period: "2018 - 2021",
    description: "Designed enterprise-grade microservices and optimized high-frequency trading data pipelines using Node.js, Redis, and React."
  },
  {
    role: "Software Engineer",
    company: "Tech Innovations Inc",
    period: "2015 - 2018",
    description: "Developed and maintained core web applications using early React.js and RESTful APIs, scaling the platform to handle 1M+ daily active users."
  }
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-32 bg-background border-t border-border relative">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        <div className="lg:col-span-4">
          <div className="sticky top-32">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 break-words"
            >
              Timeline
            </motion.h2>
            <p className="text-muted-foreground text-lg max-w-sm">
              Over a decade of engineering excellence, building protocols and platforms that scale.
            </p>
          </div>
        </div>

        <div className="lg:col-span-8 flex flex-col">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="border-t border-border py-12 first:border-t-0 first:pt-0"
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                <div className="md:w-1/4">
                  <span className="font-mono text-primary uppercase tracking-widest text-sm bg-primary/10 px-3 py-1 border border-primary/20">
                    {exp.period}
                  </span>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-foreground mb-2">
                    {exp.role}
                  </h3>
                  <p className="text-xl text-muted-foreground font-medium mb-6">
                    {exp.company}
                  </p>
                  <p className="text-lg text-foreground/80 leading-relaxed font-light">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
