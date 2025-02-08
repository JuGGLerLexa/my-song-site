"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 via-black to-gray-900 text-white flex flex-col items-center justify-center p-6">
      {/* Заголовок з анімацією */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold tracking-wide text-center"
      >
        <span className="text-blue-400">Sound</span> for <span className="text-pink-400">You</span>
      </motion.h1>

      {/* Опис з анімацією */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mt-4 text-lg text-gray-300 text-center max-w-2xl"
      >
        Замовляйте унікальні пісні для свят, розіграшів або подарунків близьким. Створіть незабутній музичний момент!
      </motion.p>

      {/* Кнопки з анімацією */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-8 flex flex-col md:flex-row gap-4"
      >
        <a
          href="https://t.me/JuGGLer_L"
          className="px-8 py-4 bg-gradient-to-r from-blue-500 to-pink-500 text-white font-medium rounded-lg shadow-lg hover:scale-105 transition-transform"
        >
          Замовити пісню
        </a>
      </motion.div>
    </main>
  );
}