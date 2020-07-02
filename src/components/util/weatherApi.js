require("dotenv").config();

const axios = require('axios');

const getWeather = (lat, long) => {
        return axios.get(`http://shaundays-node.herokuapp.com/weather/${lat},${long}`)
}

export default getWeather;