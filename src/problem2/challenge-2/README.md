# Fancy Form: Svelte + TS + Vite + TailwinCss + Flowbite

## Project Setup

1. **Install dependencies:**

```sh
yarn install
```

2. **Run the development server:**

```sh
yarn run dev
```

## Technologies Used

- **Svelte:** A modern JavaScript framework for building user interfaces.
- **TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript.
- **Vite:** A fast build tool and development server.
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
- **Flowbite:** A component library built on top of Tailwind CSS.

## Folder Structure

```
fancy-form/
├── public/             # Static assets
├── src/                # Source files
│   ├── assets/         # Images, fonts, etc.
│   ├── components/     # Svelte components
│   ├── store/          # Global store
│   ├── models/         # Typescript types
│   ├── lib/            # Services, helper
│   ├── Pages/          # Entry for each Route
│   ├── styles/         # CSS and Tailwind configuration
│   ├── App.svelte      # Main Svelte component
│   ├── main.ts         # Entry point for the application
│   └── vite.config.ts  # Vite configuration file
├── package.json        # Project metadata and dependencies
├── tsconfig.json       # TypeScript configuration
└── README.md           # Project documentation
```

## Why Use Svelte?

Svelte is a modern JavaScript framework that offers several advantages:

- **No Virtual DOM:** Svelte shifts the work to compile time, generating highly efficient imperative code that directly manipulates the DOM.
- **Reactivity:** Svelte has a built-in reactivity system that makes it easy to manage state and update the UI.
- **Performance:** Svelte applications tend to have smaller bundle sizes and faster runtime performance compared to other frameworks.
- **Simplicity:** Svelte's syntax is simple and easy to learn, making it accessible for developers of all skill levels.
- **Component-Based:** Svelte encourages a component-based architecture, promoting reusable and maintainable code.

## What can be improved ?

- [ ] Implement the doc based API
- [ ] Improve the Toast message
- [ ] Add support for i18n
- [ ] Add fallback for token that do not have icon
- [ ] Migrate to svelteKit for dynamic routing if needed
- [ ] Writing Unit / Automation test
