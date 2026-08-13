import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projectsData } from "@/data/projectsData";
import { ProjectDetailView } from "@/components/projects/ProjectDetailView";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AmbientBackground } from "@/components/layout/AmbientBackground";

export const metadata: Metadata = {
  title: "Secure Cloud File Storage System | Shaik Khadar Ahamad",
  description:
    "Case study on the Spring Boot & AWS S3 cloud file storage system built by Shaik Khadar Ahamad."
};

export default function CloudFileStorageProjectPage() {
  const project = projectsData.find(p => p.slug === "cloud-file-storage");

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
