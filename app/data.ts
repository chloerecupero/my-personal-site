type Project = {
  name: string
  description: string
  link: string
  id: string
  image?: string | null
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Campus Map',
    description: 'Interactive mapping tool that visualizes campus routes and key locations to make navigation more intuitive.',
    link: '',
    id: 'project3',
    image: '/images/map.png'
  },
  {
    name: 'cseed buildHER',
    description: 'Led mentorship cohorts and events to empower women builders and grow an inclusive tech community.',
    link: 'https://www.cseed.co/buildher-team',
    id: 'project2',
    image: '/images/cseed.png',
  },
  // {
  //   name: 'Carbon Cart',
  //   description:
  //     'iOS app protoype helping consumers make environmentally conscientious grocery purchases',
  //   link: 'https://www.linkedin.com/in/chloe-recupero-764842260/overlay/projects/1713160169/multiple-media-viewer/?profileId=ACoAAEAyNbwBhLaqW-1ttLppa_8Q7W_Y82ShIuw&treasuryMediaId=1732584981070&type=DOCUMENT',
  //   id: 'project1',
  //   image: '/images/carbon-cart.png',
  // },
  // {
  //   name: 'Undergraduate Research - SEAL Lab',
  //   description: 'Conducted research at the UW’s Sensors Energy & Automation Laboratory, exploring systems that improve energy efficiency and automation through data-driven insights.',
  //   link: 'https://www.uwseal.org/',
  //   id: 'project4',
  //   image: '/images/research.png'
  // }
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'onXmaps Inc.',
    title: 'Software Development Intern',
    start: 'Upcoming',
    end: 'Summer 2026',
    link: 'https://www.onxmaps.com/',
    id: 'work1',
  },
  {
    company: 'Sierra Nevada Corporation',
    title: 'Software Engineer Intern',
    start: 'June 2025',
    end: 'August 2025',
    link: 'https://sncorp.com',
    id: 'work2',
  },
  {
    company: 'Bluco @ Station F',
    title: 'Startup Software Engineer Intern',
    start: 'February 2025',
    end: 'April 2025',
    link: 'https://bluco.ai',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/crecup',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/chloerecupero',
  },
]

export const EMAIL = 'chloerecupero04@gmail.com'