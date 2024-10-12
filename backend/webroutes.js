const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
// Home
app.get("/", (req, res) => {
  console.log("Home page");
  res.json({
    message: "Welcome to the home page",
  });
});

// Glimpse
app.get("/glimpse", (req, res) => {
  res.json({
    message: "Welcome to the glimpse page",
  });
});

// Highlights
app.get("/highlights", (req, res) => {
  res.json({
    message: "Welcome to the highlights page",
  });
});

// The Company
app.get("/the_company", (req, res) => {
  res.json({
    message: "Welcome to the Company page",
  });
});

// Our Services
app.get("/our_services", (req, res) => {
  res.json({
    message: "Welcome to our services page",
  });
});

// Works

app.get("/works", (req, res) => {
  res.json({
    message: "Welcome to Works page",
  });
});

// Our Clients
app.get("/our_clients", (req, res) => {
  res.json({
    message: "Welcome to our clients page",
  });
});

// Contacts
app.get("/contacts", (req, res) => {
  res.json({
    message: "Welcome to contacts page",
  });
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000 - http://localhost:3000");
});
