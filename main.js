const form = document.querySelector('#form');
form.addEventListener('submit', returnText);

let myString = "";
function returnText(e) {

  e.preventDefault();


    const tg = e.target;
    text = tg.searchBar.value;
    myString += text

    console.log(myString)
    return myString
};






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
