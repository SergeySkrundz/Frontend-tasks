'use strict'

function checkAge1(age) {
  return (age > 18) ? true : confirm('Родители разрешили?');
}


function checkAge2(age) {
  return (age > 18) || confirm('Родители разрешили?');
}


let age = prompt("Введите возраст", "");

alert(checkAge1(age));
alert(checkAge2(age));
