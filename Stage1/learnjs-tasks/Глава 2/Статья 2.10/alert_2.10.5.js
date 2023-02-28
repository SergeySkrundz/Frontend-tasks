'use strict'

let login = prompt('Введите логин', "Сотрудник");

let message = (login == 'Сотрудник') ? alert('Привет') :
  (login == 'Директор') ? alert('Здравствуйте') :
  (login == '') ? alert('Нет логина') :
  '';