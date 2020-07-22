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
    window.location.href = "./searchResults.html";

  const options = { 
    method: 'POST',
    body: JSON.stringify(myString)
  };


//fetching the postrequest from server; the requestArray//
fetch('http://localhost:3000/queries', options)
.then(r => r.json())
.then(console.log)
.then(appendQueries()) //append the fetched values in the array/
.catch(console.warn)

// return myString;


};

function appendQueries(){
  const google = document.getElementById('google');
  google.innerHTML = returnArrays[0]
}




// const searchButton = document.getElementById('searchButton');
// const imFeelingLucky = document.getElementById('imFeelingLucky');
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
// imFeelingLucky.addEventListener("submit", function(e){
//   e.preventDefault()
//   //Takes you to first Search Result
// })
