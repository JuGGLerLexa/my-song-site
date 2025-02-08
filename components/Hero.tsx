import { motion } from "framer-motion";
import { fadeInUp, slideFromLeft } from "./animations"; // імпортуємо анімації

export default function Hero() {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center">
      {/* Заголовок */}
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="text-5xl font-bold"
      >
        Замов унікальну пісню 🎶
      </motion.h1>

      {/* Опис */}
      <motion.p
        initial="hidden"
        animate="visible"
        variants={slideFromLeft}
        className="text-lg mt-4 text-gray-600"
      >
        Ідеальний подарунок для друзів та близьких!
      </motion.p>
    </section>
  );
}
