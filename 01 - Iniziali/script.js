/* Scrivi una funzione che accetti un array di nomi e 
restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

let newArray = []

// Dichiara la funzione qui.
function getFirstLetter (array){
  for (let i = 0; i < array.length ; i++) {
  newArray[i] = names[i].slice(0,1)
  } return newArray
}


// Invoca la funzione qui e stampa il risultato in console

console.log(getFirstLetter(names))

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]