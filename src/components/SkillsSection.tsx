import { motion, AnimatePresence } from "framer-motion";
import { useMode } from "@/context/ModeContext";
import { skills } from "@/data/skills";

const SkillsSection = () => {
  const { mode } = useMode();
  const isDev = mode === "developer";
  const filteredSkills = skills.filter((s) => s.mode === mode || s.mode === "both");

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl font-bold text-foreground mb-12"
        >
          Skills
        </motion.h2>

        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          >
            {filteredSkills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.025, type: "spring", stiffness: 360, damping: 24 }}
                whileHover={{ y: -4, scale: 1.03, boxShadow: isDev ? "0 10px 28px rgba(249,115,22,0.18)" : "0 10px 28px rgba(34,197,94,0.18)" }}
                className={`flex flex-col items-center justify-center h-[90px] rounded-xl border border-border bg-card text-center transition-colors group cursor-default`}
              >
                <span className={`text-sm font-medium transition-colors ${isDev ? "group-hover:text-dev" : "group-hover:text-qa"}`}>
                  {skill.name}
                </span>
                <span className="text-xs text-foreground-muted mt-1">{skill.category}</span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SkillsSection;
