







const WIDTH = 600,
HEIGHT = 200,
PADDING = 40,
DPI_WIDTH = WIDTH * 2,
DPI_HEIGHT = HEIGHT * 2,
VIEW_HEIGHT = DPI_HEIGHT - PADDING * 2,
ROWS_COUNT = 5;

function charset(canvas, data){
const ctx = canvas.getContext("2d");

canvas.style.width = WIDTH + 'px';
canvas.style.height = HEIGHT + 'px';
canvas.width = DPI_WIDTH;
canvas.height = DPI_HEIGHT;

// === y axis
ctx.beginPath();
ctx.strokeStyle = "#bbb"
ctx.font = 'normal 20px Harvetica, sans-seriv';
ctx.fillStyle = '#96a2aa';
const step = VIEW_HEIGHT / ROWS_COUNT;
for(let i = 1; i <= ROWS_COUNT; i++){
const y = step * i;
ctx.moveTo(0, y);
ctx.lineTo(DPI_WIDTH, y);
ctx.fillText(DPI_HEIGHT - y, 5, y -10);
}
ctx.stroke();
ctx.closePath();

// ===

ctx.beginPath();
ctx.lineWidth = 4;
ctx.strokeStyle = 'green';
for(const [x,  y] of data){
ctx.lineTo(x, DPI_HEIGHT -  y); 
}
ctx.stroke();
ctx.closePath();

}

charset(document.getElementById("chart"), [
[0, 0],
[200, 200],
[400, 100],
[600, 300],
[800, 50]
]);