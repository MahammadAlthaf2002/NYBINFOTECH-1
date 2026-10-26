# React Testing Practice Lab

A beginner-friendly React + Vite learning app with a working task form and API-backed learner list. The 15 lesson links cover component testing, Vitest/Jest, React Testing Library, rendering, interactions, validation, conditional rendering, API mocks, loading and errors, integration tests, Vite builds, env config, deployment, Git branches/PRs, and README docs.

## Install and run

```bash
npm install
npm run dev
```

Open the Local URL printed by Vite (normally http://localhost:5173).

## Run the real tests and production build

```bash
npm test
npm run build
npm run preview
```

Tests live in `src/App.test.jsx`. They use Vitest, jsdom, React Testing Library, user-event, and jest-dom. The API module is mocked so tests do not depend on the network. Test examples cover rendering, navigation, searching, typing, clicking, validation, conditional code display, completion state, and API loading/success/error states.

## Environment configuration

Create `.env.local` for public browser settings. Vite exposes only variables prefixed with `VITE_`:

```env
VITE_API_URL=https://example.com/api
```

Read it in code using `import.meta.env.VITE_API_URL`. Do not store private keys in browser variables; they become visible in the built site.

## Production and deployment

`npm run build` creates `dist/`. Preview the exact build with `npm run preview`. Deploy the contents of `dist/` to a static host. Set its build command to `npm run build` and publish directory to `dist`. If using client-side routes, set a fallback rewrite to `index.html`.

## Git branch and pull request example

```bash
git switch -c feature/react-testing-lessons
git add .
git commit -m "Add React testing practice lessons"
git push -u origin feature/react-testing-lessons
```

Then open a pull request on GitHub, describe the change, and note that `npm test` and `npm run build` pass.
