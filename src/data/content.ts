// TODO: This is placeholder/draft content generated from your public GitHub profile.
// Edit the values below with your real bio, role, and experience.

export const profile = {
  name: 'Tobby Meng',
  title: 'Software Engineer',
  tagline: 'I build AI-powered developer tools and infrastructure automation.',
  bio: [
    "I'm a software engineer focused on the intersection of AI agents and infrastructure — building systems that reason about incidents, automate remediation, and turn unstructured knowledge into something queryable.",
    'My recent work explores locally-run LLMs (Ollama) for privacy-preserving tooling, sandboxed command execution, and policy-guarded automation — favoring dependable, well-tested systems over quick hacks.',
  ],
  location: 'TODO: your location',
  email: 'mengtobby@gmail.com',
  github: 'https://github.com/mengtobby',
  linkedin: 'https://linkedin.com/in/tobbymeng', // TODO: confirm this is your real LinkedIn URL
  resumeUrl: '', // TODO: add a link to your resume/CV if you'd like a download button
} as const;

export type Skill = {
  category: string;
  items: string[];
};

export const skills: Skill[] = [
  {
    category: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'SQL'],
  },
  {
    category: 'AI / LLM',
    items: ['LLM Agents', 'Ollama', 'Prompt Engineering', 'Vector Search', 'RAG'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'REST APIs', 'SQLite'],
  },
  {
    category: 'Infrastructure',
    items: ['Docker', 'Sandboxing', 'CI/CD', 'Policy Automation'],
  },
];

export type Project = {
  name: string;
  description: string;
  tech: string[];
  href: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: 'Autonomous Infrastructure Agent',
    description:
      'An autonomous SRE agent that analyzes real-time microservice incident alerts, determines root cause, and drafts remediation plans. Runs commands in a sandboxed Docker workspace behind a policy checker, and now supports fully local inference via Ollama.',
    tech: ['TypeScript', 'Ollama', 'Docker', 'Express'],
    href: 'https://github.com/mengtobby/autonomous-infrastructure-agent',
    featured: true,
  },
  {
    name: 'Personal AI Knowledge Assistant',
    description:
      'A locally-hosted document intelligence system: upload PDFs, DOCX, CSV/XLSX, or scanned images and query them through a chatbot that answers strictly from your own documents, with source citations. Runs entirely offline on Ollama and local vector search.',
    tech: ['TypeScript', 'Ollama', 'SQLite', 'Vector Search', 'OCR'],
    href: 'https://github.com/mengtobby/personal-ai-knowledge-assistant',
    featured: true,
  },
];
