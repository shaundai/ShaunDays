import axios from 'axios';

const http = require('http');
const axios = require('axios').default;

// Create an instance of the http server to handle HTTP requests
let app = http.createServer((req, res) => {
    // Set a response type of plain text for the response
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // Send back a response and end the connection
    res.end('Hello World!\n');
});

// Start the server on port 3000
app.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');



const getWeather = async () => {
    try {
        const response = await axios.get('https://api.darksky.net/forecast/678da8f7dbcf7a5d50a3533a310238d1/33.9526,84.5499')
        .then(console.log(`SUCCESS: ${response}`))
    } catch (err) {
        console.log(err);
    }
}