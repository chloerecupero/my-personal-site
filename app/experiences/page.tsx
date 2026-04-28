'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const softwareExperience = [
  {
    company: 'onXmaps Inc.',
    role: 'Software Development Intern',
    dates: 'Upcoming — Summer 2026',
    link: 'https://www.onxmaps.com',
    bullets: [
      'Incoming intern working on [team/project TBD].',
      'Excited to contribute to large-scale mapping and outdoor navigation tools.',
    ],
  },
  {
    company: 'Sierra Nevada Corporation',
    role: 'Software Engineer Intern',
    dates: 'June 2025 – August 2025',
    link: 'https://sncorp.com',
    bullets: [
      'Add your strongest technical bullet here.',
      'Focus on impact, scale, or performance improvements.',
      'Mention specific technologies if possible.',
    ],
  },
  {
    company: 'Bluco @ Station F',
    role: 'Startup Software Engineer Intern',
    dates: 'February 2025 – April 2025',
    link: 'https://bluco.ai',
    bullets: [
      'Worked in a fast-paced startup environment building [feature/system].',
      'Collaborated closely with product/design to iterate quickly.',
    ],
  },
]

const leadershipExperience = [
  {
    company: 'University of Washington',
    role: 'Direct Admit Seminar Teaching Assistant',
    dates: 'August 2025 – December 2025',
    link: 'https://www.cs.washington.edu',
    bullets: [
      'Supported incoming CS students through mentorship and academic guidance.',
      'Led discussions and helped students navigate the Allen School experience.',
    ],
  },
  {
    company: 'Coding With Kids',
    role: 'Programming Instructor',
    dates: 'April 2024 – September 2024',
    link: 'https://www.codingwithkids.com',
    bullets: [
      'Taught programming fundamentals to students through hands-on lessons.',
      'Developed communication skills by breaking down complex concepts.',
    ],
  },
]

function ExperienceSection({
  title,
  items,
}: {
  title: string
  items: typeof softwareExperience
}) {
  return (
    <section className="space-y-5">
      <h2 className="text-lg font-medium text-zinc-500 dark:text-zinc-400">
        {title}
      </h2>

      <div className="space-y-4">
        {items.map((exp, index) => (
          <motion.article
            key={exp.company}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.08 }}
            className="rounded-3xl border border-zinc-200/70 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-950/70"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                  {exp.role}
                </h3>
                <Link
                  href={exp.link}
                  target="_blank"
                  className="text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition"
                >
                  {exp.company} →
                </Link>
              </div>

              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                {exp.dates}
              </p>
            </div>

            <ul className="mt-4 space-y-3 text-zinc-600 dark:text-zinc-400">
              {exp.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-600" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default function ExperiencePage() {
  return (
    <main className="w-full py-8">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <p className="mb-2 text-sm text-zinc-500 dark:text-zinc-400">
          Resume highlights
        </p>
        <h1 className="mb-10 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          Experience
        </h1>

        <div className="space-y-12">
          <ExperienceSection
            title="Software Engineering Experience"
            items={softwareExperience}
          />

          <ExperienceSection
            title="Teaching & Leadership"
            items={leadershipExperience}
          />
        </div>
      </motion.div>
    </main>
  )
}