const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const server = express();
server.use(cors());
server.use(bodyParser.text());

const port = 3000;



//resources//
const queries = [{
    name: "Google",
    url: "Google.co.uk/search?q=",
    description: "a"
}, 
{
    name: "Bing",
    url: "https://www.bing.com/search?q=",
    description: "a"
},
{
    name:"duckduckgo",
    url:"https://duckduckgo.com/search?q=",
    description: "a"
},
{
    name:"dogpile",
    url:"https://www.dogpile.com/serp?q=",
    description: "a"
}
]

//routes//
server.get('/queries', (req, res) => res.send(JSON.stringify(queries)))

//listen//
server.listen(port, () => console.log(`Search engine on http://localhost:${port}`))
