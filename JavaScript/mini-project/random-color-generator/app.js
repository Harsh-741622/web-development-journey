
function valueGenerator() {
    let num = Math.floor(Math.random()*256) ; 
    return num ; 
} ; 
let color = function generateColor() {
    let r = valueGenerator() ; 
    let g = valueGenerator() ; 
    let b = valueGenerator() ; 
    console.log(`${r},${g},${b}`) ;
    return `rgb(${r},${g},${b})` ; 
}

let btn = document.querySelector("button") ; 
btn.addEventListener("click", function () {
    let randomColor = color() ; 
    btn.nextElementSibling.style.backgroundColor = randomColor ; 
    btn.previousElementSibling.innerHTML = randomColor;
    let div = document.querySelector("div") ; 
    div.style.color = "white" ; 
}) ; 
