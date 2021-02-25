var cognomi = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];

console.log(cognomi);

var cognomeUtente = prompt('Qual è il tuo cognome?');
cognomeUtente = (cognomeUtente.charAt(0).toUpperCase() + cognomeUtente.slice(1).toLowerCase());
cognomi.push(cognomeUtente);

// console.log(cognomi);

// cognomi.sort();
// console.log(cognomi);

var cognomiSorted = cognomi;
cognomiSorted.sort();
console.log(cognomiSorted);

// var posizioneUmana;

// for (var i=0; i < cognomiSorted.length; i++) {
//     if (cognomeUtente == cognomiSorted[i]) {
//         console.log('Posizione umana: ' + ++i);
//     } 
// };

// console.log(cognomiSorted.indexOf(cognomeUtente) + 1);
