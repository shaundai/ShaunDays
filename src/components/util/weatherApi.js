require("dotenv").config();

const axios = require('axios');

const getWeather = (lat, long) => {
        return axios.get(`http://wednesday-tesla.herokuapp.com/api/weather/${lat},${long}`)
}

export default getWeather;