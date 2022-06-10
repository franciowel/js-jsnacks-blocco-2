// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.

//   // // START
   let sumNumb = 0;

//   // PER 5 VOLTE
//   for(let i=0; i < 5; i++) {
//       // chiedo un numero all'utente
//       let userNumber = prompt('dimmi un numero');
//       // converto in linguaggio macchina
//       userNumber = parseInt(userNumber);
//       // procedo con somma
//       sumNumb += userNumber;
//   }

//   // MOSTRO IL RISULTATO
//   console.log(sumNumb)

// START BUT USO WHILE

let i = 0;

while(i < 5) {
    // chiedo un numero all'utente
   let userNumber = prompt('dimmi un numero');
   // converto in linguaggio macchina
   userNumber = parseInt(userNumber);
   // procedo con somma
   sumNumb += userNumber;
    i++;
}
// MOSTRO IL RISULTATO
console.log(sumNumb)

