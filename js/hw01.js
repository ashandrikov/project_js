"use strict";

const numberOfFilms = +prompt("How many movies have you seen?", "0");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let count = 0;
while (count < numberOfFilms) {
    const a1 = prompt("What was the last film you have seen?", ""),
        a2 = +prompt("Rate it!", "");
    if (a1 != null && a2 != null && a1.length > 0 && a1.length < 51 && a2 > 0) {
        personalMovieDB.movies[a1] = a2;
        console.log("Done");
    } else {
        console.log("Error"); 
        continue; }
    count++;
}

console.log(personalMovieDB);
console.log(personalMovieDB.movies);

(numberOfFilms < 3) ? console.log("Too little")
    : (numberOfFilms < 5) ? console.log("You like movies")
        : (numberOfFilms < 7) ? console.log("You are cinemaman")
            : console.log("Error");






