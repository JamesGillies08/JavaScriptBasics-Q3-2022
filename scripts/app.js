/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 600;

console.log("Hello world");

let suit = "Clubs";
let face = "Ace";
let value = "1";

let isFace = true;

let aceOfClubs = {}
