import { PortableTextBlock } from "sanity";

export type Page = {
  _id: string;
  _created_at: Date;
  name: string;
  slug: string;
  content: PortableTextBlock[];
};
