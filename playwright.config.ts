import { defineConfig, devices } from "@playwright/test";
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
  projects: [
    {
      name: 'Desktop Chrome Large',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
    {
      name: 'Desktop Chrome Small',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 300, height: 600 },
      },
    },
    {
      name: 'Mobile Chrome',
      use: {
        ...devices['Pixel 5'],
      },
    },
  ],
});
