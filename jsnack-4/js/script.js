// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.

// // START

// CREO DUE ARRAY
const myString = [0, 1, 24, 54, 15, 36, 72];
const autoString = [5, 7, 24];

let i = 0;

do {
    // creo una variabile che mi generi elemnti casuali
    let randNumb = Math.floor(Math.random() * 100);
    // li aggiungo alla stringa
    autoString.push(randNumb);
    i++;
    // finchè il numero di lementi è lo stesso
} while(autoString.length < myString.length)

// MOSTRO RISULTATO
console.log('stinga data da me' + ' ' + myString)
console.log('stringa riempita in automatico' + ' ' + autoString)
