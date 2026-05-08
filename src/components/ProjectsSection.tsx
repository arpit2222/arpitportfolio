"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "SIPL E-Commerce",
    description: "A comprehensive full-stack e-commerce platform. Designed from Figma concepts to full production deployment, featuring seamless payments and inventory management.",
    stack: ["GoLang", "Gin REST API", "MongoDB", "Next.js"],
    size: "large"
  },
  {
    title: "MakeMyEnergy (AU)",
    description: "Frontend architecture and consultancy for a leading Australian renewable-energy startup, delivering high-conversion landing pages and dashboards.",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    size: "medium",
    link: "makemyenergy.com.au"
  },
  {
    title: "SkyEdge Mobile App",
    description: "Delivered a complete, developer-ready Figma UI/UX design system for a complex SaaS mobile application.",
    stack: ["Figma", "UI/UX Research", "Wireframing"],
    size: "medium"
  },
  {
    title: "Paytience & 9ice.in",
    description: "Designed, engineered, and successfully deployed two independent live consumer web applications.",
    stack: ["Next.js", "Node.js", "MongoDB"],
    size: "large"
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
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Notable Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">A selection of products and platforms I've built and shipped to production.</p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`group ${project.size === 'large' ? 'md:col-span-2' : ''}`}
          >
            <Card className="glass-card bg-white/5 h-full border-none overflow-hidden hover:bg-white/10 transition-colors duration-300">
              <CardContent className="p-8 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{project.title}</h3>
                    <div className="flex items-center gap-3">
                      <a href="#" className="text-muted-foreground hover:text-white transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                      {project.link && (
                        <a href="#" className="text-muted-foreground hover:text-white transition-colors">
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.stack.map((tech) => (
                    <Badge key={tech} variant="outline" className="border-white/10 text-muted-foreground bg-white/5">
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
