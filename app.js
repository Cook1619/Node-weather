const forecast = require("./utils/forecast");
const geocode = require("./utils/geocode");

const address = process.argv[2];

if (!address) {
  console.log("Please provide a location");
} else {
  geocode(address, (error, data) => {
    if (error) {
      return console.log(error);
    }
    forecast(data.latitude, data.longitude, (error, foreCastData) => {
      if (error) {
        return console.log(error);
      }
      console.log(`${data.location}`);
      console.log(`${foreCastData}`);
    });
  });
}
