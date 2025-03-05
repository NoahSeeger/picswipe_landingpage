"use client";
import { motion } from "framer-motion";

export default function StaticGrid() {
  return (
    <motion.div
      className="absolute inset-0 overflow-hidden pointer-events-none z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Grid Lines */}
      <motion.div
        className="absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(to_bottom,transparent_1%,black_20%)]"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      />

      {/* Gradient Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/90"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />

      {/* Shapes */}
      <motion.div
        className="absolute w-[300px] h-[70px] md:w-[600px] md:h-[140px] left-[-20%] md:left-[-5%] top-[10%] md:top-[20%] rotate-12"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/[0.15] to-transparent backdrop-blur-[2px] border-2 border-white/[0.15] shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]" />
      </motion.div>

      <motion.div
        className="absolute w-[250px] h-[60px] md:w-[500px] md:h-[120px] right-[-15%] md:right-[0%] top-[60%] md:top-[75%] rotate-[-15deg]"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.div className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-500/[0.15] to-transparent backdrop-blur-[2px] border-2 border-white/[0.15] shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]" />
      </motion.div>

      <motion.div
        className="absolute w-[150px] h-[40px] md:w-[300px] md:h-[80px] left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%] rotate-[-8deg]"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500/[0.15] to-transparent backdrop-blur-[2px] border-2 border-white/[0.15] shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]" />
      </motion.div>

      <motion.div
        className="absolute w-[100px] h-[30px] md:w-[200px] md:h-[60px] right-[10%] md:right-[20%] top-[5%] md:top-[15%] rotate-[20deg]"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500/[0.15] to-transparent backdrop-blur-[2px] border-2 border-white/[0.15] shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]" />
      </motion.div>

      <motion.div
        className="absolute w-[75px] h-[20px] md:w-[150px] md:h-[40px] left-[15%] md:left-[25%] top-[2%] md:top-[10%] rotate-[-25deg]"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/[0.15] to-transparent backdrop-blur-[2px] border-2 border-white/[0.15] shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]" />
      </motion.div>
    </motion.div>
  );
}
