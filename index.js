
let SearchText;
document.getElementById("SearchResultText").textContent = `No Reults Found For ""`; 
document.getElementById("SearchButton").onclick =  function(){
    SearchText = document.getElementById("Search").value;
    console.log(SearchText);
}
document.getElementById("SearchResultText").textContent = `No Reults Found For ""`;