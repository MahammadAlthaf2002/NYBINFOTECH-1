# React Optimization Studio

A medium-level React project demonstrating where and why to use:
- React.memo
- useMemo
- useCallback
- Lazy Loading
- Code Splitting

## Run
npm install
npm run dev

## What to test
1. Toggle UI: Product cards are memoized with React.memo.
2. Search: filtered products are calculated with useMemo.
3. Add products: addToCart uses useCallback for a stable function reference.
4. Open Analytics: React.lazy and Suspense load the page only when needed.
5. Build: Vite creates a separate chunk for the lazy-loaded Analytics page.

Open the browser console to observe render logs.
