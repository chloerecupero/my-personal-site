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
    name: 'cseed buildHER Project Lead',
    description: 'Led mentorship cohorts and events to empower women builders and grow an inclusive tech community.',
    link: 'https://www.cseed.co/buildher-team',
    id: 'project2',
    image: '/images/cseed.png',
  },
  {
    name: 'Carbon Cart',
    description:
      'iOS app protoype helping consumers make environmentally conscientious grocery purchases',
    link: 'https://www.linkedin.com/in/chloe-recupero-764842260/overlay/projects/1713160169/multiple-media-viewer/?profileId=ACoAAEAyNbwBhLaqW-1ttLppa_8Q7W_Y82ShIuw&treasuryMediaId=1732584981070&type=DOCUMENT',
    id: 'project1',
    image: '/images/carbon-cart.png',
  },
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
    company: 'Paul G. Allen School, University of Washington',
    title: 'Direct Admit Seminar Teaching Assistant',
    start: 'August 2025',
    end: 'December 2025',
    link: 'https://sites.google.com/cs.washington.edu/cse190bautumn2025',
    id: 'work2',
  },
  {
    company: 'Sierra Nevada Corporation',
    title: 'Software Engineer Intern',
    start: 'June 2025',
    end: 'August 2025',
    link: 'https://sncorp.com',
    id: 'work3',
  },
  {
    company: 'Bluco @ Station F',
    title: 'Startup Software Engineer Intern',
    start: 'February 2025',
    end: 'April 2025',
    link: 'https://bluco.ai',
    id: 'work4',
  },
  {
    company: 'Coding With Kids',
    title: 'Programming Instructor',
    start: 'April 2024',
    end: 'September 2024',
    link: 'https://www.codingwithkids.com',
    id: 'work5',
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
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/chloerecupero',
  },
]

export const EMAIL = 'crecup@uw.edu'