import { ModeProvider } from "@/context/ModeContext";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HighlightsSection from "@/components/HighlightsSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <ModeProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <HighlightsSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </ModeProvider>
  );
};

export default Index;
