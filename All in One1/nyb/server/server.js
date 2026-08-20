import express from "express";
import cors from "cors";
import { findProduct } from "./services/comparisonService.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, service: "NYB Infotech comparison API" });
});

app.post("/api/compare", async (req, res) => {
  const input = String(req.body?.input || "").trim();
  if (!input) return res.status(400).json({ message: "Product URL or search term is required." });

  const product = findProduct(input);
  res.json({
    success: true,
    source: "development-adapter",
    searched: input,
    product,
    note: "Connect approved marketplace APIs or permitted feeds in server/marketplace for live prices."
  });
});

app.listen(PORT, () => console.log(`NYB API running on http://localhost:${PORT}`));
