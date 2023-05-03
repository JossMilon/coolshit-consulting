import { getProjects } from "@/sanity/sanity-utils";
import { Project } from "@/types/Project";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();
  return (
    <div className="max-w-5xl mx-auto py-20">
      <h1 className="text-7xl font-extrabold">
        Hi guys, this is{" "}
        <span className="bg-gradient-to-r from-orange-400 to-purple-600 bg-clip-text text-transparent">
          la Mile
        </span>
      </h1>
      <h2 className="text-3xl my-10">
        See below some projects I worked on during my journey from noob to
        coob!!
      </h2>
      <div className="grid grid-cols-3 gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project: Project) => {
          return (
            <Link
              href={project.url}
              key={project._id}
              className="border rounded-lg p-3"
            >
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.name}
                  width={750}
                  height={300}
                  className="object-cover rounded-lg border hover:scale-105 transition"
                />
              )}
              <h4 className="font-extrabold bg-gradient-to-r from-orange-400 to-purple-600 bg-clip-text text-transparent">
                {project.name}
              </h4>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
