let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');

let botDoorPath = "https://i.imgur.com/e1VdOWi.png"

let beachDoorPath = "https://i.imgur.com/O2vpz2G.png" 

let spaceDoorPath = "https://i.imgur.com/O2vpz2G.png" 

let numClosedDoors = 3

var openDoor1;
var openDoor2;
var openDoor3;

let closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg"

let startButton = document.getElementById('start')

let currentlyPlaying = true;

function isBot(door) {
  if (door.src === botDoorPath){
    return true;
  }
  else {
    return false;
  }
}

isClicked = (door) => {
  if (door.src === closedDoorPath) {
    return false;
  }
  else {
    return true;
  }
  
}

playDoor = (door) => {
  numClosedDoors--;
  if (numClosedDoors === 0){
    gameOver('win');
  }
  else if (isBot(door) === true){
    gameOver('lose');
  }
}

randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random() * numClosedDoors);
  if (choreDoor === 0) {
    openDoor1 = botDoorPath;
    openDoor2 = spaceDoorPath;
    openDoor3 = beachDoorPath;
  }
  else if (choreDoor === 1) {
    openDoor2 = botDoorPath;
    openDoor1 = spaceDoorPath;
    openDoor3 = beachDoorPath;
  }
  else {
    openDoor3 = botDoorPath;
    openDoor1 = spaceDoorPath;
    openDoor2 = beachDoorPath;
  }
  
}

doorImage1.onclick = () => {
  if (isClicked(doorImage1) === false && currentlyPlaying) {
  doorImage1.src = openDoor1
  playDoor(doorImage1)
  }
}

doorImage2.onclick = () => {
  if (isClicked(doorImage2) === false&& currentlyPlaying) {
	doorImage2.src = openDoor2
  playDoor(doorImage2)
  }
}
doorImage3.onclick = () => {
  if (isClicked(doorImage3) === false&& currentlyPlaying) {
	doorImage3.src = openDoor3
  playDoor(doorImage3)
  }
}

function startRound() {
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  numClosedDoors = 3;
  startButton.innerHTML = 'Good luck!';
  currentlyPlaying = true;
  randomChoreDoorGenerator();
}

startButton.onclick = () => {
  if (!currentlyPlaying)
  startRound()
}

function gameOver(status) {
  if(status === 'win') {
    startButton.innerHTML = 'You win! Play again?';
  } else {
    startButton.innerHTML = 'Game over! Play again?';
  }
  currentlyPlaying = false;
}

startRound()