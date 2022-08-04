// Music
let audio = new Audio('./audio/happy-soundtrack.mp3')
audio.volume = 0.1
let gameOverAudio = new Audio('./audio/game-over.mp3')
gameOverAudio.volume = 1
let gameWonAudio = new Audio('./audio/game-won.mp3')
gameWonAudio.volume = 0.8
let chewingAudio = new Audio ('./audio/chewing.mp3')
chewingAudio.volume = 0.4
let crashAudio = new Audio ('./audio/crash.mp3')
crashAudio.volume = 0.4

// Finding DOM elements
const canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");
let startScreen = document.querySelector(".game-intro");
let gameOverScreen = document.querySelector(".game-over");
let gameWonScreen = document.querySelector(".game-won");

// Initial game values
let intervalId = 0;
let score = 0;
let frame = 0;
let energy = 10;

// Getting game images (base)
let background = new Image();
background.src = "./images/background.jpg";
let arrowOne = new Image();
arrowOne.src = "./images/arrow-mom-and-dad.jpeg";
let arrowTwo = new Image();
arrowTwo.src = "./images/arrow-beach.jpeg";

// Bella: location & measures
let bellaX = 10;
let bellaY = 200;
let bellaWidth = 120;
let bellaHeight = 60;

// Bella's animation (to be used in 'Drawing the background and Bella' below)
const bellaImages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((number) => {
  const image = new Image();
  image.src = `./images/bella-running-${number}.png`;
  return image;
});

// Arrows
let arrowOneX = 600;
let arrowOneY = 20;
let arrowOneWidth = 160;
let arrowOneHeight = 80;

let arrowTwoX = 600;
let arrowTwoY = 900;
let arrowTwoWidth = 160;
let arrowTwoHeight = 80;

// Start game 
window.onload = () => {
  // Hiding other game states
  canvas.style.display = "none";
  gameOverScreen.style.display = "none";
  gameWonScreen.style.display = "none";
  keyboardSetup();

  document.getElementById("start-button").onclick = () => {
    gameStateReset();
    updateGame();
    audio.play();
  };
};

// Functions game state
function startOver() {
  gameOverAudio.pause();
  gameWonAudio.pause();
  startScreen.style.display = "flex";
  // Hiding other game states
  gameWonScreen.style.display = "none";
  canvas.style.display = "none";
  gameOverScreen.style.display = "none";
}

document.querySelectorAll(".start-over-button").forEach((element) => {
  element.onclick = () => {
    startOver();
  };
});

function gameStateReset() {
  intervalId = 0;
  score = 0;
  energy = 10;

  bellaX = 10;
  bellaY = 200;

  generateBushes();
  generateDogOne();
  generateDogTwo();
  generateBone();

  audio.currentTime = 0;
  gameOverAudio.currentTime = 0;
  gameWonAudio.currentTime = 0;
}

function keyboardSetup() {
  document.addEventListener("keydown", (event) => {
    if (event.code === "ArrowUp" || event.code === "ArrowDown") {
      event.preventDefault();
    }
    if (event.code === "ArrowUp" && bellaY - 60 > 0) {
      bellaY -= 10;
    } else if (
      event.code === "ArrowDown" &&
      bellaY + bellaHeight + 10 < canvas.height
    ) {
      bellaY += 10;
    }
  });
}

function showScoreBoard() {
  ctx.font = "bold 40px Mali";
  ctx.fillStyle = "white";
  ctx.fillText(`Score: ${score}`, 800, 50);
}

function showEnergyBoard() {
  ctx.font = "bold 40px Mali";
  ctx.fillStyle = "white";
  ctx.fillText(`Energy: ${energy}`, 40, 50);
}

function checkGameOver() {
  if (energy === 0) {
    cancelAnimationFrame(intervalId);
    audio.pause();
    chewingAudio.pause();
    crashAudio.pause();
    gameOverAudio.play();
    gameOverScreen.style.display = "flex";
    // Hiding other game states
    canvas.style.display = "none";
    startScreen.style.display = "none";
    gameWonScreen.style.display = "none";
  }
}

function checkWin() {
  if (score >= 40) {
    cancelAnimationFrame(intervalId);
    audio.pause();
    chewingAudio.pause();
    crashAudio.pause();
    gameWonAudio.play();
    gameWonScreen.style.display = "flex";
    // Hiding other game states
    canvas.style.display = "none";
    startScreen.style.display = "none";
    gameOverScreen.style.display = "none";
  }
}

function updateGame() {
  frame += 1;
  canvas.style.display = "block";
  // Hiding other game states
  startScreen.style.display = "none";
  gameOverScreen.style.display = "none";
  gameWonScreen.style.display = "none";

  // Drawing the background and Bella
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  // Visual rep of image size (important for crashes)
  // ctx.fillRect(bellaX, bellaY, bellaWidth, bellaHeight);

  moveBushes();
  moveDogOne();
  moveDogTwo();
  moveBone();
  ctx.drawImage(
    arrowOne,
    arrowOneX,
    arrowOneY,
    arrowOneWidth,
    arrowOneHeight
  );
  ctx.drawImage(
    arrowTwo,
    arrowTwoX,
    arrowTwoY,
    arrowTwoWidth,
    arrowTwoHeight
  );
  showScoreBoard();
  showEnergyBoard();
  const currentImageIndex = Math.floor((frame / 2) % bellaImages.length);
  ctx.drawImage(
    bellaImages[currentImageIndex],
    bellaX,
    bellaY,
    bellaWidth,
    bellaHeight
  );

  intervalId = requestAnimationFrame(updateGame);

  checkGameOver();
  checkWin();
}

