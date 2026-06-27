import { motion } from "framer-motion";

interface TagsProp {
  tags: string[];
}

export const TechTags = ({ tags }: TagsProp) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.6 }}
      className="mt-5 sm:mt-6 flex flex-wrap justify-center lg:justify-start gap-1.5 sm:gap-2"
    >
      {tags.map((tech) => (
        <span
          key={tech}
          className="px-2 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-mono rounded-md bg-white/5 text-zinc-300 border border-zinc-700/50 backdrop-blur-sm"
        >
          {tech}
        </span>
      ))}
    </motion.div>
  );
};
