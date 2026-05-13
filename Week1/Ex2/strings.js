"use strict"

let names = "Luigi De Russis, Luca Mannella, Fulvio Corno, Juan Pablo Saenz Moreno, Enrico Masala, Antonio Servetti";

let namesArray = names.split(", ");


let acronyms = [];


for (let name of namesArray){
    let acronym = '';
    for (let word of name.split(" ")){
        acronym += word[0].toUpperCase();
    }
    acronyms.push(acronym);
}

for (let i=0; i < namesArray.length; i++){
    console.log('The studet is: ', namesArray[i], " with the acronym", acronyms[i]);
}
