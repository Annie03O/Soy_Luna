import express from "express";
import cors from "cors";
import { searchResults } from "./models/searchResults";

console.log("[BOOT] app.ts startad");

const app = express();
app.use(cors());


app.get("/search/:term", (req, res) => {
  const term = req.params.term.toLowerCase();
  let charactersResults = searchResults.characters.filter((c) => (
    c.label.toLowerCase().includes(term)
  ),
  )
  let seasonResults = searchResults.seasons.filter((s) => (
    s.label.toLowerCase().includes(term)
    ),
  )

  let albumResults = searchResults.albums.filter((a) => (
    a.label.toLowerCase().includes(term)
    )
  )
  res.json(charactersResults);
  res.json(seasonResults);
  res.json(albumResults);
}
);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`[BOOT] TS-server lyssnar på http://localhost:${PORT}`);
});
