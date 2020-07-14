const path = require('path');
const express =  require('express');

const app = express();

app.use(express.static(path.join(__dirname, '../public')))

app.use('/help', express.static(path.join(__dirname, '../public/help.html')))

app.use('/about', express.static(path.join(__dirname, '../public/about.html')))

app.get('/weather', (req, res) => {
    res.send([{ forcast: "Sunny" , location:'Minneapolis'}, {forcast: "Rainy" , location:'Portland'}, {forcast: "Sunny" , location:'Salt Lake City'}])
})

app.listen(3000, () => {
    console.log('Server is running')
})