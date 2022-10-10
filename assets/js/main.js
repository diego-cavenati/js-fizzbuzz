//  Scrivi un programma che stampi in console i numeri da 1 a 100
const rowElement = document.querySelector(".row");

for (let i = 1; i <= 100; i++) {
    
    // prendo rowElement e gli aggiungo il numero all'interno di un DIV
    rowElement.innerHTML += `<div class="col square"> ${i} </div>`;

};


// Per i multipli di 3 stampi “Fizz” al posto del numero

// Per i multipli di 5 stampi “Buzz”

// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”
