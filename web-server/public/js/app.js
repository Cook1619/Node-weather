
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.getElementById('message-one')
const messageTwo = document.getElementById('message-two')
const weatherCard = document.getElementsByClassName('static-card')[0]

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

fetch(`http://localhost:3000/weather/portland`)
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

fetch(`http://localhost:3000/weather/minneapolis`)
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

fetch(`http://localhost:3000/weather/newyork`)
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