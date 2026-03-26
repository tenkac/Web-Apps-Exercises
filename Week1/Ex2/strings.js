"use strict";

let names = "Luigi De Russis, Luca Mannella, Fulvio Corno, Juan Pablo Saenz Moreno, Enrico Masala, Antonio Servetti";
let namesArray = names.split(",").map(name => name.trim());
// console.log(namesArray);

let results = [];

for(let a of namesArray){
    let words = a.split(" ");
    let temp = "";
    for(let i = 0; i<words.length; i++){
        if(words[i].length > 0){
            temp += words[i][0].toUpperCase();
        }
    }
    results.push({
        acc: temp,
        name: a    
    });
}
results.sort((a,b) => a.acc.localeCompare(b.acc));
for (let a of results){
    console.log(`The list of sorted names and acronyms is: ${a.name} - ${a.acc}`);
}
