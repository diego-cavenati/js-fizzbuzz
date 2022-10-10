// method 2 e 3 -- BONUS
// dichiaro row del documento
const rowElement = document.querySelector(".row");

for (let i = 1; i <= 100; i++) {

    // dichiaro div e gli aggiungo la sclasse square
    let div = document.createElement("div");
    div.classList.add(`col`, `square`);

    let divChild = document.createElement("div");

    // prendo rowElement e gli aggiungo o il numero o fizz o buzz o fizzbuzz all'interno di un DIV con classe univoca square + classe personale nel caso di fixx, buzz e fizzbuzz
    
    if (i % 3 == 0 && i % 5 == 0) { // Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”
        divChild.append("FizzBuzz");
        divChild.classList.add(`fizzbuzz`, `p-5`);
        div.append(divChild);
        rowElement.append(div);

    } else if (i % 3 == 0) { // Per i multipli di 3 stampi “Fizz” al posto del numero
        divChild.append("Fizz");
        divChild.classList.add(`fizz`, `p-5`);
        div.append(divChild);
        rowElement.append(div);

    } else if (i % 5 == 0) { // Per i multipli di 5 stampi “Buzz”

        divChild.append("Buzz");
        divChild.classList.add(`buzz`, `p-5`);
        div.append(divChild);
        rowElement.append(div);

    } else {

        divChild.append(`${i}`);
        divChild.classList.add(`number`, `p-5`);
        div.append(divChild);
        rowElement.append(div);

    }   

};
