"use strict"

const words = ["spring", "summer", "a", "ab", "abc", "autumn", "winter", "cat", "it"];

function shorterString(str){
    let temp;
    if (str.length < 2){
        temp = ""
    } else {
        temp = str.substring(0,2) + str.substring(str.length-2, str.length);
    }
    return temp;
}


for (let i = 0; i < words.length; i++){
    let str = shorterString(words[i]);
    console.log(str)
}