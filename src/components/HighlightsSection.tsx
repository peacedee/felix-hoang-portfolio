import { motion } from "framer-motion";
import { useMode } from "@/context/ModeContext";
import { highlights } from "@/data/profile";

const HighlightsSection = () => {
  const { mode } = useMode();
  const isDev = mode === "developer";

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-fr">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`h-full p-4 sm:p-6 rounded-xl border border-border bg-card hover:border-opacity-50 transition-colors ${
                isDev ? "hover:border-dev/30" : "hover:border-qa/30"
              }`}
            >
              <h3
                className={`text-xl sm:text-2xl font-bold mb-1 leading-tight break-words ${
                  isDev ? "text-dev" : "text-qa"
                }`}
              >
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed break-words">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
