
const SearchText = document.getElementById("Search") ;
const searchbutton = document.getElementById("SearchButton") ;
searchbutton.addEventListener("click",function(){
    console.log(SearchText.value) ;
    document.getElementById("SearchResultText").textContent = SearchText.value ;
})
SearchText.addEventListener("keyup", (e) => {
    if (e === 13) {
        document.getElementById("SearchResultText").textContent = SearchText.value ;
    }
})


