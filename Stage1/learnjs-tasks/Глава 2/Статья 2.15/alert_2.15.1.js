'use strict'

function checkAge1(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Родители разрешили?');
  }
}


function checkAge2(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Родители разрешили?');
}


let age = prompt("Введите возраст", "");

alert(checkAge1(age));
alert(checkAge2(age));

// Обе функции работают одинаково