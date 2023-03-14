'use strict'

document.onclick = function(e) { 
    coords.innerHTML = e.clientX + ':' + e.clientY;
};

let coords = elem.getBoundingClientRect();

let answer1 = [coords.left, coords.top];
let answer2 = [coords.right, coords.bottom];



let answer3 = [coords.left + field.clientLeft, coords.top + field.clientTop];



let answer4 = [
    coords.right - parseInt(getComputedStyle(field).borderRightWidth),
    coords.bottom - parseInt(getComputedStyle(field).borderBottomWidth)
];