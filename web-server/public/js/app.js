
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.getElementById('message-one')
const messageTwo = document.getElementById('message-two')
const weatherCard = document.getElementsByClassName('static-card')[0]

const newYorkCard = document.getElementById('new-york')
const newYorkCard1 = document.getElementById('new-york1')
const newYorkCard2 = document.getElementById('new-york2')
const newYorkCard3 = document.getElementById('new-york3')
const newYorkCard4 = document.getElementById('new-york4')
const newYorkCard5 = document.getElementById('new-york5')
weatherCard.style.visibility = "hidden"

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    fetch(`http://localhost:3000/weather?address=${search.value}`)
    .then((res) => {
        res.json()
        .then((data) => {
            if (data.error){
                weatherCard.style.visibility = "visible"
                messageOne.textContent = data.error
                search.value = '';
            }else {
                weatherCard.style.visibility = "visible"
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
                document.getElementById('weatherIcon').src = data.img.img
                search.value = '';
            }
        })
    })
})

// fetch(`http://localhost:3000/weather/portland`)
// .then((res) => {
//     res.json()
//     .then((data) => {
//         if (data.error){
//             messageOne.textContent = data.error
//             search.value = '';
//         }else {
            
//         }
//     })
// })

// fetch(`http://localhost:3000/weather/minneapolis`)
// .then((res) => {
//     res.json()
//     .then((data) => {
//         if (data.error){
//             messageOne.textContent = data.error
//             search.value = '';
//         }else {
            
//         }
//     })
// })

fetch(`http://localhost:3000/weather/newyork`)
.then((res) => {
    res.json()
    .then((data) => {
        console.log(data)
        const { uv_index, feelslike, humidity, state, temperature, weather_icon, wind_speed } = data.foreCastData
        if (data.error){
            newYorkCard.textContent = data.error
            search.value = '';
        }else {
            document.getElementById('new-york-img').src = weather_icon
            newYorkCard.textContent = `State: ${state}`
            newYorkCard1.textContent = `Temp: ${temperature}`
            newYorkCard2.textContent = `Feels like: ${feelslike}`
            newYorkCard3.textContent = `Humidity: ${humidity}`
            newYorkCard4.textContent = `UV Index: ${uv_index}`
            newYorkCard5.textContent = `Wind Speed: ${wind_speed}`
        }
    })
})