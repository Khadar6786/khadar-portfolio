import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projectsData } from "@/data/projectsData";
import { ProjectDetailView } from "@/components/projects/ProjectDetailView";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AmbientBackground } from "@/components/layout/AmbientBackground";

export const metadata: Metadata = {
  title: "Recycling Materials Platform | Shaik Khadar Ahamad",
  description:
    "Case study on the B2B web application for recyclable material sourcing, trading, and supply deployed by Shaik Khadar Ahamad."
};

export default function DkbPolymersProjectPage() {
  const project = projectsData.find(p => p.slug === "dkb-polymers");

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
