"use strict";
let myImage = document.querySelector("#slideshow");
let images = ['images/1.jpg', 'images/2.png', 'images/3.jpg'];
let i = 0;
const slideShow = () => {
    myImage.setAttribute('src', images[i]);
    if (i == images.length - 1) {
        i = 0;
    }
    else {
        i++;
    }
    setTimeout(() => {
        slideShow();
    }, 2000);
};
slideShow();
