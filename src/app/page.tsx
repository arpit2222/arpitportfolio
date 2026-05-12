import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-background text-foreground relative selection:bg-primary/30">
      <Navbar />
      
      <div className="flex-1 w-full relative z-10">
        <HeroSection />
        
        <div className="border-t border-white/5 bg-background relative z-10">
          <ExperienceSection />
        </div>
        
        <div className="border-t border-white/5 bg-background relative z-10">
          <ProjectsSection />
        </div>
        
        <div className="border-t border-white/5 bg-background relative z-10">
          <SkillsSection />
        </div>
        
        <div className="border-t border-white/5 bg-background relative z-10">
          <CTASection />
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
