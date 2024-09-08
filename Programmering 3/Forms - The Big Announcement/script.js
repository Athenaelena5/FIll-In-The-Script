// Variable til 
const minForm = document.querySelector("form");
const p_output = document.getElementById("p_output");
const button = document.getElementById("send");

let besked = document.getElementById("besked");

button.onclick = visBesked;

function visBesked(){
    p_output.innerHTML = besked.value;
}