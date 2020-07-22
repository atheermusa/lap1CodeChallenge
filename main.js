const form = document.querySelector('#form');
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

  const bing = document.getElementById('bing')
  bing.setAttribute("href", returnArrays[0].searchURLs[1]+ myString);
  bing.textContent = (myString + " - Bing search");

  const duckduckGo = document.getElementById('duckduckGo')
  duckduckGo.setAttribute("href", returnArrays[0].searchURLs[2]+ myString);
  duckduckGo.textContent = (myString + " - duckduckGo search");


  const dogPile = document.getElementById('dogPile')
  dogPile.setAttribute("href", returnArrays[0].searchURLs[3]+ myString);
  dogPile.textContent = (myString + " - dogPile search");

  const yahoo = document.getElementById('yahoo')
  yahoo.setAttribute("href", returnArrays[0].searchURLs[4]+ myString);
  yahoo.textContent = (myString + " - yahoo search");

  const yippy = document.getElementById('yippy')
  yippy.setAttribute("href", returnArrays[0].searchURLs[5]+ myString);
  yippy.textContent = (myString + " - yippy search");

  const youtube = document.getElementById('youtube')
  youtube.setAttribute("href", returnArrays[0].searchURLs[6]+ myString);
  youtube.textContent = (myString + " - youtube search");

  const googleMaps = document.getElementById('googleMaps')
  googleMaps.setAttribute("href", returnArrays[0].searchURLs[0]+ myString);
  googleMaps.textContent = (myString + " - google Maps search");

  const amazon = document.getElementById('amazon')
  amazon.setAttribute("href", returnArrays[0].searchURLs[7]+ myString);
  amazon.textContent = (myString + " - amazon search");

  const reddit = document.getElementById('reddit')
  reddit.setAttribute("href", returnArrays[0].searchURLs[8]+ myString);
  reddit.textContent = (myString + " - reddit search");
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
