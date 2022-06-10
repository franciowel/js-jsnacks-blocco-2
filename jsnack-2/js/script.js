// Calcola la somma e la media dei primi 10 numeri

// // START
let sumNum = 0
let averageNum = 0;

// mi ricavo i numeri da 0 a 10
for(i=1; i <= 10; i++) {

    // procedo con somma e do una variabile per calcolare la media
    sumNum += i;

    // calcolo la media
    averageNum = sumNum / 10;
}
// RISULTATO SOMMA
console.log(sumNum)

// RISULTATO MEDIA
console.log(averageNum)