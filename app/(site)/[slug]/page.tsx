type Props = { params: { slug: string } };
import { PortableText } from "@portabletext/react";
import { getPage } from "@/sanity/sanity-utils";

export default async function Page({ params }: Props) {
  const slug = params.slug;
  const page = await getPage(slug);
  return (
    <div className="max-w-3xl mx-auto py-20">
      <header className="flex items-center justify-between">
        <h1 className="bg-gradient-to-r from-orange-400 to-purple-600 bg-clip-text text-transparent text-5xl font-extrabold">
          {page.slug}
        </h1>
      </header>
      <main className="text-lg text-gray-700 mt-5">
        <PortableText value={page.content} />
      </main>
    </div>
  );
}
