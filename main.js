form = document.querySelector('#form');
form.addEventListener('submit', returnText);


let returnArrays = [];
let myString = "";
function returnText(e) {
  e.preventDefault();
  const tg = e.target;
  text = tg.searchBar.value;
  myString += text

  console.log(myString);
  // window.location.href = "./searchResults.html";

    const options = {
      method: 'POST',
      body: JSON.stringify(myString)
    };

//fetching the postrequest from server; the requestArray//
fetch('http://localhost:3000/queries', options)
.then(r => r.json())
.then(data => returnArrays.push(data))
.then(appendQueries)
.catch(console.warn)
};



function appendQueries() {
  const google = document.getElementById('google')
  google.setAttribute("href", returnArrays[0].searchURLs[0]+ myString);
  google.textContent = (`${myString} -  Google search`);
  const googleDescription = document.getElementById('googleDescription');
  googleDescription.textContent = (`This is a google page dedicated to showing you everthing it can about ${myString}. Click the link above to see what they've got!`);

  const bing = document.getElementById('bing')
  bing.setAttribute("href", returnArrays[0].searchURLs[1]+ myString);
  bing.textContent = (myString + " - Bing search");
  const bingDescription = document.getElementById('bingDescription');
  bingDescription.textContent = (`This is a bing page dedicated to showing you everthing it can about ${myString}. Click the link above to see what they've got!`);


  const duckduckGo = document.getElementById('duckduckGo')
  duckduckGo.setAttribute("href", returnArrays[0].searchURLs[2]+ myString);
  duckduckGo.textContent = (myString + " - duckduckGo search");
  const duckduckGoDescription = document.getElementById('duckduckGoDescription');
  duckduckGoDescription.textContent = (`This is a duck duck go page dedicated to showing you everthing it can about ${myString}. Click the link above to see what they've got!`);

  const dogPile = document.getElementById('dogPile')
  dogPile.setAttribute("href", returnArrays[0].searchURLs[3]+ myString);
  dogPile.textContent = (myString + " - dogPile search");
  const dogPileDescription = document.getElementById('dogPileDescription');
  dogPileDescription.textContent = (`This is a dog pile page dedicated to showing you everthing it can about ${myString}. Click the link above to see what they've got!`);

  const yahoo = document.getElementById('yahoo')
  yahoo.setAttribute("href", returnArrays[0].searchURLs[4]+ myString);
  yahoo.textContent = (myString + " - yahoo search");
  const yahooDescription = document.getElementById('yahooDescription');
  yahooDescription.textContent = (`This is a yahoo page dedicated to showing you everthing it can about ${myString}. Click the link above to see what they've got!`);


  const yippy = document.getElementById('yippy')
  yippy.setAttribute("href", returnArrays[0].searchURLs[5]+ myString);
  yippy.textContent = (myString + " - yippy search");
  const yippyDescription = document.getElementById('yippyDescription');
  yippyDescription.textContent = (`This is a yippy page dedicated to showing you everthing it can about ${myString}. Click the link above to see what they've got!`);


  const youtube = document.getElementById('youtube')
  youtube.setAttribute("href", returnArrays[0].searchURLs[6]+ myString);
  youtube.textContent = (myString + " - youtube search");
  const youtubeDescription = document.getElementById('youtubeDescription');
  youtubeDescription.textContent = (`This is a youtube page dedicated to showing you everthing it can about ${myString}. Click the link above to see what they've got!`);


  const googleMaps = document.getElementById('googleMaps')
  googleMaps.setAttribute("href", returnArrays[0].searchURLs[0]+ myString);
  googleMaps.textContent = (myString + " - google Maps search");
  const googleMapsDescription = document.getElementById('googleMapsDescription');
  googleMapsDescription.textContent = (`This is a google maps page dedicated to showing you everthing it can about ${myString}. Click the link above to see what they've got!`);


  const amazon = document.getElementById('amazon')
  amazon.setAttribute("href", returnArrays[0].searchURLs[7]+ myString);
  amazon.textContent = (myString + " - amazon search");
  const amazonDescription = document.getElementById('amazonDescription');
  amazonDescription.textContent = (`This is a amazon page dedicated to showing you everthing it can about ${myString}. Click the link above to see what they've got!`);


  const reddit = document.getElementById('reddit')
  reddit.setAttribute("href", returnArrays[0].searchURLs[8]+ myString);
  reddit.textContent = (myString + " - reddit search");
  const redditDescription = document.getElementById('redditDescription');
  redditDescription.textContent = (`This is a reddit page dedicated to showing you everthing it can about ${myString}. Click the link above to see what they've got!`);

  
}


const searchButton = document.getElementById('searchButton');
const imFeelingLucky = document.getElementById('imFeelingLucky');
//
// let inputVal = document.getElementById("searchBar").value;
//
// form.addEventListener("submit", function(e){
//   e.preventDefault()
  // const tg = e.target;
  // submit = tg.searchButton.value
  // inputVal += submit
  // alert(inputVal)
  //Brings up search results
// });
//
imFeelingLucky.addEventListener("click", function(e){
  e.preventDefault()
  window.location.href = returnArrays[0].searchURLs[0]+ myString;
  //Takes you to first Search Result
})
