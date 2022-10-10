//  Scrivi un programma che stampi in console i numeri da 1 a 100
// const rowElement = document.querySelector(".row");

// for (let i = 1; i <= 100; i++) {

//     // prendo rowElement e gli aggiungo o il numero o fizz o buzz o fizzbuzz all'interno di un DIV con classe univoca square + classe personale nel caso di fixx, buzz e fizzbuzz
    
//     if (i % 3 == 0 && i % 5 == 0) { // Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”
    
//     rowElement.innerHTML += `<div class="col square fizzbuzz"> FizzBuzz </div>`;

//     } else if (i % 3 == 0) { // Per i multipli di 3 stampi “Fizz” al posto del numero

//         rowElement.innerHTML += `<div class="col square fizz"> Fizz </div>`;

//     } else if (i % 5 == 0) { // Per i multipli di 5 stampi “Buzz”

//         rowElement.innerHTML += `<div class="col square buzz"> Buzz </div>`;

//     } else {

//         rowElement.innerHTML += `<div class="col square"> ${i} </div>`;
//     }   

// };


// method 2 -- BONUS
// dichiaro row 
const rowElement = document.querySelector(".row");

for (let i = 1; i <= 100; i++) {

    // dichiaro div e gli aggiungo la sclasse square
    let div = document.createElement("div");
    div.classList.add("square");

    // prendo rowElement e gli aggiungo o il numero o fizz o buzz o fizzbuzz all'interno di un DIV con classe univoca square + classe personale nel caso di fixx, buzz e fizzbuzz
    
    if (i % 3 == 0 && i % 5 == 0) { // Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”
        div.append("FizzBuzz");
        div.classList.add("fizzbuzz");
        rowElement.append(div);

    } else if (i % 3 == 0) { // Per i multipli di 3 stampi “Fizz” al posto del numero
        div.append("Fizz");
        div.classList.add("fizz");
        rowElement.append(div);

    } else if (i % 5 == 0) { // Per i multipli di 5 stampi “Buzz”

        div.append("Buzz");
        div.classList.add("buzz");
        rowElement.append(div);

    } else {

        div.append(i);
        rowElement.append(div);

    }   

};
