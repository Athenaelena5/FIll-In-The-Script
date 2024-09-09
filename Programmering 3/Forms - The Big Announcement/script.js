// VARIABLE:
// - Til <p> så vi kan putte HTML ind i den. Kald den 'p_output'.
const p_output = document. getElementById("p_output");

// - Til knappen, så vi kan gøre den trykbar.

const btn_send = document.getElementById("send");

// - Til inputfeltet, så vi kan hente indholdet af den.
const input_besked = document.getElementById("besked");
// EVENT LISTENER:
// Knappen skal have en onclick event listener og kalde funktionen "visBesked"

btn_send.onclick = visbesked;

// FUNCTIONS / EVENT HANDLERS:
function visbesked(){
p_output.innerHTML = input_besked.value;
}

// Opret funktionen visBesked, der putter indholdet af inputfeltet ind i <p>
// Du kan bruge denne kode:     
//      p_output.innerHTML = besked.value;