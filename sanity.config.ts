import { defineConfig, isDev } from "sanity"
import { visionTool } from "@sanity/vision"
import { deskTool } from "sanity/desk"
import { schemaTypes } from "./schemas"
import { getStartedPlugin } from "./plugins/sanity-plugin-tutorial"

const devOnlyPlugins = [getStartedPlugin()]
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!

export default defineConfig({
  name: "default",
  title: "Twitter Clone",

  projectId,
  dataset,
  apiversion: "2023-03-25",

  plugins: [deskTool(), visionTool(), ...(isDev ? devOnlyPlugins : [])],

  schema: {
    types: schemaTypes,
  },
})
