const request = require('request');
require("dotenv").config();

const foreCast = (lat, long, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=${process.env.ACCESS_KEY}&&query=${lat, long}&units=f`;
    request({ url, json: true }, (err, {  body }) => {
        if (err) {
            callback('Unable to connect to weather service')
        } else if (body.error){
            callback('Unable to find location')
        } else {
            callback(undefined, `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} out.`)
        }
    })
}

module.exports = foreCast;
