"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "AI & Distributed Systems",
    skills: ["LLM Orchestration", "Vector Databases", "Python", "GoLang", "GraphQL", "Node.js"]
  },
  {
    title: "Blockchain Architecture",
    skills: ["L1 Consensus", "Solidity", "Ethereum", "Smart Contracts", "viem/ethers"]
  },
  {
    title: "Frontend Engineering",
    skills: ["React Architectures", "Next.js", "WebGL/Three.js", "Framer Motion", "Tailwind CSS"]
  },
  {
    title: "DevOps & Infrastructure",
    skills: ["AWS (EC2, S3, Lambda)", "Docker", "CI/CD Pipelines", "Redis", "MongoDB (Sharded)"]
  }
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-32 bg-foreground text-background border-t border-border relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8"
        >
          <h2 className="text-5xl md:text-[7vw] font-black uppercase leading-none tracking-tighter break-words">
            Technological<br/>Arsenal
          </h2>
          <p className="text-xl font-mono uppercase text-background/60 max-w-sm mb-2 md:mb-4">
            [ Core Competencies ]
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex flex-col"
            >
              <h3 className="text-2xl font-bold uppercase tracking-tight border-b-2 border-background/20 pb-4 mb-6">
                {category.title}
              </h3>
              <ul className="flex flex-col gap-4">
                {category.skills.map((skill, i) => (
                  <li key={i} className="text-lg font-light flex items-center gap-3 text-background/80 hover:text-background transition-colors">
                    <div className="w-2 h-2 bg-primary" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
