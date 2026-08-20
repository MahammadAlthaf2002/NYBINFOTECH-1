import express from "express";
import cors from "cors";
import { URL } from "node:url";

const app = express();
app.use(cors());
app.use(express.json());

const demoOffers = {
  iphone: [
    { store: "Amazon", price: 62999, rating: 4.6, url: "https://www.amazon.in/" },
    { store: "Flipkart", price: 59999, rating: 4.5, url: "https://www.flipkart.com/" },
    { store: "Croma", price: 64990, rating: 4.3, url: "https://www.croma.com/" },
    { store: "Reliance Digital", price: 63999, rating: 4.2, url: "https://www.reliancedigital.in/" }
  ],
  samsung: [
    { store: "Amazon", price: 57999, rating: 4.6, url: "https://www.amazon.in/" },
    { store: "Flipkart", price: 54999, rating: 4.5, url: "https://www.flipkart.com/" },
    { store: "Samsung", price: 58999, rating: 4.7, url: "https://www.samsung.com/in/" },
    { store: "Croma", price: 56999, rating: 4.3, url: "https://www.croma.com/" }
  ],
  sony: [
    { store: "Amazon", price: 24990, rating: 4.6, url: "https://www.amazon.in/" },
    { store: "Flipkart", price: 25999, rating: 4.5, url: "https://www.flipkart.com/" },
    { store: "Croma", price: 27990, rating: 4.3, url: "https://www.croma.com/" },
    { store: "Reliance Digital", price: 26999, rating: 4.2, url: "https://www.reliancedigital.in/" }
  ]
};

function detectProduct(input) {
  const value = input.toLowerCase();

  if (value.includes("samsung") || value.includes("s24")) {
    return {
      id: "samsung-s24",
      name: "Samsung Galaxy S24",
      category: "Smartphone",
      icon: "📱",
      description: "Detected from the supplied search/link input."
    };
  }

  if (value.includes("sony") || value.includes("wh-1000") || value.includes("headphone")) {
    return {
      id: "sony-xm5",
      name: "Sony WH-1000XM5",
      category: "Headphones",
      icon: "🎧",
      description: "Detected from the supplied search/link input."
    };
  }

  return {
    id: "iphone-16",
    name: "iPhone 16",
    category: "Smartphone",
    icon: "📱",
    description: "Detected from the supplied search/link input."
  };
}

function extractHost(input) {
  try {
    const url = new URL(input);
    return url.hostname.replace(/^www\\./, "");
  } catch {
    return null;
  }
}

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, service: "NYB comparison API" });
});

app.post("/api/compare", async (req, res) => {
  const input = String(req.body?.input || "").trim();

  if (!input) {
    return res.status(400).json({ message: "Product name or URL is required." });
  }

  const product = detectProduct(input);
  const key = product.id === "samsung-s24"
    ? "samsung"
    : product.id === "sony-xm5"
      ? "sony"
      : "iphone";

  // Production replacement point:
  // 1. Validate the URL.
  // 2. Identify the marketplace/product ID.
  // 3. Call an approved marketplace API/feed/affiliate API.
  // 4. Normalize offers into {store, price, rating, url}.
  // 5. Return live timestamp + availability.
  //
  // Do not implement browser-side scraping of Amazon/Flipkart/etc.
  // without a permitted integration.

  res.json({
    source: "demo",
    queriedAt: new Date().toISOString(),
    input,
    sourceHost: extractHost(input),
    product,
    offers: demoOffers[key]
  });
});

app.listen(5000, () => {
  console.log("NYB API running on http://localhost:5000");
});