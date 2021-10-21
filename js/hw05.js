"use strict"; //21.10 EventListeners

const btn = document.querySelector('button'),
    overlay = document.querySelector('.overlay');

// btn.onclick = function(){
//     alert('click');
// };

// let i = 0;
const deleteElement = (e) => {
    console.log(e.currentTarget);
    console.log(e.type);
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', deleteElement);
    // }
};
btn.addEventListener('click', deleteElement);
overlay.addEventListener('click', deleteElement);

// btn.addEventListener('click', () => {
//     alert('clicked2nd');
// });

const link = document.querySelector('a');
link.addEventListener('click', (e) => {
    event.preventDefault();
    console.log(e.target);
});