// app/projects/page.tsx
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const projects = [
  {
    title: 'Carbon Cart',
    subtitle: 'Sustainable grocery shopping iOS prototype',
    image: '/images/carbon-vertical.png',
    description:
      'Carbon Cart helps consumers make more environmentally conscious grocery purchases by surfacing sustainability information in a simple, user-friendly way.',
    details:
      'I worked on early product thinking, interface design, and the technical concept for helping shoppers compare products based on carbon impact, seasonality, and local sourcing.',
    tech: ['iOS', 'Product Design', 'Sustainability', 'UX'],
    link: 'https://www.linkedin.com/in/chloe-recupero-764842260/overlay/projects/1713160169/multiple-media-viewer/?profileId=ACoAAEAyNbwBhLaqW-1ttLppa_8Q7W_Y82ShIuw&treasuryMediaId=1732584981070&type=DOCUMENT',
  },
  {
    title: 'cseed buildHER',
    subtitle: 'Mentorship cohort and community programming',
    image: '/images/cseed-vertical.png',
    description:
      'buildHER empowers women builders through mentorship, community events, and structured support for early-stage project development.',
    details:
      'As a project lead, I helped organize cohort programming, mentor sessions, and community events designed to make entrepreneurship and technical building feel more accessible.',
    tech: ['Leadership', 'Community', 'Mentorship', 'Entrepreneurship'],
    link: 'https://www.cseed.co/buildher-team',
  },
  {
    title: 'Campus Map',
    subtitle: 'Interactive mapping and navigation tool',
    image: '/images/map-vertical.png',
    description:
      'Interactive campus map designed to improve navigation by visualizing key locations and routes in a clear, user-friendly interface.',
    details:
      'Built to explore spatial data and routing concepts, with a focus on usability and how mapping tools can support safer and more intuitive navigation experiences.',
    tech: ['JavaScript', 'Mapping', 'Data Visualization', 'UX'],
    link: 'https://github.com/chloerecupero/campus-route-finder',
  },
  {
    title: 'SEAL Lab Research',
    subtitle: 'Sensors, Energy & Automation Laboratory',
    image: '/images/seal-vertical.png',
    description:
      'Undergraduate research in the University of Washington’s Sensors, Energy & Automation Laboratory, focused on data-driven approaches to energy efficiency and automation.',
    details:
      'Contributed to research exploring how sensor data can be used to improve system performance and sustainability in real-world environments.',
    tech: ['Data Analysis', 'Sensors', 'Sustainability', 'Research'],
    link: 'https://www.uwseal.org/',
  },
]

export default function ProjectsPage() {
  const [index, setIndex] = useState(0)
  const project = projects[index]

  const nextProject = () => {
    setIndex((current) => (current + 1) % projects.length)
  }

  const previousProject = () => {
    setIndex((current) => (current - 1 + projects.length) % projects.length)
  }

  return (
    <main className="w-full py-8">
      <div className="mb-10">
        <p className="mb-2 text-sm text-zinc-500 dark:text-zinc-400">
          Selected work
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          Projects
        </h1>
      </div>

      <section>
        <AnimatePresence mode="wait">
          <motion.article
            key={project.title}
            initial={{ opacity: 0, x: 24, filter: 'blur(6px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, x: -24, filter: 'blur(6px)' }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden rounded-4xl border border-zinc-200/70 bg-white/80 shadow-sm backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-950/70 hover:shadow-md hover:-translate-y-0.5"
          >
            <div className="grid gap-0 md:grid-cols-[260px_1fr]">
                <div className="flex justify-center bg-zinc-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-120 object-contain"
                  />
                </div>

              <div className="p-6 md:p-7">
                <p className="mb-2 text-sm text-zinc-500 dark:text-zinc-400">
                  {project.subtitle}
                </p>

                <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                  {project.title}
                </h2>

                <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>

                <p className="mt-3 leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {project.details}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <Link
                    href={project.link}
                    target="_blank"
                    className="mt-5 inline-flex text-sm font-medium text-zinc-900 transition hover:text-zinc-500 dark:text-zinc-100 dark:hover:text-zinc-400"
                  >
                    View project →
                  </Link>
                )}
              </div>
            </div>
          </motion.article>
        </AnimatePresence>

        <div className="mt-6 flex items-center justify-between">
          <button
            onClick={previousProject}
            className="rounded-full bg-zinc-100 px-4 py-2 text-sm text-zinc-700 transition hover:bg-zinc-200 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            ← Previous
          </button>

          <div className="flex items-center gap-2 mt-6 flex justify-center ">
            {projects.map((item, dotIndex) => (
              <button
                key={item.title}
                onClick={() => setIndex(dotIndex)}
                aria-label={`Go to ${item.title}`}
                className={`h-2 rounded-full transition-all ${
                  dotIndex === index
                    ? 'w-6 bg-zinc-900 dark:bg-zinc-100'
                    : 'w-2 bg-zinc-300 hover:bg-zinc-400 dark:bg-zinc-700 dark:hover:bg-zinc-600'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextProject}
            className="rounded-full bg-zinc-100 px-4 py-2 text-sm text-zinc-700 transition hover:bg-zinc-200 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            Next →
          </button>
        </div>
      </section>
    </main>
  )
}