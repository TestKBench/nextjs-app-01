# NextJS App 01

Sample Next.js application currently on version **13.4.19** using the Pages Router.

## Current Version

- **Next.js**: 13.4.19
- **React**: 18.2.0
- **TypeScript**: 5.1.6

## Architecture

- **Router**: Pages Router (`pages/` directory)
- **Styling**: CSS Modules
- **TypeScript**: Enabled with strict mode

## Breaking Changes Needed for Next.js 15 Upgrade

This application uses several patterns that will need updates when upgrading to Next.js 15:

### 1. App Router Migration
- Currently uses Pages Router (`pages/` directory)
- Next.js 15 strongly encourages App Router (`app/` directory)
- Will need to migrate pages to route segments

### 2. Image Component Updates
- Uses old `next/image` API from Next.js 13.4
- Next.js 15 has updated Image component with new defaults
- Remove `width` and `height` for layout='fill' images

### 3. Link Component Changes
- Uses `<Link><a>` pattern (required in 13.4)
- Next.js 13.5+ automatically renders `<a>`, explicit `<a>` causes errors
- Need to remove `<a>` children from `<Link>` components

### 4. Metadata API
- Currently uses `<Head>` component from `next/head`
- Next.js 13+ App Router uses `metadata` export
- Will need to convert to new Metadata API

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view.

## Build

```bash
npm run build
npm start
```

## CI/CD

GitHub Actions workflow runs on every push and PR:
- Linting with ESLint
- Type checking with TypeScript
- Build verification

## Pages

- `/` - Home page with navigation cards
- `/about` - About page
- `/products` - Product listing with images

## Related Repositories

Part of **Exit Criteria Scenario 2: Bulk Repository Updates**

This is one of 10 repositories that need to be upgraded to Next.js 15.

See: [Scenario 2 README](../SCENARIO_README.md)
