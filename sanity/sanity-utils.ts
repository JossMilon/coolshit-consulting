import { createClient, groq } from "next-sanity";

export async function getProjects() {
  const client = createClient({
    projectId: "0sfumm6r",
    dataset: "production",
    apiVersion: "2023-04-22",
  });
  return client.fetch(
    groq`*[_type=="project"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content
    }`
  );
}

export async function getProject(slug: string) {
  const client = createClient({
    projectId: "0sfumm6r",
    dataset: "production",
    apiVersion: "2023-04-22",
  });
  return client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content
    }`,
    { slug: slug }
  );
}

export async function getPages() {
  const client = createClient({
    projectId: "0sfumm6r",
    dataset: "production",
    apiVersion: "2023-04-22",
  });
  return client.fetch(
    groq`*[_type == "page"] {
      _id, 
      name,
      "slug": slug.current, 
    }`
  );
}

export async function getPage(slug: string) {
  const client = createClient({
    projectId: "0sfumm6r",
    dataset: "production",
    apiVersion: "2023-04-22",
  });
  return client.fetch(
    groq`*[_type == "page" && slug.current == $slug][0] {
      _id, 
      _createdAt,
      name,
      "slug": slug.current, 
      content
    }`,
    { slug: slug }
  );
}
