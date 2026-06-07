"use strict"
import dayjs from "dayjs";


function Film(id, name, favorite=false, date, rating) {
    this.id = id;
    this.name = name;
    this.favorite=favorite;
    this.date = date && dayjs(date);
    this.rating = rating;
    
    this.toString = () => {
        return `Id: ${this.id}, ` +
        `Title: ${this.name}, Favorite: ${this.favorite}, ` +
        `Watch date: ${this.formatWatchDate('MMMM D, YYYY')}, ` +
        `Score: ${this.formatRating()}` ; 
    }
    this.formatWatchDate = (format) => {
        return this.date ? this.date.format(format) : '<not defined>';
    }

    this.formatRating = () => {
        return this.rating ? this.rating : '<not assigned>';
    }
}

function FilmLibrary(){
    this.films = [];

    this.addFilm = (film) => {
        if (!this.films.some(f => f.id == film.id)){
            this.films.push(film);
        } else {
            throw new Error("Duplicate ID or name");
        }
    }

    this.printFilms = () => {
        this.films.forEach((f) => console.log(f.toString()));
    }
}

function main() {
  // Creating some film entries
  const f1 = new Film(1, "Pulp Fiction", true, "2023-03-10", 5);
  const f2 = new Film(2, "21 Grams", true, "2023-03-17", 4);
  const f3 = new Film(3, "Star Wars", false);
  const f4 = new Film(4, "Matrix");
  const f5 = new Film(5, "Shrek", false, "2023-03-21", 3);

  // Adding the films to the FilmLibrary
  const library = new FilmLibrary();
  library.addFilm(f1);
  library.addFilm(f2);
  library.addFilm(f3);
  library.addFilm(f4);
  library.addFilm(f5);

  library.printFilms();
}

main();
