"use strict"

let scores = [12,2,3,5,1,2,3,4,6,-2,3,-5,-2,-4,7,8];

console.log("Original Scores: ", scores);

let scores2 = Array.from(scores);

scores2.sort((a,b) => a-b);

let NN = 0;
let average = 0;
let total = 0;


scores2 = scores2.filter(score => score>=0);

NN = scores.length - scores2.length;

console.log("The removed negatives are: ", NN);


for (let val of scores2){
    total += val;
}

average = Math.round(total/scores2.length);

console.log("The average is: ", average);

scores2.shift();
scores2.shift();


for(let i=0; i < NN+2; i++){
    scores2.push(average);
}

console.log("The list after the modifications is: ", scores2);



