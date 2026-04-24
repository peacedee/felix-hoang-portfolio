import { motion, AnimatePresence } from "framer-motion";
import { useMode } from "@/context/ModeContext";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

const Navbar = () => {
  const { mode, toggleMode } = useMode();
  const isDev = mode === "developer";
  const [activeSection, setActiveSection] = useState<string>("");

  // Smooth scroll with easing
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 72; // navbar height
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  // Track active section using IntersectionObserver (most reliable)
  useEffect(() => {
    const observerMap = new Map<string, IntersectionObserverEntry>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          observerMap.set(entry.target.id, entry);
        });

        // Pick the section with the highest intersection ratio that is visible
        let bestId = "";
        let bestRatio = 0;
        observerMap.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= bestRatio) {
            bestRatio = entry.intersectionRatio;
            bestId = entry.target.id;
          }
        });

        if (bestId) setActiveSection(bestId);
      },
      {
        rootMargin: "-72px 0px -40% 0px", // account for navbar height
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1.0],
      }
    );

    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-border bg-background/80"
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <motion.span
          whileHover={{ scale: 1.05 }}
          className="font-semibold text-lg text-foreground cursor-default select-none"
        >
          HTB
        </motion.span>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, id }) => {
            const isActive = activeSection === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => handleNavClick(e, id)}
                className="relative text-sm transition-colors duration-200 group"
                style={{ color: isActive ? undefined : undefined }}
              >
                <span
                  className={`transition-colors duration-200 ${
                    isActive
                      ? isDev ? "text-dev" : "text-qa"
                      : "text-foreground-muted hover:text-foreground"
                  }`}
                >
                  {label}
                </span>

                {/* Active underline indicator */}
                <AnimatePresence>
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      initial={{ opacity: 0, scaleX: 0 }}
                      animate={{ opacity: 1, scaleX: 1 }}
                      exit={{ opacity: 0, scaleX: 0 }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full origin-left ${
                        isDev ? "bg-dev" : "bg-qa"
                      }`}
                    />
                  )}
                </AnimatePresence>

                {/* Hover underline (when not active) */}
                {!isActive && (
                  <span
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
                      isDev ? "bg-dev/40" : "bg-qa/40"
                    }`}
                  />
                )}
              </a>
            );
          })}
        </div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.03 }}
          onClick={toggleMode}
          className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
            isDev
              ? "border-dev/30 text-dev bg-dev/10"
              : "border-qa/30 text-qa bg-qa/10"
          }`}
        >
          <span className="relative z-10">{isDev ? "Developer" : "QA Engineer"}</span>
          <motion.div
            layout
            className={`absolute inset-0 rounded-full opacity-20 ${isDev ? "bg-dev" : "bg-qa"}`}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
