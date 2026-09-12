# First One-Time Setup

This guide outlines the programmatic setup for initializing a statically exported Next.js project with TypeScript, Tailwind CSS, and React Aria Components.

## Project Initialisation

Execute the initialization script non-interactively.

```bash
npx create-next-app@latest my-static-site
```

Select options:

```bash
Would you like to use the recommended Next.js defaults? » No, customize settings
Would you like to use TypeScript? » Yes
Which linter would you like to use? » ESLint
Would you like to use React Compiler? » Yes
Would you like to use Tailwind CSS? » Yes
Would you like your code inside a `src/` directory? » No
Would you like to use App Router? (recommended) » Yes
Would you like to customize the import alias (`@/*` by default)? » No
Would you like to include AGENTS.md to guide coding agents to write up-to-date Next.js code? » Yes
```

## Environment Variable Declaration

Duplicate and rename `.env.example` to `.env.development`. <br>
Add/update environment variables accordingly. <br>
Configure `@/src/common/utilities/env.ts` file to use the environment variables, including fallback values.

```typescript
export const env = {
  publicBasePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
} as const;
```

## Configure Next.js for Static Site Generation (SSG)

To enable true static HTML export in the Next.js App Router, you must change the output mode in your configuration file.

```javascript
import { env } from '@/src/common/utilities/env';
const nextConfig: NextConfig = {
  // In local environment, it takes from .env.development
  // In production environment, it takes from github actions environment variable NEXT_PUBLIC_BASE_PATH
  basePath: env.publicBasePath,
  reactCompiler: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
};
export default nextConfig;
```

# Configure Prettier

```json
{
  "semi": true,
  "trailingComma": "all",
  "singleQuote": true,
  "tabWidth": 2,
  "useTabs": false,
  "plugins": ["prettier-plugin-tailwindcss"], // Enables prettier plugin for tailwind css
  "tailwindAttributes": ["classNames"], // Supports sorting string literals nested inside JavaScript objects assigned to configured attributes
  "tailwindFunctions": ["cn", "clsx", "twMerge", "tv"] // Tell prettier to parse these function calls to format tailwind classes
}
```

# Configure EsLint: Enforce Architecture Boundaries with Restricted Imports

This ESLint configuration establishes strict dependency boundaries for a modular codebase using no-restricted-imports. By enforcing a clear unidirectional data flow, it prevents circular dependencies, protects lower-level utilities from domain logic leakages, and forbids direct cross-domain imports to maintain modular isolations.

Refer to [Project Structure](./project-structure.md).

Refer to `eslint.config.mjs` for full config.

# Install other dependencies

```bash
npm i clsx tailwind-merge react-aria-components
npm install --save-dev eslint-plugin-simple-import-sort
```
