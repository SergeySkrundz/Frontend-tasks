'use strict'

button.addEventListener("click", () => alert("1")); // Работает

button.removeEventListener("click", () => alert("1")); // Работает

button.onclick = () => alert(2);
