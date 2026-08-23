export const profile = {
  name: 'Tobby Meng',
  firstName: 'Tobby',
  handle: '@mengtobby',
  title: 'Software Engineer',
  heroPrefix: 'I build agents that fix bugs while I',
  heroHighlight: 'sleep',
  tagline: 'I build AI agents and full-stack platforms that ship fast and fail safely.',
  bio: [
    "I'm an Electrical Engineering student at the University of Waterloo who spends most of my time writing software: agents that debug and remediate infrastructure, RAG search tools, and full-stack platforms.",
    "I've shipped dashboards and APIs at Qwhery, and I'm heading into a software engineering internship with the Ontario government this fall. Before that, I spent two years teaching competition math, which taught me how to break hard problems into steps anyone can follow.",
  ],
  location: 'Waterloo, ON',
  email: 'mengtobby@gmail.com',
  github: 'https://github.com/mengtobby',
  linkedin: 'https://linkedin.com/in/tobby-meng',
  resumeUrl: '/resume.pdf',
} as const;

export type Skill = {
  category: string;
  items: string[];
};

export const skills: Skill[] = [
  {
    category: 'Languages & Web',
    items: ['Python', 'C/C++', 'TypeScript', 'JavaScript', 'SQL', 'React', 'Next.js', 'Angular', 'HTML/CSS'],
  },
  {
    category: 'Backend & Systems',
    items: ['FastAPI', 'REST APIs', 'gRPC', 'Pydantic', 'Node.js', 'Docker', 'Linux', 'Arduino'],
  },
  {
    category: 'Databases & Tools',
    items: ['PostgreSQL', 'Redis', 'MongoDB', 'Git', 'Azure DevOps'],
  },
];

export type TimelineEntry = {
  year: string;
  name: string;
  role: string;
  href?: string;
};

export const timeline: TimelineEntry[] = [
  {
    year: '2026',
    name: 'Ontario Ministry of PBSD&P',
    role: 'Software Engineering Intern (Incoming)',
  },
  {
    year: '2026',
    name: 'Qwhery Inc.',
    role: 'Software Engineering Intern',
  },
  {
    year: '2024',
    name: 'Crania Schools',
    role: 'Mathematics Teacher',
  },
];

export type Project = {
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  href: string;
  block: 'a' | 'b' | 'c';
};

export const projects: Project[] = [
  {
    name: 'Autonomous Infrastructure Agent',
    tagline: 'Auto-fixes microservice crashes in under 12 seconds.',
    description:
      'An automated debugging agent that listens to server log streams via gRPC, identifies crash errors, and generates bug fixes automatically. Runs fixes inside isolated Docker containers with a safety checker blocking dangerous commands.',
    tech: ['Python', 'gRPC', 'Docker', 'Redis'],
    href: 'https://github.com/mengtobby/autonomous-infrastructure-agent',
    block: 'a',
  },
  {
    name: 'RAG Knowledge Base & Search Engine',
    tagline: 'Ask your own documents questions in plain English.',
    description:
      'Stores document embeddings in PostgreSQL with pgvector for meaning-based search, and streams AI responses word-by-word over WebSockets alongside exact source highlights.',
    tech: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'pgvector'],
    href: 'https://github.com/mengtobby/personal-ai-knowledge-assistant',
    block: 'b',
  },
  {
    name: 'AI-Assisted Delirium Detection System',
    tagline: 'Screens for clinical delirium from 30 seconds of speech.',
    description:
      'A $50 hardware device using an Arduino microphone circuit that records patient speech. A Python service cleans the raw audio and sends transcripts to GPT for medical evaluation.',
    tech: ['Arduino', 'Python', 'GPT'],
    href: 'https://github.com/mengtobby',
    block: 'c',
  },
];
