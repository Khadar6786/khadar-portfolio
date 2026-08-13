import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projectsData } from "@/data/projectsData";
import { ProjectDetailView } from "@/components/projects/ProjectDetailView";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AmbientBackground } from "@/components/layout/AmbientBackground";

export const metadata: Metadata = {
  title: "Secure Authentication & RBAC Platform | Shaik Khadar Ahamad",
  description:
    "Case study on the Java & Spring Boot backend authentication and role-based access control platform built by Shaik Khadar Ahamad."
};

export default function AuthenticationRbacProjectPage() {
  const project = projectsData.find(p => p.slug === "authentication-rbac");

  if (!project) {
    notFound();
  }

  return (
    <>
      <AmbientBackground />
      <Navbar />
      <main className="relative z-10">
        <ProjectDetailView project={project} />
      </main>
      <Footer />
    </>
  );
}
