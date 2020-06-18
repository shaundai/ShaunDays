const axios = require('axios');

const getWeather = async () => {
    const response = await axios({
        url: 'https://api.darksky.net/forecast/678da8f7dbcf7a5d50a3533a310238d1/33.9526,-84.5499'
    }).then(response => {
        console.log(response)
    })
    .catch(err => {
        console.log(err);
    });
}
getWeather()
//const displayWeather = (data) => {
//   return data.map(newData => `<li>${data}</li>`)
//}

//export default getWeather;

//document.getElementById('header').innerHTML = getWeather
//(async () => {
  // console.log(await getWeather())
//})()