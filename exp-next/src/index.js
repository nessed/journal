
import express from "express";
import cors from "cors";
import nodemon from "nodemon";

const app = express();

app.use(cors());

const journalEntries = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
];

app.get("/", (req, res) => {
    res.send("Hello, this is the root of the application!");
});

app.get("/api/log", (req, res) => {
    return res.status(200).json({ users: journalEntries });
});

app.listen(5000, () => {
    console.log("App listening on port 5000!");
});
