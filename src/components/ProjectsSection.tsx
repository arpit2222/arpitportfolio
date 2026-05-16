"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Tilt from "react-parallax-tilt";

const projects = [

  {
    title: "VerifyTrade Frontend",
    description: "On-chain trade verification dashboard for safer crypto transactions. Features smart-contract-connected flows and a clean dashboard UX.",
    stack: ["Next.js", "React", "TypeScript", "Web3", "ethers", "Vercel"],
    github: "https://github.com/arpit2222/VerifyTrade",
    link: "https://verify-trade-frontend.vercel.app/",
    size: "medium"
  },
  {
    title: "SSI Backend",
    description: "API backend for issuing and verifying self-sovereign identity credentials. Features self-sovereign identity workflows and credential issuance APIs.",
    stack: ["Node.js", "Next.js APIs", "TypeScript", "SSI/VC libs"],
    github: "https://github.com/arpit2222/ssi",
    link: "https://ssi-backend-three.vercel.app/",
    size: "medium"
  },
  {
    title: "SourceScan",
    description: "AI-powered source code scanner for quick reviews and insights. Focused on scanning, review, and security-oriented workflows.",
    stack: ["Next.js", "React", "TypeScript", "AI APIs"],
    github: "https://github.com/arpit2222/sourcescan",
    link: "https://sourcescan.vercel.app/",
    size: "large"
  },
  {
    title: "Forge Agent",
    description: "Visual interface for composing and running AI agent pipelines. Agent-based workflow or orchestration product.",
    stack: ["Next.js", "React", "TypeScript", "AI SDKs"],
    github: "https://github.com/arpit2222/forge-agent",
    link: "https://forge-agent-red.vercel.app/",
    size: "medium"
  },
  {
    title: "Dehix",
    description: "Landing site for Dehix, showcasing an AI-first product narrative. Web3 + AI ecosystem product.",
    stack: ["Next.js", "React", "TypeScript", "Marketing UI"],
    github: "https://github.com/arpit2222/dehixCo",
    link: "https://dehix-co.vercel.app/",
    size: "medium"
  },
  {
    title: "NoxLend",
    description: "DeFi lending dApp for managing deposits, borrows, and positions.",
    stack: ["Next.js", "React", "TypeScript", "viem", "DeFi"],
    github: "https://github.com/arpit2222/noxlend",
    link: "https://noxlend.vercel.app/",
    size: "large"
  },
  {
    title: "DefiQuantHQ",
    description: "ETHDelhi hackathon dApp showcasing fast Web3 prototyping and event-driven shipping ability.",
    stack: ["Next.js", "React", "Solidity", "ethers"],
    github: "https://github.com/arpit2222/ethdelhi",
    link: "https://ethdelhi.vercel.app/",
    size: "medium"
  },
  {
    title: "Carbon IQ",
    description: "Carbon footprint analytics dashboard with clean, readable metrics. Built around sustainability tracking flows.",
    stack: ["Next.js", "React", "Recharts", "TypeScript"],
    github: "https://github.com/arpit2222/carbonIQ",
    link: "https://carbon-iq-gold.vercel.app/",
    size: "medium"
  },
  {
    title: "GhostPool",
    description: "Staking/liquidity pool interface with live rewards, pool stats, and wallet-connected interactions.",
    stack: ["Next.js", "React", "TypeScript", "Web3"],
    github: "https://github.com/arpit2222/ghostpool",
    link: "https://ghostpool.vercel.app/",
    size: "large"
  },
  {
    title: "Solana Kit Migrator",
    description: "Tooling UI to help migrate and modernize Solana projects and developer setup.",
    stack: ["Next.js", "React", "TypeScript", "Solana/web3.js"],
    github: "https://github.com/arpit2222/solana-kit-migrator",
    link: "https://solana-kit-migrator.vercel.app/",
    size: "medium"
  },
  {
    title: "React Router v6 to v7",
    description: "Practical guide app showing patterns to move from React Router v6 to v7 with clear implementation patterns.",
    stack: ["React", "React Router", "Vite", "TypeScript"],
    github: "https://github.com/arpit2222/react-router-v6-to-v7",
    link: "https://react-router-v6-to-v7.vercel.app/",
    size: "medium"
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="container mx-auto px-6 md:px-12 py-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">Featured Work</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">A selection of platforms, dashboards, and Web3/AI tools I&apos;ve built.</p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            className={`group ${project.size === 'large' ? 'md:col-span-2' : ''}`}
          >
            <Tilt 
              tiltMaxAngleX={project.size === 'large' ? 3 : 5} 
              tiltMaxAngleY={project.size === 'large' ? 3 : 5} 
              glareEnable={true} 
              glareMaxOpacity={0.15} 
              glareColor="#ffffff" 
              glarePosition="all" 
              className="h-full rounded-xl"
              transitionSpeed={1500}
              scale={1.02}
            >
              <Card className="glass-card bg-white/5 h-full border border-white/10 overflow-hidden backdrop-blur-md shadow-2xl relative">
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none"></div>
                
                <CardContent className="p-8 h-full flex flex-col justify-between relative z-10">
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-4">
                      <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{project.title}</h3>
                      <div className="flex items-center gap-3">
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/20 text-muted-foreground hover:text-white transition-all transform hover:scale-110 z-20">
                            <FaGithub className="w-5 h-5" />
                          </a>
                        )}
                        {project.link && (
                          <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/20 text-muted-foreground hover:text-white transition-all transform hover:scale-110 z-20">
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-8 text-sm md:text-base">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.stack.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-white/10 text-white/70 bg-white/5 backdrop-blur-sm px-3 py-1 text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
