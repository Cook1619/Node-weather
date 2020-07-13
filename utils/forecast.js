const request = require('request');
require("dotenv").config();

const foreCast = (lat, long, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=${process.env.ACCESS_KEY}&&query=${lat, long}&units=f`;
    request({ url: url, json: true }, (err, res) => {
        if (err) {
            callback('Unable to connect to weather service')
        } else if (res.body.error){
            callback('Unable to find location')
        } else {
            callback(undefined, `${res.body.current.weather_descriptions[0]}. It is currently ${res.body.current.temperature} degrees out. It feels like ${res.body.current.feelslike} out.`)
        }
    })
}

module.exports = foreCast;
