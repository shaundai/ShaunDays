getWeather = async () => {
    try {
        const response = await axios.get('https://api.darksky.net/forecast/678da8f7dbcf7a5d50a3533a310238d1/33.9526,84.5499')
        .then(console.log(`SUCCESS: ${response}`))
    } catch (err) {
        console.log(`didn't work because ${err}`);
    }
}

