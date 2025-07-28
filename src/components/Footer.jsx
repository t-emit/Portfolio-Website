import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="relative bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-6 mt-12 shadow-inner"
    >
      {/* Glowing Separator Line */}
      <div className="glow-line w-full h-1 absolute -top-1 left-0"></div>

      <div className="container mx-auto px-4 text-center">
        <p className="text-sm mb-4">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-semibold text-indigo-600 dark:text-indigo-400">
            Talatunnisa A. Siddiqui
          </span>. All rights reserved.
        </p>

        <div className="flex justify-center gap-6 text-xl">
          <a href="mailto:talatsiddiqui028@gmail.com" className="glow-link" aria-label="Email">📧</a>
          <a href="https://github.com/t-emit" target="_blank" rel="noopener noreferrer" className="glow-link" aria-label="GitHub">💻</a>
          <a href="https://linkedin.com/in/talat-siddiqui-7a2b00258" target="_blank" rel="noopener noreferrer" className="glow-link" aria-label="LinkedIn">🔗</a>
        </div>
      </div>
    </motion.footer>
  );
}
