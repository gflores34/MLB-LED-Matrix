var demo = document.getElementById("demo"),
    matrix = document.getElementById("matrix"),
    base = document.getElementById("base"),
    mat = new Array(),
    rotationL = 0,
    rotationR = 0;

// Positioning Base
var parWidth = window.getComputedStyle(base.parentNode).width;
parWidth = parWidth.slice(0, parWidth.length-2);
var baseWidth = window.getComputedStyle(base).width;
baseWidth = baseWidth.slice(0, baseWidth.length-2);
base.style.left = (parWidth/2) - (baseWidth/2)  + "px";

// Filling matrix
function newLine(row){
  var line = new Array();
  for (var i = 0; i < 32; i++){
    var led = document.createElement("div");
    led.onclick = function(){onOff(this)};
    led.className = "led off";
    led.id = i + "," + row;
    matrix.appendChild(led);
    line[i] = led;
  }
  return line;
}

let row = 0;
for (var i = 0; i < 32; i++){
  mat[i] = newLine(row);
  row += 1;
}

// Turning on/off
export function onOff (led) {
  if (led.className == "led off")
    led.className = "led";
  else 
    led.className = "led off"
}

export function write (arr) {
  var i = 0;
  while (i < arr.length){
    mat[arr[i++]][arr[i++]].className = "led";
  }
}

export function getCoords () {
  var coords = new Array(); 
  for ( var i = 0; i < mat.length; i++) 
    for ( var j = 0; j < mat[i].length; j++) 
      if (mat[i][j].className == "led") {
        coords.push(i);
        coords.push(j);
      }
  demo.innerHTML = coords;
}

function stop () {
  clearInterval(rotationL);
  clearInterval(rotationR);
  rotationL = 0;
  rotationR = 0;
}

function rotate(dir) {
    if (dir == "left" && rotationL == 0){
      rotationL =  setInterval(function(){moveLeft()},250);
      clearInterval(rotationR);
      rotationR = 0;
    }
    else if (dir == "right" && rotationR == 0){
      rotationR =  setInterval(function(){moveRight()},250);
      clearInterval(rotationL);
      rotationL = 0;
    }
}

function moveLeft(){
  for (var i = 0; i < mat.length; i++){
    var first = mat[i][0].className;
    for ( var j = 0; j < mat[i].length-1; j++) 
      mat[i][j].className = mat[i][j+1].className;
    mat[i][mat[i].length-1].className = first;
  }
}

function moveRight(){
  for (var i = 0; i < mat.length; i++){
    var last = mat[i][mat[i].length-1].className;
    for (var j = mat[i].length-1; j > 0; j--) 
      mat[i][j].className = mat[i][j-1].className;
    mat[i][0].className = last;
  }
}

export function clearM() {
  for ( var i = 0; i < mat.length; i++) 
    for ( var j = 0; j < mat[i].length; j++) 
      mat[i][j].className = "led off";
}

function fill() {
    for ( var i = 0; i < mat.length; i++) 
    for ( var j = 0; j < mat[i].length; j++) 
      mat[i][j].className = "led";
}

export function fill3by5(array, startingColumn, startingRow){

  for(let i = startingRow; i < startingRow + 5; i++){
      for(let j = startingColumn; j <  startingColumn + 3; j++){
          array.push(i); 
          array.push(j);
      }
  }

}


