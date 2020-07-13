const forecast = require('./utils/forecast')
const geocode = require("./utils/geocode");

forecast(-75.7088, 44.1545, (error, data) => {
  console.log("error", error);
  console.log("data", data);
});

geocode("Minneapolis", (error, data) => {
  console.log("error", error);
  console.log("data", data);
});
