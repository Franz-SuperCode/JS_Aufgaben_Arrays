const liste = [];
const hinzufuegen = document.querySelector("#hinzufuegen");
const entfernen = document.querySelector("#entfernen");
const theUl = document.querySelector("ul");

hinzufuegen.addEventListener("click", (event) => {
    event.preventDefault();
    const input = document.querySelector("#eingabe").value;
    //Input ins Array packen
    liste.push(input);
    //Gelöst ohne Array zu benutzen
    const li = document.createElement("li");
    theUl.appendChild(li);
    li.innerHTML = input;
    ;

})

entfernen.addEventListener("click", (event) => {
    event.preventDefault();
    const input = document.querySelector("#eingabe").value;
    //Input aus Array packen
    liste.pop(input);
    //Gelöst ohne Array zu benutzen
    const li = document.createElement("li");
    theUl.removeChild(theUl.lastChild);
    ;
})
