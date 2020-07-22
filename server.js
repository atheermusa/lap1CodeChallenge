const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { response } = require('express');

const server = express();
server.use(cors());
server.use(bodyParser.text());

const port = 3000;


let searchTerm = "banana pudding";
let urlAppendix = searchTerm.replace(/\s/g,'+');
let returnArrays = [];
console.log(searchTerm);
console.log(urlAppendix);
const searchURLs = ["http://Google.co.uk/search?q=",
"https://www.bing.com/search?q=",
"https://duckduckgo.com/?q=",
"https://www.dogpile.com/serp?q=",
"https://uk.search.yahoo.com/search?p=",
"https://www.yippy.com/search?query=",
"https://www.youtube.com/results?search_query=",
"https://www.google.co.uk/maps/search/",
"https://www.amazon.co.uk/s?k=",
"https://www.reddit.com/search/?q="]
searchURLs.forEach(url => returnArrays.push(`${url}${urlAppendix}`));






//routes//
server.get('/queries', (req, res) => res.send(JSON.stringify(searchURLs)))

//add in console to view our queries:
// fetch('http://localhost:3000/queries').then(r => r.json()).then(console.log)

//post request/ post request of returnArray array to main.js//
server.post('/queries', (req, res) => res.send({searchURLs}))

//test the post request in browser console//
// fetch('http://localhost:3000/queries', {method: 'POST'}).then(r => r.json()).then(console.log)

//listen//
server.listen(port, () => console.log(`Search engine on http://localhost:${port}`))




