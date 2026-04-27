'use client'

import { motion } from 'framer-motion'
// import { Metadata } from 'next'
import Image from 'next/image'

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

const TRANSITION_SECTION = {
  duration: 0.3,
  ease: 'easeInOut',
}

export default function AboutPage() {
  return (
    <div>
    <motion.main
      initial="hidden"
      animate="show"
      exit="hidden"
      variants={VARIANTS_SECTION}
      transition={TRANSITION_SECTION}
      className="mx-auto max-w-3xl px-6 py-16"
    >
      <h1 className="mb-8 text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
        About Me
      </h1>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="space-y-5 text-zinc-600 md:col-span-2 dark:text-zinc-400">
          <p>
            I'm <strong>Chloe Recupero</strong>, an incoming senior at the
            University of Washington double majoring in Computer Science (Data Science
            track) and French.
          </p>
          <p>
            I'm passionate about sustainable tech, user-first design, and
            building tools that make complex data more human. Lately, I've been
            exploring memory safety, climate-conscious systems, and how to bring
            more transparency into the tools we use daily.
          </p>
          <p>
            I care about projects that matter — ones that make life easier, more
            ethical, and more equitable. Whether I'm working on a buffer
            overflow exploit or designing a carbon footprint tracker, I strive
            to balance depth with clarity.
          </p>
          <p>
            Outside of programming, I love running (I'm currently training for a
            marathon), trying new restaurants and catching up with friends.
          </p>
        </div>

        {/* Image Column */}
        <div className="flex flex-col gap-4">
          <div className="aspect-square overflow-hidden rounded-xl bg-zinc-200 shadow-sm dark:bg-zinc-800">
            {/* Replace with your own image */}
            <Image
              src="/images/chloe-1.jpg"
              alt="Chloe Recupero"
              width={400}
              height={400}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="aspect-square overflow-hidden rounded-xl bg-zinc-200 shadow-sm dark:bg-zinc-800">
            {/* Replace with your own image */}
            <Image
              src="/images/chloe-2.jpg"
              alt="Chloe at a café"
              width={400}
              height={400}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

    </motion.main>
    <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
    className="mt-12"
  >
    <a
      href="/Recupero Chloe SWE Resume (1).pdf" // put your resume in /public
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
    >
      {/* Glow / spotlight effect */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-100" />
      </div>
  
      {/* Content */}
      <div className="relative rounded-[15px] bg-white p-5 transition group-hover:bg-zinc-50 dark:bg-zinc-950 dark:group-hover:bg-zinc-900">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
              Chloe Recupero Resume 2026
            </h4>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Download or view my latest experience
            </p>
          </div>
  
          <span className="translate-x-[-4px] text-zinc-400 transition group-hover:translate-x-0 group-hover:text-zinc-700 dark:group-hover:text-zinc-200">
            →
          </span>
        </div>
      </div>
    </a>
  </motion.div>
  </div>
  )
}
