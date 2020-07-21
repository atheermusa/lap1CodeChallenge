const searchButton = document.getElementById('searchButton');
const imFeelingLucky = document.getElementById('imFeelingLucky');



searchButton.addEventListener("submit", function(e){
  e.preventDefault()
  let inputVal = "";
  const tg = e.target;
  submit = tg.searchButton.value
  inputVal += submit
  // inputVal = e.target.getElementById("myInput").value
  console.log(inputVal)
  //Brings up search results
});

imFeelingLucky.addEventListener("submit", function(e){
  e.preventDefault()
  //Takes you to first Search Result
})
