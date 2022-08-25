import {
  PlasmicRootProvider,
  PlasmicComponent,
  ComponentRenderData,
  extractPlasmicQueryData,
} from "@plasmicapp/loader-nextjs";

import Link from "next/link";
import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: process.env.PLASMIC_ID, // ID of a project you are using
      token: process.env.PLASMIC_TOKEN, // API token for that project
      // id: "uGxxMthkoTUJFRikqCHP5T", // ID of a project you are using
      // token:
      //   "WBbBY4GdBp7enu6qcTwWz1d3zBLyHTt1YqW8ss1V2cYAPH69wDSr1d1gqEhk24koSon2Q4yLYxgeVz0PoQ", // API token for that project
    },
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
});
