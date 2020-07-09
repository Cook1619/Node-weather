const request = require('request');
require('dotenv').config();
const ACCESS_KEY = process.env.ACCESS_KEY

const url = `http://api.weatherstack.com/current?access_key=${ACCESS_KEY}&&query=37.8267,-122.4233`;

request({ url: url, json: true }, (err, res) => {
    console.log(`It is currently ${res.body.current.temperature} degrees out. It feels like ${res.body.current.feelslike} out.`)
})