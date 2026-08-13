export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: {
    name: string;
    description?: string;
    isPrimary?: boolean;
  }[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  score: string;
  scoreType: "CGPA" | "Percentage";
  location: string;
  isPrimary?: boolean;
  highlights?: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  description?: string;
  badgeType: "cloud" | "database";
  credentialUrl?: string;
}

export interface EngineeringPrinciple {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: "Layers" | "ShieldCheck" | "BookOpen";
  points: string[];
}

export interface FocusArea {
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  iconName: "Server" | "Layout" | "Cloud";
}

export const personalInfo = {
  name: "Shaik Khadar Ahamad",
  headline: "Backend & Full-Stack Developer",
  status: "Available for Software Engineering & Backend Opportunities",
  tagline:
    "I build reliable backend systems and modern web applications with a focus on clean architecture, practical engineering, and scalable solutions.",
  secondaryTechLine:
    "Java • Spring Boot • REST APIs • Next.js • TypeScript",
  email: "khadarahamad1234@gmail.com",
  phone: "+91 9032132920",
  github: "https://github.com/Khadar6786",
  linkedin: "https://linkedin.com/in/shaik-khadar-ahamad",
  resumeUrl: "/resume",
  location: "Amaravati & Tirupati, Andhra Pradesh, India",
  educationBrief:
    "Integrated M.Tech in Computer Science & Engineering (VIT-AP University, 2022–2027) • CGPA 8.67/10",
  aboutText: [
    "I am an Integrated M.Tech Computer Science student at VIT-AP University focused on backend and full-stack software development.",
    "I build practical applications using Java, Spring Boot, REST APIs, MySQL, Next.js, TypeScript, and React, with a strong foundation in Data Structures & Algorithms, Object-Oriented Programming, Operating Systems, and Computer Networks.",
    "My backend work includes REST APIs, authentication and authorization, role-based access control, database-driven applications, and cloud-integrated solutions."
  ]
};

export const engineeringPrinciples: EngineeringPrinciple[] = [
  {
    id: "clean-architecture",
    title: "Clean Architecture",
    tagline: "Structured separation of concerns",
    description:
      "Adhering to Controller-Service-Repository patterns, modular abstractions, and well-defined contracts to create maintainable and testable codebases.",
    iconName: "Layers",
    points: [
      "Controller-Service-Repository separation",
      "Type-safe interfaces and DTO modeling",
      "Modular components with clear responsibility"
    ]
  },
  {
    id: "reliable-systems",
    title: "Reliable Systems",
    tagline: "Resilient security and predictable execution",
    description:
      "Building backend services with rigorous input validation, BCrypt password hashing, structured error handling, and robust Role-Based Access Control (RBAC).",
    iconName: "ShieldCheck",
    points: [
      "Strict input validation and sanitization",
      "Secure credential management & RBAC",
      "Centralized error handling and predictable responses"
    ]
  },
  {
    id: "continuous-learning",
    title: "Continuous Learning",
    tagline: "Strong fundamentals applied to modern stacks",
    description:
      "Deep grounding in Core Computer Science fundamentals (DSA, OOP, OS, Networks) actively applied to modern enterprise Java ecosystems and modern full-stack web applications.",
    iconName: "BookOpen",
    points: [
      "Solid algorithmic problem-solving & DSA",
      "Operating Systems & Network protocol fundamentals",
      "Rapidly adopting modern cloud & web technologies"
    ]
  }
];

export const focusAreas: FocusArea[] = [
  {
    title: "Backend Systems",
    tagline: "Robust APIs & Business Logic",
    description:
      "REST APIs, business logic, authentication, authorization, and database-driven applications engineered with Java, Spring Boot, and MySQL.",
    technologies: ["Java", "Spring Boot", "REST APIs", "Spring Data JPA", "MySQL", "BCrypt"],
    iconName: "Server"
  },
  {
    title: "Modern Web Applications",
    tagline: "Interactive & Production-Ready",
    description:
      "Responsive, production-ready applications using Next.js, TypeScript, and React with server-side API routes and clean component architectures.",
    technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Resend", "Vercel"],
    iconName: "Layout"
  },
  {
    title: "Cloud-Integrated Applications",
    tagline: "Scalable Storage & Deployments",
    description:
      "Applications integrating cloud services and modern deployment platforms, managing object storage via AWS S3 and automated deployment workflows on Vercel.",
    technologies: ["AWS S3", "AWS IAM", "Vercel", "Cloud Fundamentals", "MySQL"],
    iconName: "Cloud"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    id: "backend",
    name: "Backend Development",
    description: "Enterprise Java backend engineering, RESTful services, and data persistence",
    skills: [
      { name: "Spring Boot", description: "REST APIs, Dependency Injection, Services", isPrimary: true },
      { name: "REST APIs", description: "RESTful architecture, status codes, standard JSON payloads", isPrimary: true },
      { name: "Spring Data JPA", description: "ORM, repository interfaces, JPQL", isPrimary: true },
      { name: "Server-Side APIs", description: "Next.js Route Handlers, webhook processing", isPrimary: false }
    ]
  },
  {
    id: "languages",
    name: "Programming Languages",
    description: "Core programming languages used for systems, backend, and frontend",
    skills: [
      { name: "Java", description: "OOP, Streams, Collections, Multithreading fundamentals", isPrimary: true },
      { name: "TypeScript", description: "Strict static typing, interfaces, generic types", isPrimary: true },
      { name: "Python", description: "Scripting, algorithm implementations, problem solving", isPrimary: false }
    ]
  },
  {
    id: "core-concepts",
    name: "Core CS Concepts",
    description: "Foundational computer science principles applied in software design",
    skills: [
      { name: "Data Structures & Algorithms", description: "Arrays, Trees, Graphs, Sorting, Searching", isPrimary: true },
      { name: "Object-Oriented Programming", description: "Encapsulation, Polymorphism, Inheritance, Abstraction", isPrimary: true },
      { name: "Operating Systems", description: "Process scheduling, memory management, threads", isPrimary: false },
      { name: "Computer Networks", description: "HTTP/HTTPS, TCP/IP, OSI model, DNS", isPrimary: false }
    ]
  },
  {
    id: "database",
    name: "Databases",
    description: "Relational database schema design and querying",
    skills: [
      { name: "MySQL", description: "Schema design, relational normalization, indexing, SQL queries", isPrimary: true }
    ]
  },
  {
    id: "cloud",
    name: "Cloud & Deployment",
    description: "Cloud infrastructure and production deployment platforms",
    skills: [
      { name: "AWS S3", description: "Object storage, bucket policies, secure file upload/download", isPrimary: true },
      { name: "AWS IAM", description: "Identity & Access Management, least privilege policies", isPrimary: true },
      { name: "Vercel", description: "Production edge deployments, environment variable management", isPrimary: false }
    ]
  },
  {
    id: "frontend",
    name: "Frontend Development",
    description: "Modern component-driven web interfaces",
    skills: [
      { name: "React", description: "Functional components, hooks, state management", isPrimary: true },
      { name: "Next.js", description: "App Router, SSR, Server Components, Route Handlers", isPrimary: true },
      { name: "Tailwind CSS", description: "Utility-first responsive layouts and custom design systems", isPrimary: true }
    ]
  },
  {
    id: "security",
    name: "Security & Access Control",
    description: "Application security, authentication, and defensive coding",
    skills: [
      { name: "Authentication", description: "User verification, secure login lifecycle", isPrimary: true },
      { name: "Authorization", description: "Permission checks and route protection", isPrimary: true },
      { name: "RBAC", description: "Role-Based Access Control (USER, ADMIN hierarchies)", isPrimary: true },
      { name: "BCrypt", description: "Salted cryptographic password hashing", isPrimary: true },
      { name: "Input Validation", description: "Sanitization, regex boundary checks, HTML escaping", isPrimary: true }
    ]
  },
  {
    id: "tools",
    name: "Tools & Ecosystem",
    description: "Development tools, build automation, and communication integrations",
    skills: [
      { name: "Git", description: "Version control, branching, merge conflict resolution", isPrimary: true },
      { name: "GitHub", description: "Code collaboration, pull requests, repository management", isPrimary: true },
      { name: "Maven", description: "Java build automation and dependency lifecycle", isPrimary: true },
      { name: "Resend", description: "Transactional email API integration", isPrimary: false }
    ]
  }
];

export const educationList: EducationItem[] = [
  {
    institution: "VIT-AP University",
    degree: "Integrated M.Tech in Computer Science and Engineering",
    period: "Aug 2022 – Jul 2027",
    score: "8.67 / 10",
    scoreType: "CGPA",
    location: "Amaravati, Andhra Pradesh",
    isPrimary: true,
    highlights: [
      "Rigorous 5-year integrated masters curriculum combining core CS theory with advanced engineering",
      "Focus areas: Data Structures & Algorithms, Object-Oriented Programming, Operating Systems, Database Management Systems, Computer Networks",
      "Hands-on engineering projects covering Spring Boot microservices, secure authentication systems, and cloud integration"
    ]
  },
  {
    institution: "Accord School",
    degree: "Senior Secondary Education (Class XII)",
    period: "Jun 2020 – Mar 2022",
    score: "82.8%",
    scoreType: "Percentage",
    location: "Tirupati, Andhra Pradesh",
    isPrimary: false,
    highlights: [
      "Higher secondary coursework in Physics, Chemistry, and Mathematics (MPC stream)"
    ]
  },
  {
    institution: "Accord School",
    degree: "Secondary Education (Class X)",
    period: "Mar 2020",
    score: "88.4%",
    scoreType: "Percentage",
    location: "Tirupati, Andhra Pradesh",
    isPrimary: false,
    highlights: [
      "Secondary school certificate with high distinction across science, mathematics, and computing fundamentals"
    ]
  }
];

export const certificationsList: CertificationItem[] = [
  {
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services (AWS)",
    description: "Fundamental cloud concepts, AWS security, core compute, storage services, networking, and pricing models.",
    badgeType: "cloud",
    credentialUrl: "https://drive.google.com/file/d/1lg1v235HJit_uMHG-8XI_WaYlsQIunDn/view?usp=sharing"
  },
  {
    title: "Getting Started with Databases",
    issuer: "Amazon Web Services (AWS Educate)",
    description: "Relational and non-relational database fundamentals, data modeling, querying, and managed database services.",
    badgeType: "database",
    credentialUrl: "https://www.credly.com/badges/30a96f4e-95f2-45e3-842b-d1752327f881/public_url"
  }
];
