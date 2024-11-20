/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';

const vocali = ['a', 'e', 'i', 'o', 'u']

let newArray = []

// Dichiara la funzione qui.
function checkVocali(parola) {
  let arrayParola = parola.split('');
  for (let i = 0; i < parola.length; i++){
    if (arrayParola[i] === vocali[0] ||
        arrayParola[i] === vocali[1] ||
        arrayParola[i] === vocali[2] ||
        arrayParola[i] === vocali[3] ||
        arrayParola[i] === vocali[4])
    newArray.push(arrayParola[i])
  }
  return `'${word}': ${newArray.length} (${newArray.join(', ')})`
}

// Invoca la funzione qui e stampa il risultato in console

console.log(checkVocali(word))

//Risultato atteso se si passa 'javascript': 3 (a, a, i)