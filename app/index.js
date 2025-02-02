import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500 text-white">
      <motion.h1
        className="text-5xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Унікальні пісні на замовлення 🎶
      </motion.h1>
      <p className="mt-4 text-lg">Подаруй мелодію емоцій!</p>
      <a
        href="https://t.me/JuGGLer_L"
        className="mt-6 px-6 py-3 bg-white text-blue-500 rounded-full shadow-lg hover:bg-gray-200"
      >
        Замовити пісню
      </a>
    </div>
  );
}
