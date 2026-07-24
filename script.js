function appendValue(value){
document.getElementById("display").value += value;
}

function clearDisplay(){
document.getElementById("display").value = "";
}

function calculate(){
let result = eval(document.getElementById("display").value);
document.getElementById("display").value = result;
function playSound(){
document.getElementById("clickSound").play();
}

function appendValue(value){
playSound();
document.getElementById("display").value += value;
}

function clearDisplay(){
playSound();
document.getElementById("display").value = "";
}
document.addEventListener("keydown", function(event){

let key = event.key;

if(!isNaN(key) || key === "+" || key === "-" || key === "*" || key === "/"){
document.getElementById("display").value += key;
}

if(key === "Enter"){
calculate();
}

if(key === "Backspace"){
document.getElementById("display").value =
document.getElementById("display").value.slice(0,-1);
}

});
}