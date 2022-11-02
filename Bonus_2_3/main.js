const liste = [];
const hinzufuegen = document.querySelector("#hinzufuegen");
const entfernen = document.querySelector("#entfernen");
const theUl = document.querySelector("ul");

hinzufuegen.addEventListener("click", (event) => {
    event.preventDefault();
    const input = document.querySelector("#eingabe").value;
    //======= Eingabe in Array speichern ========
    //Input ins Array packen
    liste.push(input);
    //Array zu einem String
    const arrayToString = liste.toString();
    //String in HTML schreiben
    theUl.innerHTML = arrayToString;
})

entfernen.addEventListener("click", (event) => {
    event.preventDefault();
    const input = document.querySelector("#eingabe").value;
    //======= Eingabe in Array speichern ========
    //Input ins Array packen
    liste.pop(input);
    //Array zu einem String
    const arrayToString = liste.toString();
    //String in HTML schreiben
    theUl.innerHTML = arrayToString;
})
