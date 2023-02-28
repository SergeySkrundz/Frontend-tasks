'use strict'

function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}


let a = prompt("Введите число 'a'", "");
let b = prompt("Введите число 'b'", "");

alert('Минимальное значение ' + min(a, b));
