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

// is drawing var
let isDrawing = false;
let lastX = 0;
let lastY = 0;

// draw function
function draw(e) {
    console.log(e);
}

// canvas click and drag even listenters
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', () => isDrawing = true);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);