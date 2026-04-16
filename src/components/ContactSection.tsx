import { motion } from "framer-motion";
import { Mail, Download } from "lucide-react";
import { useMode } from "@/context/ModeContext";
import { profile } from "@/data/profile";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

const ContactSection = () => {
  const { mode } = useMode();
  const isDev = mode === "developer";

  return (
    <section id="contact" className="py-20 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-foreground mb-4"
        >
          Get in Touch
        </motion.h2>
        <p className={`text-sm font-medium mb-8 ${isDev ? "text-dev" : "text-qa"}`}>
          Open to opportunities
        </p>

        <div className="flex items-center justify-center gap-6 mb-8">
          <a href={profile.social.github} className="text-foreground-muted hover:text-foreground transition-colors">
            <GithubIcon size={22} />
          </a>
          <a href={profile.social.linkedin} className="text-foreground-muted hover:text-foreground transition-colors">
            <LinkedinIcon size={22} />
          </a>
          <a href={`mailto:${profile.social.email}`} className="text-foreground-muted hover:text-foreground transition-colors">
            <Mail size={22} />
          </a>
        </div>

        <motion.a
          whileTap={{ scale: 0.95 }}
          href={profile.cvUrl}
          className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-colors ${
            isDev
              ? "bg-dev text-primary-foreground hover:bg-dev/90"
              : "bg-qa text-primary-foreground hover:bg-qa/90"
          }`}
        >
          <Download size={16} />
          Download CV
        </motion.a>

        <p className="text-xs text-foreground-muted mt-12">
          © 2024 {profile.name}. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
