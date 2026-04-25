import { motion, AnimatePresence } from "framer-motion";
import { useMode } from "@/context/ModeContext";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "About",    id: "about"    },
  { label: "Skills",   id: "skills"   },
  { label: "Projects", id: "projects" },
  { label: "Contact",  id: "contact"  },
];

// ─── Main Navbar ──────────────────────────────────────────────
const Navbar = () => {
  const { mode, setMode } = useMode();
  const isDev = mode === "developer";
  const [activeSection, setActiveSection] = useState<string>("");
  const [isSwitching, setIsSwitching] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top, behavior: "smooth" });
  };

  useEffect(() => {
    const map = new Map<string, IntersectionObserverEntry>();
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => map.set(e.target.id, e));
        let bestId = "", best = 0;
        map.forEach((e) => {
          if (e.isIntersecting && e.intersectionRatio >= best) {
            best = e.intersectionRatio; bestId = e.target.id;
          }
        });
        if (bestId) setActiveSection(bestId);
      },
      { rootMargin: "-72px 0px -40% 0px", threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] }
    );
    navLinks.forEach(({ id }) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  const handleModeChange = (nextMode: "developer" | "qa") => {
    if (nextMode === mode) return;
    setIsSwitching(true);
    setMode(nextMode);
    window.setTimeout(() => setIsSwitching(false), 760);
  };

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

                <AnimatePresence>
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      initial={{ opacity: 0, scaleX: 0 }}
                      animate={{ opacity: 1, scaleX: 1 }}
                      exit={{ opacity: 0, scaleX: 0 }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full origin-left ${isDev ? "bg-dev" : "bg-qa"}`}
                    />
                  )}
                </AnimatePresence>

                {!isActive && (
                  <span
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${isDev ? "bg-dev/40" : "bg-qa/40"}`}
                  />
                )}
              </a>
            );
          })}
        </div>

        <div className="relative">
          <motion.div
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 320, damping: 20 }}
            className={`relative flex items-center rounded-full border p-1 ${
              isDev ? "border-dev/30 bg-dev/5" : "border-qa/30 bg-qa/5"
            }`}
          >
            <motion.button
              type="button"
              onClick={() => handleModeChange("developer")}
              whileTap={{ scale: 0.97 }}
              className={`relative z-10 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                isDev ? "text-dev" : "text-foreground-muted hover:text-foreground"
              }`}
            >
              Developer
            </motion.button>
            <motion.button
              type="button"
              onClick={() => handleModeChange("qa")}
              whileTap={{ scale: 0.97 }}
              className={`relative z-10 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                !isDev ? "text-qa" : "text-foreground-muted hover:text-foreground"
              }`}
            >
              QA Engineer
            </motion.button>

            <motion.div
              layout
              transition={{
                type: "spring",
                stiffness: isSwitching ? 260 : 320,
                damping: isSwitching ? 30 : 28,
                mass: 0.9,
              }}
              className={`absolute top-1 bottom-1 rounded-full ${
                isDev ? "left-1 right-[50%] bg-dev/15" : "left-[50%] right-1 bg-qa/15"
              }`}
            />
            <AnimatePresence>
              {isSwitching && (
                <motion.div
                  key={`vortex-${mode}`}
                  initial={{ opacity: 0.42, scale: 0.55, filter: "blur(1px)" }}
                  animate={{ opacity: 0, scale: 2.4, filter: "blur(8px)" }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
                  className={`pointer-events-none absolute inset-0 rounded-full ${
                    isDev
                      ? "bg-[radial-gradient(circle,rgba(249,115,22,0.35)_0%,rgba(249,115,22,0.12)_35%,transparent_72%)]"
                      : "bg-[radial-gradient(circle,rgba(34,197,94,0.35)_0%,rgba(34,197,94,0.12)_35%,transparent_72%)]"
                  }`}
                />
              )}
            </AnimatePresence>
            <motion.div
              key={mode}
              initial={{ opacity: 0.15, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
              className={`pointer-events-none absolute inset-0 rounded-full ${
                isDev ? "shadow-[0_0_22px_rgba(249,115,22,0.25)]" : "shadow-[0_0_22px_rgba(34,197,94,0.25)]"
              }`}
            />
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
