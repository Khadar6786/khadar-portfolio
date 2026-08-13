import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { personalInfo } from "@/data/portfolioData";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap"
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://khadar-portfolio.vercel.app"),
  title: "Shaik Khadar Ahamad | Backend & Full-Stack Developer",
  description:
    "Portfolio of Shaik Khadar Ahamad, an Integrated M.Tech Computer Science student focused on backend and full-stack software development using Java, Spring Boot, Next.js, TypeScript, React, MySQL and AWS.",
  keywords: [
    "Shaik Khadar Ahamad",
    "Backend Developer",
    "Full-Stack Developer",
    "Java",
    "Spring Boot",
    "REST APIs",
    "Next.js",
    "TypeScript",
    "React",
    "MySQL",
    "AWS S3",
    "VIT-AP University",
    "Software Engineer"
  ],
  authors: [{ name: "Shaik Khadar Ahamad", url: "https://github.com/Khadar6786" }],
  creator: "Shaik Khadar Ahamad",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://khadar-portfolio.vercel.app",
    siteName: "Shaik Khadar Ahamad Portfolio",
    title: "Shaik Khadar Ahamad | Backend & Full-Stack Developer",
    description:
      "Integrated M.Tech Computer Science student at VIT-AP University focused on backend and full-stack software development with Java, Spring Boot, REST APIs, Next.js, and TypeScript."
  },
  twitter: {
    card: "summary_large_image",
    title: "Shaik Khadar Ahamad | Backend & Full-Stack Developer",
    description:
      "Integrated M.Tech Computer Science student at VIT-AP University building reliable backend systems and modern web applications."
  },
  robots: {
    index: true,
    follow: true
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personalInfo.name,
  jobTitle: "Backend & Full-Stack Developer",
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "VIT-AP University",
    program: "Integrated M.Tech in Computer Science and Engineering"
  },
  email: personalInfo.email,
  sameAs: [personalInfo.github, personalInfo.linkedin],
  knowsAbout: [
    "Java",
    "Spring Boot",
    "REST APIs",
    "Next.js",
    "TypeScript",
    "React",
    "MySQL",
    "AWS S3",
    "Role-Based Access Control",
    "Data Structures & Algorithms"
  ]
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${jakartaSans.variable} ${jetbrainsMono.variable} scroll-smooth antialiased dark`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#060813] text-slate-100 selection:bg-indigo-600/30 selection:text-white">
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
