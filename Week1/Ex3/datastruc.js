"use strict"

class Answer{
    constructor(response, name, score, date){
        this.response = response;
        this.name = name;
        this.score = score;
        this.date = new Date(date);
    }
}
 
class Question{
    constructor(question, name, date, answers){
        this.question = question;
        this.name = name;
        this.date = new Date(date);
        this.answers = [];
    }

    add(answer){
        //Function to add answers to the list of the question
        this.answers.push(answer);
    }
    findAll(name){
        console.log("The answers of ", name, " are: ");
        return this.answers.filter(ans => ans.name == name);
    }
    afterDate(date){
        console.log("The answers after ", date, " are:");
        return this.answers.filter(ans => ans.date >= new Date(date));
    }
    listByDate(){
        console.log("Displaying the answers sorted by date: ");
        return this.answers.sort((a,b) => a.date - b.date);
    }
    listByScore(){
        console.log("Displaying the answers sorted by score: ");
        return this.answers.sort((a,b) => b.score-a.score);
    }

}

let a1 = new Answer("dobro", "dovla", 2, "10/16/2003");
let a2 = new Answer("ok", "dovla", 10, "10/12/2003");
let a3 = new Answer("lose", "Ilija", 5, "10/11/2003");
let a4 = new Answer("nikako", "masan", 3, "10/18/2003");

let q1 = new Question("Kako si?", "vlado", "10/10/2003", []);

q1.add(a1);
q1.add(a2);
q1.add(a3);
q1.add(a4);

console.log(q1.findAll("dovla"));
console.log(q1.listByDate());
console.log(q1.listByScore());
