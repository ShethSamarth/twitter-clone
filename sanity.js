import { createClient } from "next-sanity"
export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiversion: "2023-03-25",
  useCDN: process.env.NODE_ENV === "production",
}
export const sanityClient = createClient(config)
