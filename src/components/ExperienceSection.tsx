"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Visiting Faculty Member",
    company: "Bower School",
    period: "Jul 2026 - Present",
    description: ""
  },
  {
    role: "Co-Founder",
    company: "Dehix",
    period: "Apr 2024 - Present",
    description: "Dehix is a decentralised freelance platform where we are trying to solve the problem came up with the Decentralised work culture using decentralised technology. Tech Stack: React.js, Node.js and more."
  },
  {
    role: "Technical Consultant",
    company: "Tapovan AI",
    period: "Apr 2025 - Jul 2025",
    description: "Working and understanding on multiple subnets. Setting up miners, working towards creating new subnets."
  },
  {
    role: "Technical Consultant",
    company: "SPLIT Chennai",
    period: "Feb 2024 - Dec 2024",
    description: "Working as technical consultant for Sweden based person employment compatibility assessment system, which is used by most of the Swedish organisations. Main tech stack here is React and frontend related packages."
  },
  {
    role: "Technical Co-founder",
    company: "D Frame Foundation",
    period: "Jun 2022 - Apr 2024",
    description: "Dframe is base-data layer project where we are collecting user data while monetizing the user and create whole data pool for upcoming project using the web3 technology. Tech Stack: CSS, MongoDB and more."
  },
  {
    role: "Blockchain Developer",
    company: "Mahadev Blockchain Platform [mDev]",
    period: "Apr 2022 - Jul 2023",
    description: "mDev was a layer 1 Blockchain project trying to create mobile devices compatible Blockchains. As a Blockchain engineer, my role was the implementation of this layer 1 using Golang, taking inspiration from Ethereum."
  },
  {
    role: "Frontend Developer",
    company: "Make My Energy",
    period: "Dec 2022 - May 2023",
    description: "Australian startup project focused on solar energy. Requirement was to create a lead generation platform. Worked as frontend lead dealing with complex user inputs for tax benefits and subsidies."
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
