'use client'

import { motion } from 'framer-motion'

export default function ContactPage() {
  return (
    <main className="w-full py-8">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <p className="mb-2 text-sm text-zinc-500 dark:text-zinc-400">
          Get in touch
        </p>

        <h1 className="mb-6 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          Contact
        </h1>

        <p className="mb-8 text-zinc-600 dark:text-zinc-400">
          I'm always open to opportunities, collaborations, or just connecting.
        </p>

        <div className="flex flex-col gap-3">
          <a
            href="mailto:crecup@uw.edu"
            className="text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            chloerecupero04@gmail.com →
          </a>

          <a
            href="https://github.com/crecup"
            target="_blank"
            className="text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            GitHub →
          </a>

          <a
            href="https://www.linkedin.com/in/chloerecupero"
            target="_blank"
            className="text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            LinkedIn →
          </a>
        </div>
      </motion.div>
    </main>
  )
}