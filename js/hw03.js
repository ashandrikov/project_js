"use strict";

// function learnJS(lang, callback){
//     console.log(`I am learning: ${lang}`);
//     callback();
// }

// function done(){
//     console.log("I've passed this lesson");
// }

// learnJS('JS', done);

// const myObject = {
//     name: "Test",
//     width: 1024,
//     colors: {
//         border: "black",
//         bg: "white"
//     }
// };

// for (let key in myObject) {
//     if (typeof(myObject[key]) === 'object') {
//         for(let i in myObject[key]){
//             console.log(`property ${i} has value ${myObject[key][i]}`);
//         }
//     } else {
//         console.log(`property ${key} has value ${myObject[key]}`);
//     }
// }

// const arr = [1,2,4,8,16];
// arr.forEach(function(item, i, arr){
//     console.log(`${i}: ${item} in array: ${arr}`);
// });

// function copy(someObj){
//     let objCopy = {};

//     for (let key in someObj) {
//         objCopy[key] = someObj[key];
//     }

//     return objCopy;
// }

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: () => {
        this.count = +prompt("How many movies have you seen?", '');
        while (this.count == '' || this.count == null || isNaN(this.count)) {
            this.count = +prompt("How many movies have you seen?", '');
        }
    },
    rememberMyMovies: function () {
        let count = 0;
        while (count < this.count) {
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
    },
    showYourCinemaStatus: function () {
        if (this.count < 3) {
            console.log("Too little");
        } else if (this.count < 5) {
            console.log("You like movies");
        } else {
            console.log("You are cinemaman");
        }
    },
    showMyDB: function () {
        if (!this.privat) {
            console.log(personalMovieDB);
            console.log(personalMovieDB.movies);
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i < 4; i++) {
            const genre = prompt(`What's your favourite genre numer ${i}?`, "");
            if (genre == null || genre == '' || genre.length < 1) {
                console.log("incorrect input");
                i--;
                continue;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }
        this.genres.forEach((item, i) => {
            console.log(`Favourite genre #${i + 1} is ${item}`);
        });
    },
    toggleVisibleMyDB: function () {
        if (this.privat) {
            this.privat = false;
        } else {
            this.privat = true;
        }
    }

};

// askQuestion(personalMovieDB.count);
// showMyDB(personalMovieDB.privat);
// showYourCinemaStatus(personalMovieDB.count);
// writeYourGenres();

// personalMovieDB.start();
// personalMovieDB.rememberMyMovies();
// personalMovieDB.showMyDB();
// personalMovieDB.showYourCinemaStatus();
// personalMovieDB.writeYourGenres();




