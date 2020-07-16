
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    fetch(`http://localhost:3000/weather?address=${search.value}`)
    .then((res) => {
        res.json()
        .then((data) => {
            if (data.error){
                console.log(data.error)
            }else {
                console.log(data.location)
                console.log(data.forecast)
            }
        })
    })
    setTimeout(() => {
        search.value = '';
    }, 500)
})