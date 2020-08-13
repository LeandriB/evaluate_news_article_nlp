// Setup empty JS object to act as endpoint for all routes
let projectData = {};

//Dependencies
var path = require('path') // Change var to const?

// Used to keep API key private
const dotenv = require('dotenv');
dotenv.config();

// Require Express to run server and routes
const express = require('express');
// Start up and instance of an app
const app = express();
// Initialize the main project folder
app.use(express.static('dist'))

const mockAPIResponse = require('./mockAPI.js');

// Body Parser as middleware
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Require node-fetch
const fetch = require('node-fetch');

// Declare Meaningcloud API credentials
// 'https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&of=json&txt=${text}&lang=en'
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?key=';
const params = '&of=json&lang=en&url=';
const apiKey = process.env.API_KEY;

console.log(__dirname)


// Designates what port the app will listen to for incoming requests
const port = 8081;
// Callback to debug
app.listen(port, function () {
    console.log(`Evaluate News article app listening on port ${port}!`)
});

// GET Route
app.get('/', function (request, response) {
    response.sendFile('dist/index.html')
   // res.sendFile(path.resolve('src/client/views/index.html'))
})

// POST Route
app.post('/post', addData);

// POST Route adds data to projectData
async function addData(request, response) {
    // Retrieve URL
    // newData = request.body;
    projectData = request.body.url;
    console.log("User input: ", projectData);
    const getData = await fetch(baseURL+apiKey+params+projectData)
    .then( (getData) => getData.json())
    .then(data => {
        response.send(data)})
        .catch((error) => {
        console.log("Error: ", error);
    });
};
