import { motion, AnimatePresence } from "framer-motion";
import { useMode } from "@/context/ModeContext";
import { projects } from "@/data/projects";

const transition = { duration: 0.6, ease: [0.22, 1, 0.36, 1] };

const ProjectsSection = () => {
  const { mode } = useMode();
  const isDev = mode === "developer";
  const filtered = projects.filter((p) => p.mode === mode || p.mode === "both");

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-foreground mb-12"
        >
          Projects
        </motion.h2>

        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
            transition={transition}
            className="grid md:grid-cols-2 gap-6"
          >
            {filtered.map((project) => (
              <div
                key={project.title}
                className={`p-6 rounded-xl border border-border bg-card group hover:border-opacity-50 transition-colors ${
                  isDev ? "hover:border-dev/30" : "hover:border-qa/30"
                }`}
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-sm text-foreground-muted mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className={`text-xs px-3 py-1 rounded-full border ${
                        isDev ? "border-dev/20 text-dev" : "border-qa/20 text-qa"
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsSection;
