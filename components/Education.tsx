"use client";

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

export default function Education() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="space-y-8"
    >
      <SectionTitle title={"Education"} />
    </motion.section>
  );
}
