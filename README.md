# nextjs-aceternity-template

[![latest](https://github.com/sai-github/nextjs-aceternity-template/actions/workflows/main-build.yml/badge.svg)](https://github.com/sai-github/nextjs-aceternity-template/actions/workflows/main-build.yml)

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### Prerequisites

-   **Node.js**: This project requires Node.js. We recommend using [NVM (Node Version Manager)](https://github.com/nvm-sh/nvm) to manage Node versions efficiently.

    ```bash
    nvm install
    nvm use
    ```

### Development Server

First, run the development server:

```bash
npm run dev
```

-   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
-   This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

### Available Scripts

-   `npm run dev`: Starts the development server.
-   `npm run build`: Builds the app for production.
-   `npm run start`: Runs the built app in production mode.
-   `npm run lint`: Runs ESLint and Prettier to lint and fix code.

### Adding shadcn-like UI Components

We use aceternity-ui to manage our UI components, compatible with shadcnui.

#### Initial Setup (can be skipped if you already have aceternity-ui setup)

Initialize the project with aceternity-ui, run:

```bash
npx aceternity-ui@latest init
```

#### Adding Components

To add a new component to your project, use:

```bash
npx aceternity-ui@latest add [component]
```

For example, to add the bento-grid component, run:

```bash
npx aceternity-ui@latest add bento-grid
```

The newly added components will be located in the src/@awesome-ui/components/ui/ directory.

### Using Icons

We use iconify to manage our icons, compatible with shadcnui.

-   Browse icons sets at https://icon-sets.iconify.design/lucide/
-   Example usage:

    ```bash
    import { Icon } from '@iconify/react';

    const HomeComponent = () => (
        <div>
            <Icon icon="lucide:circle-user" />
        </div>
    );
    ```

### Commit Guidelines

-   We use Commitlint to enforce commit message conventions.
-   for example [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional) (based on the Angular convention) recommends build:, chore:, ci:, docs:, style:, refactor:, perf:, test:, and others.
-   We use github action, so please make sure your commit message is formatted correctly and also provide bundle size information.

### Learn More About Next.js

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
