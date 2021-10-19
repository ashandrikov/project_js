"use strict";

const numberOfFilms = +prompt("How many movies have you seen?", "0");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const ans1 = prompt("What was the last film you have seen?", ""),
    ans2 = +prompt("Rate it!", "0"),
    ans3 = prompt("What was the last film you have seen?", ""),
    ans4 = +prompt("Rate it!", "0");

personalMovieDB.movies[ans1] = ans2;
personalMovieDB.movies[ans3] = ans4;

console.log(personalMovieDB);
console.log(personalMovieDB.movies);


