# NYB Infotech — Professional Super App UI

This version redesigns the supplied NYB Infotech project into a spacious, responsive application-style interface.

## Included
- Professional responsive dashboard layout with collapsible-style navigation behavior on mobile.
- Real photography via Unsplash image URLs instead of emoji-based category artwork.
- Separate working routes for Shopping, Food, Movies, Medicine, Travel, Hotels, Recharge, Finance, Insurance, Education, Gifts, Events, Government, Gold, Doctor, Labs, Nearby and more.
- Product detail pages, add-to-cart, quantity controls, cart removal, checkout form and order confirmation.
- Login and registration pages with localStorage account persistence.
- Account page with sign-out flow.
- Search field with result routing.
- Interactive NYB Assistant panel with contextual answers and quick navigation.
- Responsive service pages with search/filter behavior where relevant.
- Existing Express API retained for future marketplace integrations.

## Run
```bash
npm install
npm run dev
```

The Vite client runs on its normal Vite port and the Express API runs on port 5000.

## Important production note
The login, order confirmation and assistant are fully interactive in this standalone build, but they are local/demo application logic. For a production deployment, connect authentication to a real database/auth provider, connect checkout to a payment gateway, and connect the assistant to an approved AI API with a server-side key.
