import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import project from "./sanity/schemas/project-schemas";
import page from "./sanity/schemas/page-schema";

const config = defineConfig({
  projectId: "0sfumm6r",
  dataset: "production",
  title: "Joss personal website",
  apiVersion: "202-04-22",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: [project, page] },
});

export default config;
