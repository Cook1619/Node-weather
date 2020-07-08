const request = require('request');
const { accessKey } = require('./config.js')
console.log(accessKey)

const url = 'http://api.weatherstack.com/current?access_key=&&query=37.8267,-122.4233';

request({ url: url, json: true }, (err, res) => {
    console.log(res.body.current)
})