"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    role: "Founder",
    company: "Dehix",
    period: "Dec 2024 – Present",
    type: "Remote",
    stack: ["MERN", "AWS", "Polygon", "Ethereum", "Solidity", "Tailwind", "Shadcn UI"],
    achievements: [
      "Founded a Web3 + AI support ecosystem bridging developers, businesses, and emerging tech stakeholders.",
      "Architected and deployed smart contracts on Polygon & Ethereum using Solidity; integrated IPFS.",
      "Designed a fully responsive frontend achieving sub-2s load performance.",
      "Provisioned scalable AWS infrastructure (EC2, S3, Lambda) with CI/CD pipelines."
    ]
  },
  {
    role: "Technical Consultant",
    company: "Madon.io",
    period: "Jan 2024 – Feb 2025",
    type: "Remote (Sweden)",
    stack: ["React", "Redux", "JavaScript", "SurveyJS"],
    achievements: [
      "Built a talent background-verification platform for enterprise hiring workflows across Nordic markets.",
      "Engineered dynamic, branching survey flows with SurveyJS integration; reduced candidate drop-off by ~40%.",
      "Implemented Redux state management handling complex multi-step form logic across 15+ question types."
    ]
  },
  {
    role: "Technical Co-Founder & Product Manager",
    company: "Dframe",
    period: "Sep 2022 – Dec 2023",
    type: "Remote",
    stack: ["MERN", "GoLang", "MongoDB", "Figma"],
    achievements: [
      "Co-founded a Web3 community project delivering a data-driven universal basic income platform on-chain.",
      "Owned full product lifecycle: UX research, Figma prototypes, GoLang REST APIs, and React frontend.",
      "Built GoLang microservices for real-time token distribution and multi-wallet integrations."
    ]
  },
  {
    role: "Blockchain Engineer",
    company: "SIPL (MDev)",
    period: "Jun 2022 – Jul 2023",
    type: "Noida",
    stack: ["GoLang", "React Native", "MERN"],
    achievements: [
      "Engineered a patent-backed, mobile-compatible Layer 1 blockchain addressing security & decentralisation.",
      "Implemented consensus mechanism and P2P networking modules in GoLang entirely from scratch.",
      "Proposed and implemented architecture optimisations that cut block finality time by 30%."
    ]
  }
];

export function ExperienceSection() {
  return (
    <section id="experience" className="container mx-auto px-6 md:px-12 py-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Experience & Leadership</h2>
        <p className="text-muted-foreground text-lg max-w-2xl">A track record of building complex systems, scaling teams, and delivering products across the globe.</p>
      </motion.div>

      <div className="relative border-l border-white/10 ml-4 md:ml-6 pl-8 md:pl-12 flex flex-col gap-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative"
          >
            {/* Timeline dot */}
            <div className="absolute -left-[41px] md:-left-[57px] top-1 h-5 w-5 rounded-full bg-primary/20 border border-primary flex items-center justify-center">
              <div className="h-2 w-2 rounded-full bg-primary" />
            </div>

            <Card className="glass-card border-none bg-white/5">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-primary font-medium">
                      <Briefcase className="w-4 h-4" />
                      {exp.company} <span className="text-muted-foreground font-normal">• {exp.type}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm bg-white/5 px-3 py-1 rounded-full w-fit">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="text-muted-foreground/90 flex items-start gap-3">
                      <span className="text-primary mt-1.5 leading-none">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.stack.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary-foreground hover:bg-primary/20 transition-colors">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
