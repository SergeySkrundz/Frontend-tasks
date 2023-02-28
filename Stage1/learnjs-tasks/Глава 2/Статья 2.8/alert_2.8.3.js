'use strict'

let a1 = "" + 1 + 0 // "10"
let a2 = "" - 1 + 0 // -1
let a3 = true + false // 1
let a4 = 6 / "3" // 2
let a5 = "2" * "3" // 6
let a6 = 4 + 5 + "px" // "9px"
let a7 = "$" + 4 + 5 // "$45"
let a8 = "4" - 2 // 2
let a9 = "4px" - 2 // NaN
let a10 = "  -9  " + 5 // " -9 5"
let a11 = "  -9  " - 5 // -14
let a12 = null + 1 // 1
let a13 = undefined + 1 // NaN
let a14 = " \t \n" - 2 // -2

alert(a1);
alert(a2);
alert(a3);
alert(a4);
alert(a5);
alert(a6);
alert(a7);
alert(a8);
alert(a9);
alert(a10);
alert(a11);
alert(a12);
alert(a13);
alert(a14);