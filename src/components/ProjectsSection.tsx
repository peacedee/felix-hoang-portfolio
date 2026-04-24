import { motion, AnimatePresence } from "framer-motion";
import { useMode } from "@/context/ModeContext";
import { projects } from "@/data/projects";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const ProjectsSection = () => {
  const { mode } = useMode();
  const isDev = mode === "developer";
  const filtered = projects.filter((p) => p.mode === mode || p.mode === "both");


  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-foreground">Projects</h2>
          <div className={`mt-2 h-0.5 w-12 rounded-full ${isDev ? "bg-dev" : "bg-qa"}`} />
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, idx) => (
              <motion.div
                key={project.title}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.25 }}
                className="relative group h-full"
              >
                {/* Card */}
                <div
                  className={`relative h-full flex flex-col p-6 rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 ${isDev ? "group-hover:border-dev/40" : "group-hover:border-qa/40"}`}
                >
                  {/* Animated glow background */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                    style={{
                      background: isDev
                        ? "radial-gradient(ellipse at top right, rgba(251,146,60,0.08) 0%, transparent 65%)"
                        : "radial-gradient(ellipse at top right, rgba(96,165,250,0.08) 0%, transparent 65%)",
                    }}
                  />

                  {/* Index number */}
                  <span className={`absolute top-4 right-4 text-4xl font-black select-none leading-none ${isDev ? "text-dev/[0.08]" : "text-qa/[0.08]"}`}>
                    {String(idx + 1).padStart(2, "0")}
                  </span>

                  {/* Title */}
                  <h3 className="text-base font-bold text-foreground mb-2 pr-8 leading-snug">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-foreground-muted mb-4 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className={`text-xs px-2.5 py-1 rounded-full border ${isDev ? "border-dev/20 text-dev bg-dev/5" : "border-qa/20 text-qa bg-qa/5"}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* GitHub link */}
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className={`inline-flex items-center gap-1.5 text-xs font-semibold hover:underline underline-offset-2 mt-auto ${isDev ? "text-dev" : "text-qa"}`}
                    >
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.005 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                      View on GitHub →
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsSection;
