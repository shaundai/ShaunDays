require("dotenv").config();

const axios = require('axios');
const apiKey = process.env.API_KEY;

const getWeather = () => {
        return axios.get(`https://api.darksky.net/forecast/${apiKey}/33.9526,-84.5499`)
    }

export default getWeather;