
"use strict";

document.addEventListener("DOMContentLoaded", () => {

  let sliderImg  = document.querySelector('.slide-container');
  let arrowLeft  = document.querySelector('.left');
  let arrowRight = document.querySelector('.right');


  let slideLeft = () => {
    let first  = sliderImg.children[0];
    let second = sliderImg.children[1];

    for (let key of sliderImg.children) {
      key.classList.remove('moveLeft');
    }
      first.classList.add('moveLeft');

    setTimeout( () => {
        sliderImg.removeChild(first);
        sliderImg.appendChild(first);
        first.classList.remove('moveLeft');
     }, 200);
  };

  let slideRight = () => {
    let first  = sliderImg.children[0];
    let last   = sliderImg.children[sliderImg.children.length-1];

    for (let key of sliderImg.children) {
      key.classList.remove('moveRight');
    }
      first.classList.add('moveRight');

    setTimeout( () => {
        sliderImg.removeChild(last);
        sliderImg.insertAdjacentElement('afterbegin', last);
        first.classList.remove('moveRight');
     }, 200);
  }

  arrowLeft.addEventListener('click', slideLeft);
  arrowRight.addEventListener('click', slideRight);
});
