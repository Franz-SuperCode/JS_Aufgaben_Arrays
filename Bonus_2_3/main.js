const liste = [];
const hinzufuegen = document.querySelector("#hinzufuegen");
const entfernen = document.querySelector("#entfernen");
const theOl = document.querySelector("ol");

hinzufuegen.addEventListener("click", (event) => {
    event.preventDefault();
    const input = document.querySelector("#eingabe").value;
    //Input ins Array packen
    liste.push(input);
    //Gelöst ohne Array zu benutzen
    const li = document.createElement("li");
    theOl.appendChild(li);
    li.innerHTML = input;
    console.log(liste);
})

entfernen.addEventListener("click", (event) => {
    event.preventDefault();
    //Aus Array entfernen
    liste.pop();
    //Gelöst ohne Array zu benutzen

    //Aus HTML entfernen
    theOl.removeChild(theOl.lastChild);
    console.log(liste);
})
