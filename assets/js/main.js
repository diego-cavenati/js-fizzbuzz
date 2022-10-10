//Scrivi un programma che stampi in console i numeri da 1 a 100
const rowElement = document.querySelector(".row");

for (let i = 1; i <= 100; i++) {

    // prendo rowElement e gli aggiungo o il numero o fizz o buzz o fizzbuzz all'interno di un DIV con classe univoca square + classe personale nel caso di fixx, buzz e fizzbuzz
    
    if (i % 3 == 0 && i % 5 == 0) { // Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”
    
    console.log("FizzBuzz");

    } else if (i % 3 == 0) { // Per i multipli di 3 stampi “Fizz” al posto del numero

        console.log("Fizz");


    } else if (i % 5 == 0) { // Per i multipli di 5 stampi “Buzz”

        console.log("Buzz");

    } else {

        console.log(i);

    }   

};