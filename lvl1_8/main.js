const deutscheGerichte = ["Speckkuchen", "Thüringer Rostbratwurst", "Quarkkeulchen", "Sauerbraten"];
console.log(deutscheGerichte);

deutscheGerichte.unshift("Pommes", "Döner", "Nudeln")
console.log(deutscheGerichte);

//Entfernt ab der Stelle 0 zwei Elemente und speichert sie
const nichtGut = deutscheGerichte.splice(0, 2);
console.log(nichtGut);

