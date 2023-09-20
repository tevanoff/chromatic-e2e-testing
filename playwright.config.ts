import { defineConfig } from "@playwright/test";
import { ChromaticConfig } from "@chromaui/test-archiver";

export default defineConfig<ChromaticConfig>({
  use: {
    baseURL: "http://localhost:3000",
    chromatic: {
      disableE2EAutoCapture: true,
      diffThreshold: 1,
    }
  },
  webServer: {
    command: "npm run start",
    url: "http://localhost:3000",
  },
});
