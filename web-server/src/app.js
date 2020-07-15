const path = require('path');
const express =  require('express');

const app = express();

app.set('view engine', 'hbs')
app.use(express.static(path.join(__dirname, '../public')))

app.get('/', (req,res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Matt Cook'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Matt Cook'
    })
})

app.get('/help', (req,res) => {
    res.render('help', {
        helpText: 'Visit this page when you need help'
    })
})

app.get('/weather', (req, res) => {
    res.send([{ forcast: "Sunny" , location:'Minneapolis'}, {forcast: "Rainy" , location:'Portland'}, {forcast: "Sunny" , location:'Salt Lake City'}])
})

app.listen(3000, () => {
    console.log('Server is running')
})