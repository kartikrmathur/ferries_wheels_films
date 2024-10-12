const express = require("express")
const cors = require("cors")
const app = express();

app.use(express.json());
app.use(cors())
// Home
app.get("/", (req, res) => {
  console.log("Home page");
  res.json({ 
    message: "Welcome to the home page" 
  });
});

// Glimpse
app.get("/glimpse", (req, res) => {
  res.json({
    message: "Welcome to the glimpse page" 
  });
});

// Highlights

// The Company

// Our Services

// Works

// Our Clients

// Contacts

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000 - http://localhost:3000");
});
