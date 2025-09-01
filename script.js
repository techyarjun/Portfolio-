const express = require("express");
const app = express();
const path = require("path");

// serve static files (css, js, images)
app.use(express.static(__dirname));

// Home page
app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Route for Services
app.get("/service", (req, res) => {
  res.sendFile(path.join(__dirname, "Head", "service.html"));
});

// Route for Skills
app.get("/skill", (req, res) => {
  res.sendFile(path.join(__dirname, "Head", "skill.html"));
});

// Route for Education
app.get("/edu", (req, res) => {
  res.sendFile(path.join(__dirname, "Head", "edu.html"));
});

// Route for Experience
app.get("/exp", (req, res) => {
  res.sendFile(path.join(__dirname, "Head", "exp.html"));
});

// Route for Contact
app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "Head", "contact.html"));
});

app.listen(8080, () => {
  console.log("Server running on http://localhost:8080");
});
