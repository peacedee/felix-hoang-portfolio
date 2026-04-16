import { motion } from "framer-motion";
import { useMode } from "@/context/ModeContext";
import { skills } from "@/data/skills";

const SkillsSection = () => {
  const { mode } = useMode();
  const isDev = mode === "developer";

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-foreground mb-12"
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.05, boxShadow: isDev ? "0 0 20px rgba(249,115,22,0.2)" : "0 0 20px rgba(34,197,94,0.2)" }}
              className="flex flex-col items-center justify-center h-[90px] rounded-xl border border-border bg-card text-center transition-colors"
            >
              <span className="text-sm font-medium text-foreground">{skill.name}</span>
              <span className="text-xs text-foreground-muted mt-1">{skill.category}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
