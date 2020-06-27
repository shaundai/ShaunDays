import { googleMapsApiKey } from './googleMapsApiKey'

require("dotenv").config();

const axios = require('axios');
console.log(googleMapsApiKey)

const getGeoData = (city, state) => {
        return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${city}+${state}&key=${googleMapsApiKey}`)
}

export default getGeoData;
