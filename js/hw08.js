const btns = document.querySelectorAll('button'),
    wrapper = document.getElementById('first');

// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(0));
// console.log(btns[1].classList.add('red'));
// console.log(btns[0].classList.remove('blue'));
// console.log(btns[0].classList.toggle('blue'));

// if (btns[1].classList.contains('red')) {
//     console.log('red');
// } 

// btns[0].addEventListener('click', () => {
//     if (!btns[1].classList.contains('red')) {
//         btns[1].classList.add('red');
//     } else {
//         btns[1].classList.remove('red');
//     }
// });

wrapper.addEventListener('click', (e) => {
    if (e.target && e.target.matches("button.blue")) {
        console.dir(e.target);
    } 
});

const btn = document.createElement('button');
btn.classList.add('blue');
wrapper.append(btn);