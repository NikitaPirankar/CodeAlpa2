//SELECTOR
const body = document.querySelector("body");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");

//FUNCTIONS
function gradiantChange(){
    body.style.background = `linear-gradient(to right , ${color1.value},${color2.value})`
} 
 //ADD EVENT LISTENER
 color1.addEventListener("input" , gradiantChange);
 color2.addEventListener("input" , gradiantChange);