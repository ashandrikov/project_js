"use strict";

let numberOfFilms;

function start(){
    numberOfFilms = +prompt("How many movies have you seen1?", '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("How many movies have you seen2?", '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function askQuestion(num) {
    let count = 0;
    while (count < numberOfFilms) {
        const a1 = prompt("What was the last film you have seen?", ""),
            a2 = +prompt("Rate it!", "");
        if (a1 != null && a2 != null && a1.length > 0 && a1.length < 51 && a2 > 0) {
            personalMovieDB.movies[a1] = a2;
            console.log("Done");
        } else {
            console.log("Error");
            continue;
        }
        count++;
    }
}

// askQuestion(personalMovieDB.count);

function showMyDB(hidden){
    if (!hidden) {
        console.log(personalMovieDB);
        console.log(personalMovieDB.movies);
    } 
}

showMyDB(personalMovieDB.privat);


function showYourCinemaStatus(num){
    if (num < 3) {
        console.log("Too little");
    } else if (num < 5) {
        console.log("You like movies");
    } else {
        console.log("You are cinemaman");
    }
}

showYourCinemaStatus(personalMovieDB.count);

function writeYourGenres(){
    for (let i = 1; i < 4; i++) {
        const genre = prompt(`What's your favourite genre numer ${i}?`, "");
        personalMovieDB.genres[i] = genre;
    }
}

writeYourGenres();

