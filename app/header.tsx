'use client'

import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import { motion } from 'motion/react'

const navItems = [
  { label: 'Home', href: '/'},
  { label: 'About', href: '/about'},
  { label: 'Projects', href: '/projects' },
  { label: 'Work Experience', href: '/experiences' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  return (
    <>
      <motion.aside
        initial={{ opacity: 0, x: -18 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="fixed left-8 top-24 z-50 hidden md:block"
      >
        <nav className="flex flex-col gap-3">
          {navItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25, delay: 0.15 + index * 0.08 }}
            >
              <Link
                href={item.href}
                className="group flex items-center gap-2 text-sm text-zinc-500 transition hover:text-zinc-950 dark:text-zinc-500 dark:hover:text-zinc-50"
              >
                <span className="h-px w-5 bg-zinc-300 transition group-hover:w-8 group-hover:bg-zinc-900 dark:bg-zinc-700 dark:group-hover:bg-zinc-100" />
                {item.label}
              </Link>
            </motion.div>
          ))}
        </nav>
      </motion.aside>

      <header className="mb-4 flex items-center justify-between">
        <div>
          <Link href="/" className="font-medium text-black dark:text-white">
            Chloe Recupero
          </Link>
          <TextEffect
            as="p"
            preset="fade"
            per="char"
            className="text-zinc-600 dark:text-zinc-500"
            delay={0.5}
          >
            Aspiring Software Engineer
          </TextEffect>
        </div>
      </header>
    </>
  )
}