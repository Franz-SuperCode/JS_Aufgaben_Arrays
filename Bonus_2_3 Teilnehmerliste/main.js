const liste = [];
// Alle Elemente holen
const hinzufuegen = document.querySelector("#hinzufuegen");
const entfernen = document.querySelector("#entfernen");
const olElement = document.querySelector("ol");

hinzufuegen.addEventListener("click", (event) => {
    event.preventDefault();
    const input = document.querySelector("#eingabe").value;
    //Wenn Input leer ist, nichts machen
    if (input === "") {
        return
    }
    //Input ins Array packen
    liste.push(input);
    //Listenelement erstellen und einfügen
    const li = document.createElement("li");
    olElement.appendChild(li);
    li.innerHTML = input;
    //Input vom <form> resetten
    document.querySelector("form").reset();
    console.log(liste);
})

entfernen.addEventListener("click", (event) => {
    event.preventDefault();
    //Aus Array entfernen
    liste.pop();
    //Aus HTML entfernen
    olElement.removeChild(olElement.lastChild);
    console.log(liste);
})
