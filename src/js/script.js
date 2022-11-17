const WIDTH = 600,
      HEIGHT = 200,
      DPI_WIDTH = WIDTH * 2,
      DPI_HEIGHT = HEIGHT * 2,
      PADDING = 40,
      VIEW_HEIGHT = DPI_HEIGHT - PADDING * 2,
      ROWS_COUNT = 5;

function charset(canvas, data){
  const ctx = canvas.getContext("2d");
  canvas.style.width = WIDTH + "px";
  canvas.style.height = HEIGHT + "px";
  canvas.width = DPI_WIDTH;
  canvas.height = DPI_HEIGHT;
  const [yMin, yMax] = computeBoundaries(data);
  // console.log(yMin, yMax);
  const textStep = (yMax - yMin) / ROWS_COUNT;
  // === y
  ctx.beginPath();
  ctx.font = 'normal 20px Hervetica, sans-serif';
  ctx.strokeStyle = '#bbb';
  ctx.fillStyle = '#96a2aa';
  const step =  VIEW_HEIGHT / ROWS_COUNT;
    for(let i = 1; i <= ROWS_COUNT; i++){
      const y = step * i;
      const text = yMax - textStep  * i;
      ctx.moveTo(0, y + PADDING);
      ctx.lineTo(DPI_WIDTH, y + PADDING);
      ctx.fillText(text.toString(), 5, y + PADDING - 10);
    }
    ctx.stroke();
    ctx.closePath();
  // ===
  ctx.beginPath();
  ctx.lineWidth = 4;
  ctx.strokeStyle = "#ff0000";
  for(const [x, y] of data){
    ctx.lineTo(x, DPI_HEIGHT - PADDING - y);
  }
  ctx.stroke();
  ctx.closePath();
}

charset(document.querySelector("#chart"),[
  [0,0],
  [200, 200],
  [400, 100],
  [600, 300],
  [800, 50]
]);

function computeBoundaries(data){
  let max,
      min;

  for(const [, y] of data){
    if(typeof min !== 'number'){min = y;}
    if(typeof max !== 'number'){max = y;}
    if(min > y){min = y;}
    if(max < y){max = y;}
  }
  return[min, max];
}