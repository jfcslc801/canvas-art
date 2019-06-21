// canvas queryselector #draw
const canvas = document.querySelector('#draw');

// 2D context
const ctx = canvas.getContext('2d');

// resize canvas 1700x1100
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// base settings 
ctx.strokeStyle = '#BADASS';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

// 
let isDrawing = false;
let lastX = 0;
let lastY = 0;

// draw function
function draw(e){
    console.log(e);
}

// canvas mousemove event listener
canvas.addEventListener('mousemove', draw);