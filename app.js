document.getElementById("header").innerHTML = 'this is a Weather App'


const axios = require('axios');

const getWeather = async () => {
    const response = await axios({
        url: 'https://api.darksky.net/forecast/678da8f7dbcf7a5d50a3533a310238d1/33.9526,-84.5499'
    })
    console.log(response.data.daily.data);
}

getWeather()

