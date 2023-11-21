import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json()); // Add this line to parse JSON in the request body

const journalEntries = [
  { id: 1, content: "Entry", date: new Date() },
];

app.get("/", (req, res) => {
  res.send("Hello, this is the root of the application!");
});

app.get("/api/log", (req, res) => {
  return res.status(200).json({ users: journalEntries });
});

app.post("/api/log", (req, res) => {
  const { content } = req.body;

  if (!content) {
    return res.status(400).json({ error: "Content required" });
  }

  const newEntry = {
    id: journalEntries.length + 1,
    content,
    date: new Date(),
  };
  journalEntries.push(newEntry);

  return res.status(201).json({ entry: newEntry });
});

const PORT = process.env.PORT || 5000;

app.listen(5000, () => {
  console.log("App listening on port 5000!");
});
