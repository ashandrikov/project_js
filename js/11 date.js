"use strict";

// const now = new Date();
// const now = new Date('2021-11-01');
// const now = new Date(2021, 11, 1, 20);
// const now = new Date(0);


// console.log(now);
// console.log(now.getHours());
// console.log(now.getUTCHours());

let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}

let end = new Date();

alert(`cycle: ${end - start} ms`);