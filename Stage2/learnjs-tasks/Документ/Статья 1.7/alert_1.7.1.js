'use strict'

let text = '<b>текст</b>';

elem1.append(document.createTextNode(text)); // Работает
elem2.innerHTML = text;
elem3.textContent = text; // Работает