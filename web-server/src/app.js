const path = require('path');
const express =  require('express');

const app = express();
// This lets you call the views folder whatever you want with handlebars
// I used templates so I pointed it towards the template directory
const viewsPath = path.join(__dirname, '../templates')
const publicDirectoryPath = path.join(__dirname, '../public')

// Setup handlebars engine and view location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
app.use(express.static(publicDirectoryPath))

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