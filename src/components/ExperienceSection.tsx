import { motion, AnimatePresence } from "framer-motion";
import { useMode } from "@/context/ModeContext";
import { experiences } from "@/data/experience";

const transition = { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const };

const ExperienceSection = () => {
  const { mode } = useMode();
  const isDev = mode === "developer";
  const filtered = experiences.filter((e) => e.mode === mode);

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-foreground mb-12"
        >
          Experience
        </motion.h2>

        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
            transition={transition}
            className="space-y-6"
          >
            {filtered.map((exp) => (
              <div
                key={exp.company + exp.role}
                className="p-6 rounded-xl border border-border bg-card"
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                    <p className={`text-sm font-medium ${isDev ? "text-dev" : "text-qa"}`}>
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-sm text-foreground-muted">{exp.period}</span>
                </div>
                <p className="text-foreground-muted text-sm leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ExperienceSection;
