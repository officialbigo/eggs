const express = require("express");

// Create an Express application
const app = express();
// Define a simple route
app.get("/api/first", (req, res) => {
  res.send("first");
});
app.get("/api/second", (req, res) => {
  res.send("second");
});
app.get("/api/third", (req, res) => {
  res.send("third");
});

// Set the port for the server to listen on
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
