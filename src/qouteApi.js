const QouteBox =document.querySelector(".qoute");
const btn =document.getElementsByClassName("next");
function randomQuote(){
    fetch("http://api.quotable.io/random").then(response => response.json()).then(result => {
    QouteBox.innerText=result.content;
    console.log(result.content);
    });
}
 

randomQuote();