const forecast = require("./utils/forecast");
const geocode = require("./utils/geocode");

const address = process.argv[2];

if (!address) {
  console.log("Please provide a location");
} else {
  geocode(address, (error, { latitude, longitude, location }) => {
    if (error) {
      return console.log(error);
    }
    forecast(latitude, longitude, (error, foreCastData) => {
      if (error) {
        return console.log(error);
      }
      console.log(`${location}`);
      console.log(`${foreCastData}`);
    });
  });
}
