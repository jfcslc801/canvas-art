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
ctx.lineWidth = 100;

// is drawing var
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;

// draw function
function draw(e) {
    // stop function when not mouse down
    if (!isDrawing) return;
    console.log(e);
    ctx.beginPath();
    // start from
    ctx.moveTo(lastX, lastY);
    // go to
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
}

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});


// canvas click and drag even listenters
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);