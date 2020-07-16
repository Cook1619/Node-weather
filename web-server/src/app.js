const path = require("path");
const express = require("express");
const hbs = require("hbs");
const forecast = require("./utils/forecast");
const geocode = require("./utils/geocode");

const app = express();
// This lets you call the views folder whatever you want with handlebars
// I used templates so I pointed it towards the template directory
const viewsPath = path.join(__dirname, "../templates/views");
const publicDirectoryPath = path.join(__dirname, "../public");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup handlebars engine and view location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directories to serve
app.use(express.static(publicDirectoryPath));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "Matt Cook",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About me",
    name: "Matt Cook",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    helpText: "Visit this page when you need help",
    title: "Help",
    name: "Matt Cook",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "You must provide an address",
    });
  }
  geocode(req.query.address, (error, { latitude, longitude, location }) => {
    if (error) {
      return res.send({ error });
    }
    forecast(latitude, longitude, (error, foreCastData) => {
      if (error) {
        return res.send({ error });
      }
      res.send({
        forecast: foreCastData,
        location,
        address: req.query.address,
      });
    });
  });
});

app.get("/products", (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: "You must provide a search term",
    });
  }
  res.send({
    products: [],
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404 Help",
    name: "Matt Cook",
    errorMessage: "Help article not found",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Matt Cook",
    errorMessage: "Page not found",
  });
});

app.listen(3000, () => {
  console.log("Server is running");
});
