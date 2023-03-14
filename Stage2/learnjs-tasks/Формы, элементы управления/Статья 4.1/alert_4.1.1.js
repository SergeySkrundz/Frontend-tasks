'use strict'

let selectedOption = genres.options[genres.selectedIndex];
alert( selectedOption.value );
alert( selectedOption.text );


let newOption = new Option("Классика", "classic");
genres.append(newOption);


newOption.selected = true;
