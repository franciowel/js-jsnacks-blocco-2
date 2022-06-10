// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
// Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando
// la somma degli elementi è minore di 50.

// // START

// CREO UN ARRAY VUOTO
const userString = [];

let sumNum = 0;
// CHIEDO UN NUMERO ALL'UTENTE
while (sumNum < 50) {
    let userNumber = prompt('digita un numero');
    // CONVERTO I NUMERI PER PROCEDERE A SOMMA
    userNumber = parseInt(userNumber);
    // SOMMO
    sumNum += userNumber;
    // LO INSERISCO NELL'ARRAY
    userString.push(userNumber);
}

console.log(userString);


