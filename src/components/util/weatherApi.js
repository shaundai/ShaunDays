require("dotenv").config();

const axios = require('axios');

const getWeather = (lat, long) => {
        return axios.get(`http://localhost:4000/weather/${lat},${long}`)
}

export default getWeather;