type Props = { params: { project: string } };
import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";

export default async function ProjectPage({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);
  return (
    <div className="max-w-3xl mx-auto py-20">
      <header className="flex items-center justify-between">
        <h1 className="bg-gradient-to-r from-orange-400 to-purple-600 bg-clip-text text-transparent text-5xl font-extrabold">
          {project.name}
        </h1>
        <Link
          href={project.url}
          className="bg-gray-100 rounded-lg font-bold p-3 text-gray-500 whitespace-nowrap hover:bg-orange-100 transition"
        >
          View project
        </Link>
      </header>
      <main className="text-lg text-gray-700 mt-5">
        <PortableText value={project.content} />
        <Image
          src={project.image}
          alt={project.name}
          width={1920}
          height={1080}
          className="mt-10 border-gray-700 object-cover rounded-xl"
        />
      </main>
    </div>
  );
}
