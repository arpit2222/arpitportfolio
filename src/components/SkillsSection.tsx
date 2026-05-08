"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Shadcn UI", "HTML5", "CSS3"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "GoLang", "REST", "GraphQL"]
  },
  {
    title: "Blockchain",
    skills: ["Solidity", "Ethereum", "Polygon", "IPFS", "Layer 1 Dev"]
  },
  {
    title: "Database & Cloud",
    skills: ["MongoDB", "Mongoose", "Redis", "AWS (EC2, S3, Lambda)"]
  }
];

export function SkillsSection() {
  return (
    <section id="skills" className="container mx-auto px-6 md:px-12 py-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical Arsenal</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Technologies and tools I use to build scalable Web3 and AI solutions.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col gap-4"
          >
            <h3 className="text-xl font-bold text-primary mb-2 border-b border-white/10 pb-2">{category.title}</h3>
            <ul className="flex flex-col gap-3">
              {category.skills.map((skill, i) => (
                <li key={i} className="text-muted-foreground flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
