const express =  require('express');
const app = express();

app.get('/', (req,res) => {
    res.send('<h1>Hello Express</h1>')
})

app.get('/help', (req,res) => {
    res.send([{ name: 'Matt', age: 33}, { name: 'Danelle', age: 35}])
})

app.get('/about', (req, res) => {
    res.send('<h1>The about page!!</h1>')
})

app.get('/weather', (req, res) => {
    res.send([{ forcast: "Sunny" , location:'Minneapolis'}, {forcast: "Rainy" , location:'Portland'}, {forcast: "Sunny" , location:'Salt Lake City'}])
})

app.listen(3000, () => {
    console.log('Server is running')
})