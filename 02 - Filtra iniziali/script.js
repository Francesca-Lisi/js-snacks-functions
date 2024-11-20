/* Scrivi una funzione che accetti un'array di stringhe e una lettera e 
restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

let newArray = [];
let letteraScelta = 'a';

// Dichiara la funzione qui.
function getArraySameFirstLetter(array, lettera) {
  for (let i = 0; i < array.length ; i++) {
    if (array[i].at(0) === lettera.toUpperCase()){
    newArray.push(array[i]);
    } 
    } return newArray
}

// Invoca la funzione qui e stampa il risultato in console

console.log(getArraySameFirstLetter(names, letteraScelta));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]