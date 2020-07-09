const request = require('request');
require('dotenv').config();
const ACCESS_KEY = process.env.ACCESS_KEY

const url = `http://api.weatherstack.com/current?access_key=${ACCESS_KEY}&&query=37.8267,-122.4233&units=f`;

request({ url: url, json: true }, (err, res) => {
    console.log(`${res.body.current.weather_descriptions[0]}. It is currently ${res.body.current.temperature} degrees out. It feels like ${res.body.current.feelslike} out.`)
})

const url2 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?limit=1'

request({ url: url2, json: true}, (err, res) => {
    console.log(`The latitude is ${res.body.features[0].center[1]}. The longitude is ${res.body.features[0].center[0]}`)
})