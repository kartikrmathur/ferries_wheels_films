import express, { json } from "express";
const app = express();
app.use(json());
// Home
app.get("/home", (req, res) => {
  console.log("Home page");
  res.json({ message: "Welcome to the home page" });
});

// Glimpse
app.get("/glimpse", (req, res) => {
  res.json({ message: "Welcome to the glimpse page" });
});
// Highlights
// The Company
// Our Services
// Works
// Our Clients
// Contacts

app.listen(3000, () => {
  console.log("Server is running on port 3000 - https://localHost:3000");
});
