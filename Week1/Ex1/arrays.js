"use strict" ;

let average = (initVal, ...arr) => {
    let sum = initVal;
    for(let a of arr) sum += a;
    let avg = sum/(arr.length);
    return avg;
}

let scores = [1,2,-3,5,3,-4,1,-2,5,2,4];

let dupscores = [...scores];
let negatives = dupscores.filter(x => x<0);
let n = negatives.length;
dupscores = dupscores.filter(x => x>0);


dupscores.sort((a,b) => a-b);
dupscores.splice(0,2);


let avg = Math.round(average(0,...dupscores));

for(let i = 0; i < n+2;i++){
    dupscores.push(avg);
}

console.log(`The scores of the first group are: ${scores}`);
console.log(`The scores of the first group are: ${dupscores}`)






