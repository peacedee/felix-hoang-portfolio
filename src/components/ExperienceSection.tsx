import { motion, AnimatePresence } from "framer-motion";
import { useMode } from "@/context/ModeContext";
import { experiences } from "@/data/experience";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.06 },
  },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

const cardVariants = {
  hidden: { opacity: 0, x: -22, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const bulletVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.08, duration: 0.4, ease: "easeOut" },
  }),
};

const ExperienceSection = () => {
  const { mode } = useMode();
  const isDev = mode === "developer";
  const filtered = experiences.filter((e) => e.mode === mode);


  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-foreground">Experience</h2>
          <div className={`mt-2 h-0.5 w-12 rounded-full ${isDev ? "bg-dev" : "bg-qa"}`} />
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative"
          >
            {/* Timeline line */}
            <div className={`absolute left-4 top-6 bottom-6 w-px hidden md:block ${isDev ? "bg-dev/20" : "bg-qa/20"}`} />

            {filtered.length === 0 ? (
              <motion.p
                variants={cardVariants}
                className="text-foreground-muted text-sm pl-4"
              >
                No experience entries yet.
              </motion.p>
            ) : (
              filtered.map((exp, idx) => (
                <motion.div
                  key={exp.company + exp.role + idx}
                  variants={cardVariants}
                  className="relative md:pl-12 mb-8 last:mb-0"
                >
                  {/* Timeline dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + idx * 0.15, type: "spring", stiffness: 300 }}
                    className={`absolute left-2.5 top-6 w-3 h-3 rounded-full border-2 bg-background hidden md:block ${isDev ? "border-dev" : "border-qa"}`}
                  />

                  {/* Card */}
                  <motion.div
                    whileHover={{ y: -4, scale: 1.005, boxShadow: isDev ? "0 12px 32px -10px rgba(251,146,60,0.25)" : "0 12px 32px -10px rgba(96,165,250,0.25)" }}
                    transition={{ type: "spring", stiffness: 320, damping: 24 }}
                    className={`relative p-6 rounded-2xl border border-border bg-card overflow-hidden group`}
                  >
                    {/* Glow on hover */}
                    <div
                      className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl`}
                      style={{
                        background: isDev
                          ? "radial-gradient(ellipse at top left, rgba(251,146,60,0.06) 0%, transparent 70%)"
                          : "radial-gradient(ellipse at top left, rgba(96,165,250,0.06) 0%, transparent 70%)",
                      }}
                    />

                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <div className="flex items-center gap-3">
                        {/* Company logo / initials fallback */}
                        <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 overflow-hidden ${isDev ? "border-dev/20 bg-dev/5" : "border-qa/20 bg-qa/5"}`}>
                          {exp.logo ? (
                            <img
                              src={exp.logo}
                              alt={exp.company}
                              className="w-7 h-7 object-contain"
                              onError={(e) => {
                                (e.target as HTMLImageElement).style.display = "none";
                                (e.target as HTMLImageElement).nextElementSibling?.classList.remove("hidden");
                              }}
                            />
                          ) : null}
                          <span className={`text-xs font-bold ${exp.logo ? "hidden" : ""} ${isDev ? "text-dev" : "text-qa"}`}>
                            {exp.company.slice(0, 2).toUpperCase()}
                          </span>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-foreground leading-tight">{exp.role}</h3>
                          <p className={`text-sm font-semibold mt-0.5 ${isDev ? "text-dev" : "text-qa"}`}>
                            {exp.company}
                            {exp.type && (
                              <span className="text-foreground-muted font-normal"> · {exp.type}</span>
                            )}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
                        <span className="text-xs text-foreground-muted font-medium">{exp.period}</span>
                        {exp.duration && (
                          <span className={`text-xs px-2 py-0.5 rounded-full border ${isDev ? "border-dev/20 text-dev" : "border-qa/20 text-qa"}`}>
                            {exp.duration}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Meta badges */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.workMode && (
                        <span className="text-xs px-2.5 py-1 rounded-full bg-border/50 text-foreground-muted">
                          📍 {exp.workMode}
                        </span>
                      )}
                      {exp.tech.split(", ").map((t) => (
                        <span
                          key={t}
                          className={`text-xs px-2.5 py-1 rounded-full border ${isDev ? "border-dev/20 text-dev" : "border-qa/20 text-qa"}`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Bullet points */}
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((point, i) => (
                        <motion.li
                          key={i}
                          custom={i}
                          variants={bulletVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          className="flex gap-2.5 text-sm text-foreground-muted leading-relaxed"
                        >
                          <span className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${isDev ? "bg-dev/70" : "bg-qa/70"}`} />
                          {point}
                        </motion.li>
                      ))}
                    </ul>

                    {/* GitHub link */}
                    {exp.links?.length ? (
                      <div className="flex flex-wrap gap-3">
                        {exp.links.map((link) => (
                          <motion.a
                            key={link.url}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ x: 4 }}
                            transition={{ type: "spring", stiffness: 400 }}
                            className={`inline-flex items-center gap-1.5 text-xs font-semibold hover:underline underline-offset-2 ${isDev ? "text-dev" : "text-qa"}`}
                          >
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.005 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
                            </svg>
                            {link.label} →
                          </motion.a>
                        ))}
                      </div>
                    ) : exp.github ? (
                      <motion.a
                        href={exp.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 4 }}
                        transition={{ type: "spring", stiffness: 400 }}
                        className={`inline-flex items-center gap-1.5 text-xs font-semibold hover:underline underline-offset-2 ${isDev ? "text-dev" : "text-qa"}`}
                      >
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.005 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
                        </svg>
                        View on GitHub →
                      </motion.a>
                    ) : null}
                  </motion.div>
                </motion.div>
              ))
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ExperienceSection;
