require("dotenv").config();

const axios = require('axios');
const googleApiKey = process.env.GOOGLE_MAPS_API_KEY;
const city = 'Marietta';
const state = 'GA';

const getLatLong = () => {
        return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${city}+${state}=${googleApiKey}`)
}

export default getLatLong;