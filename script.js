let cubesSpawned = 0;
const totalCubesToSpawn = 100; // Set the desired number of cubes to spawn
const spawnInterval = 1000; // 1 second

function spawnCube() {
  const background = document.getElementById("background");
  const cube = document.createElement("div");
  cube.className = "cube";

  const positionX = Math.random() * (window.innerWidth - 100); // Random X position
  const positionY = Math.random() * (window.innerHeight - 100); // Random Y position

  cube.style.left = `${positionX}px`; // Set X position
  cube.style.top = `${positionY}px`; // Set Y position

  // Create cube faces
  const faces = ["front", "back", "left", "right", "top", "bottom"];
  for (let i = 0; i < faces.length; i++) {
    const face = document.createElement("div");
    face.className = `face ${faces[i]}`;
    cube.appendChild(face);
  }
  
  cube.addEventListener('mouseover', function() {
    cube.style.animationDuration = '0.2'; // Change the animation duration on mouseover
  });

  cube.addEventListener('mouseout', function() {
    cube.style.animationDuration = '8s'; // Restore the original animation duration on mouseout
  });

  background.appendChild(cube);
  cubesSpawned++;

  if (cubesSpawned >= totalCubesToSpawn) {
    clearInterval(spawningInterval);
  }
}

// Spawn cubes at regular intervals
const spawningInterval = setInterval(spawnCube, spawnInterval);


function getRandomColor() {
  var randomNum = Math.random();
  if (randomNum < 0.7) {
    return "black";
  } else if (randomNum < 0.85) {
    return "white";
  } else {
    return "red";
  }
}

function changeBackgroundColor() {
  var bodyElement = document.querySelector('body');
  var color = getRandomColor();
  bodyElement.style.backgroundColor = color;
  if (color == "white") {  
    bodyElement.style.color = "black";
  } else {
    bodyElement.style.color = "white";
  }
}

setInterval(changeBackgroundColor, 10000);

//dvd animation stolen from jj ferman on yt
  
let dvd = document.getElementById('dvd');
let interval_id;
let x_incr = 1;
let y_incr = 1;

function init() {
  update_color();
  dvd.style.position = 'absolute';
  setInterval(frame, 5);
}

function update_color() {
  let color = Math.round((Math.random() * 100));
  dvd.style.backgroundColor = `hsl(${color},100%,50%)`;
}

function handle_collision() {
  let dvd_height = dvd.offsetHeight;
  let dvd_width = dvd.offsetWidth;
  let left = dvd.offsetLeft;
  let top = dvd.offsetTop;
  let win_height = window.innerHeight;
  let win_width = window.innerWidth;

  if (left <= 0 || left + dvd_width >= win_width) {
    x_incr = ~x_incr + 1;
    update_color();
  }
  if (top <= 0 || top + dvd_height >= win_height) {
    y_incr = ~y_incr + 1;
    update_color();
  }
}

function frame() {
  handle_collision();
  dvd.style.top = dvd.offsetTop + y_incr;
  dvd.style.left = dvd.offsetLeft + x_incr;
}

init();
