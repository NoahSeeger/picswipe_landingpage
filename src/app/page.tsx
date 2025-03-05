"use client";

import { motion } from "motion/react";
import Image from "next/image";
import WaitlistForm from "../components/WaitlistForm";
import StaticGrid from "../components/StaticGrid";

export default function Home() {
  return (
    <div className="h-screen bg-black relative overflow-hidden font-poppins font-medium">
      {/* Static Grid */}
      <div className="absolute inset-0 z-0">
        <StaticGrid />
      </div>

      {/* Background Image */}
      <div className="fixed inset-0 flex items-center justify-center z-10">
        <div className="relative w-[90vw] h-[90vh] max-w-[450px] max-h-[650px]">
          <motion.div
            initial={{ opacity: 0, y: 600 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0 }}
            whileHover={{ scale: 2.05 }}
            className="absolute inset-0 overflow-hidden"
          >
            <Image
              src="/PicSwipe-portrait-2.png"
              alt="PicSwipe App"
              fill
              style={{
                objectFit: "cover",
                objectPosition: "top",
                maskImage:
                  "linear-gradient(to bottom, black 60%, transparent 70%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 80%, transparent 100%)",
              }}
              className="pointer-events-none"
            />
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <main className="fixed inset-0 z-20 flex flex-col items-center justify-end pb-25 sm:pb-20 px-4">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-4"
        >
          PicSwipe
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-gray-400 mb-8 text-center text-sm sm:text-base px-4"
        >
          Organize, declutter, and optimize your photo collection.
        </motion.p>

        {/* Waitlist Form */}
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <WaitlistForm />
        </motion.div>
      </main>
    </div>
  );
}
