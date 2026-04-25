import { motion, AnimatePresence } from "framer-motion";
import { Download } from "lucide-react";
import { useMode } from "@/context/ModeContext";
import { profile } from "@/data/profile";
import Avatar3D from "./Avatar3D";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

const transition = {
  duration: 0.55,
  ease: [0.22, 1, 0.36, 1] as const,
};

const HeroSection = () => {
  const { mode } = useMode();
  const isDev = mode === "developer";

  return (
    <section id="about" className="relative min-h-screen flex items-center pt-16">
      <div className={`absolute inset-0 ${isDev ? "bg-glow-dev" : "bg-glow-qa"} transition-all duration-700`} />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={mode}
              initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -14, filter: "blur(5px)" }}
              transition={transition}
            >
              <p className={`text-sm font-medium mb-2 ${isDev ? "text-dev" : "text-qa"}`}>
                Hello, I'm
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
                {profile.name}
              </h1>
              <h2 className={`text-xl md:text-2xl font-medium mb-6 ${isDev ? "text-dev" : "text-qa"}`}>
                {profile.roles[mode]}
              </h2>
              <p className="text-foreground-muted leading-relaxed mb-8 max-w-lg">
                {profile.intro[mode]}
              </p>

              <div className="flex items-center gap-4 mb-8">
                <motion.a
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 420, damping: 24 }}
                  href="#projects"
                  className={`px-6 py-3 rounded-lg font-medium text-sm transition-colors ${
                    isDev
                      ? "bg-dev text-primary-foreground hover:bg-dev/90"
                      : "bg-qa text-primary-foreground hover:bg-qa/90"
                  }`}
                >
                  View Projects
                </motion.a>
                <motion.a
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 420, damping: 24 }}
                  href={profile.cvUrl}
                  className="flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium border border-border text-foreground hover:bg-secondary transition-colors"
                >
                  <Download size={16} />
                  Download CV
                </motion.a>
              </div>

              <div className="flex items-center gap-4">
                <a href={profile.social.github} className="text-foreground-muted hover:text-foreground transition-colors">
                  <GithubIcon />
                </a>
                <a href={profile.social.linkedin} className="text-foreground-muted hover:text-foreground transition-colors">
                  <LinkedinIcon />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center overflow-hidden">
            <Avatar3D />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
