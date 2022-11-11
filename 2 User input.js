"user strict";

const ps = require("prompt-sync");
const input = ps();

let name = input(" Write your Name: ");
console.log("Welcome! "+name);