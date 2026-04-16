import { motion } from "framer-motion";
import { useMode } from "@/context/ModeContext";

const navLinks = ["About", "Skills", "Projects", "Contact"];

const Navbar = () => {
  const { mode, toggleMode } = useMode();
  const isDev = mode === "developer";

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-border bg-background/80"
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <span className="font-semibold text-lg text-foreground">HTB</span>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-foreground-muted hover:text-foreground transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        <motion.button
          whileTap={{ scale: 0.95 }}
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
