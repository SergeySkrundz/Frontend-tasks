'use strict'

let obj2 = new obj.constructor(); // Мы можем использовать такой способ, если свойство "constructor" существующего объекта имеет корректное значение.


function User(name) {
  this.name = name;
}

let user = new User('John');
let user2 = new user.constructor('Pete');

alert( user2.name ); 