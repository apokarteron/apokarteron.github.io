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
    cube.style.animationDuration = '6s'; // Change the animation duration on mouseover
  });

  cube.addEventListener('mouseout', function() {
    cube.style.animationDuration = '0.2s'; // Restore the original animation duration on mouseout
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


function moveSection(section) {
  var sectionElement = document.querySelector(section);
  var containerWidth = window.innerWidth;
  var containerHeight = window.innerHeight;
  var sectionWidth = sectionElement.offsetWidth;
  var sectionHeight = sectionElement.offsetHeight;

  var positionX = Math.random() * (containerWidth - sectionWidth);
  var positionY = Math.random() * (containerHeight - sectionHeight);

  var speedX = (Math.random() - 0.5) * 10;
  var speedY = (Math.random() - 0.5) * 10;

  function move() {
    positionX += speedX;
    positionY += speedY;

    if (positionX <= 0 || positionX >= containerWidth - sectionWidth) {
      speedX *= -1;
    }

    if (positionY <= 0 || positionY >= containerHeight - sectionHeight) {
      speedY *= -1;
    }

    sectionElement.style.transform = 'translate(' + positionX + 'px, ' + positionY + 'px)';

    requestAnimationFrame(move);
  }

  move();
}

moveSection('section:nth-of-type(1)');
moveSection('section:nth-of-type(2)');
