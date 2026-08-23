import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  // 1. Layer: src/common (Must be pure & domain-agnostic)
  {
    files: ["src/common/**/*.{js,jsx,ts,tsx}"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["@/data/*", "@/repositories/*", "@/features/*", "@/domains/*", "@/app/*"],
              message: "Layer Violation: `src/common` must be pure and domain-agnostic. It cannot import from any other layer.",
            },
          ],
        },
      ],
    },
  },

  // 2. Layer: src/data (Raw static assets & constants only)
  {
    files: ["src/data/**/*.{js,jsx,ts,tsx}"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["@/repositories/*", "@/features/*", "@/domains/*", "@/app/*"],
              message: "Layer Violation: `src/data` contains raw static constants only and cannot import from upper layers.",
            },
          ],
        },
      ],
    },
  },

  // 3. Layer: src/repositories (Data parsers & fetchers)
  {
    files: ["src/repositories/**/*.{js,jsx,ts,tsx}"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["@/features/*", "@/domains/*", "@/app/*"],
              message: "Layer Violation: `src/repositories` can only import from `data/` or `common/`. UI layers are forbidden.",
            },
          ],
        },
      ],
    },
  },

  // 4. Layer: src/features (Cross-domain shared UI & hooks)
  {
    files: ["src/features/**/*.{js,jsx,ts,tsx}"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["@/domains/*", "@/app/*"],
              message: "Layer Violation: `src/features` cannot import from high-level `domains/` or Next.js `app/`.",
            },
          ],
        },
      ],
    },
  },

  // 5. Layer: src/domains (Business domain screens & workflows)
  {
    files: ["src/domains/**/*.{js,jsx,ts,tsx}"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["@/app/*"],
              message: "Layer Violation: `src/domains` cannot import from the Next.js `app/` routing layer.",
            },
            {
              group: ["@/domains/*/*"],
              message: "Cross-Domain Violation: Domains cannot import directly from other domains. Move shared UI to `@/features` or shared data to `@/repositories`.",
            },
          ],
        },
      ],
    },
  },
]);

export default eslintConfig;
