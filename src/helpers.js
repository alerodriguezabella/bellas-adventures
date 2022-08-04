// Generating obstacles
// Obstacle bushes: location & measures
let bushWidth = 120;
let bushHeight = 120;
let obstBushesArray = [];
let numObstBushes = 5;

function generateBushes() {
  obstBushesArray = [];
  for (let i = 0; i < numObstBushes; i++) {
    // Getting obstBush image
    let obstBush = new Image();
    obstBush.src = "./images/bush.png";
    // obstBush random position
    let obstBushY = Math.random() * canvas.height;
    let obstBushX = 1000 * Math.random() + 1000 + bushWidth;
    // Creating the object objBush with above properties
    let objBush = {
      image: obstBush,
      x: obstBushX,
      y: obstBushY,
      height: bushHeight,
      width: bushWidth,
      visible: true,
    };
    obstBushesArray.push(objBush);
  }
}

// Obstacle dogOne: location & measures
let dogOneWidth = 160;
let dogOneHeight = 80;
let obstDogOneArray = [];
let numObstDogOne = 3;

function generateDogOne() {
  obstDogOneArray = [];
  for (let i = 0; i < numObstDogOne; i++) {
    // Getting dogOne animation
    const dogOneImages = [1, 2, 3, 4, 5, 6, 7, 8].map((number) => {
      const image = new Image();
      image.src = `./images/dog-running-mirror-${number}.png`;
      return image;
    });
    // obstDogOne random position
    let obstDogOneY = Math.random() * canvas.height - 80;
    let obstDogOneX = 1000 * Math.random() + 1000 + dogOneWidth;
    // Creating the object objDogOne with above properties
    let objDogOne = {
      images: dogOneImages,
      x: obstDogOneX,
      y: obstDogOneY,
      height: dogOneHeight,
      width: dogOneWidth,
      visible: true,
    };
    obstDogOneArray.push(objDogOne);
  }
}

// Obstacle dogTwo: location & measures
let dogTwoWidth = 220;
let dogTwoHeight = 140;
let obstDogTwoArray = [];
let numObstDogTwo = 2;

function generateDogTwo() {
  obstDogTwoArray = [];
  for (let i = 0; i < numObstDogTwo; i++) {
    // Getting dogTwo animation
    const dogTwoImages = [1, 2, 3, 4, 5, 6, 7, 8].map((number) => {
      const image = new Image();
      image.src = `./images/dog2-running-mirror-${number}.png`;
      return image;
    });
    // obstDogTwo random position
    let obstDogTwoY = Math.random() * canvas.height - 140;
    let obstDogTwoX = 1000 * Math.random() + 1000 + dogTwoWidth;
    // Creating the object objDogOne with above properties
    let objDogTwo = {
      images: dogTwoImages,
      x: obstDogTwoX,
      y: obstDogTwoY,
      height: dogTwoHeight,
      width: dogTwoWidth,
      visible: true,
    };
    obstDogTwoArray.push(objDogTwo);
  }
}

// Bones: location & measures
let boneWidth = 50;
let boneHeight = 50;
let boneArray = [];
let numBone = 6;

function generateBone() {
  boneArray = [];
  for (let i = 0; i < numBone; i++) {
    // Getting bone image
    let bone = new Image();
    bone.src = "./images/treat-bone.png";
    // bone random position
    let boneY = Math.random() * canvas.height - 120;
    let boneX = 1000 * Math.random() + 1000 + bushWidth;
    // Creating the object objBone with above properties
    let objBone = {
      image: bone,
      x: boneX,
      y: boneY,
      height: boneHeight,
      width: boneWidth,
      visible: true,
    };
    boneArray.push(objBone);
  }
}

// Moving obstacles
function moveBushes() {
  obstBushesArray.forEach((element) => {
    // Bush movement
    element.x -= 2;
    if (element.x < -bushWidth - 5) {
      element.y = Math.random() * canvas.height;
      element.x = 1000 * Math.random() + 1000 + bushWidth;
      score++;
    }
    // Checking if Bella 'touched' bush
    if (!element.visible) {
      return;
    }

    // Drawing obstBush
    // Visual rep of image size (important for crashes)
    // ctx.fillRect(element.x, element.y, element.width, element.height);
    ctx.drawImage(element.image, element.x, element.y, element.width, element.height);

    // Collision with bushes
    if (collision(element.x, element.y, element.height, element.width)) {
      crashAudio.currentTime = 0;
      energy -= 2;
      crashAudio.play();
      element.visible = false;
    }
  });
}

function moveDogOne() {
  obstDogOneArray.forEach((element) => {
    // dogOne movement
    element.x -= 5;
    if (element.x < -element.width - 5) {
      element.y = Math.random() * canvas.height - 80;
      element.x = 1000 * Math.random() + 1000 + element.width;
      score++;
    }
    // Checking if Bella 'touched' dogOne
    if (!element.visible) {
      return;
    }

    // Drawing obstDogOne
    // Visual rep of image size (important for crashes)
    // ctx.fillRect(element.x, element.y, element.width, element.height);
    const currentImageIndex = Math.floor((frame / 3) % element.images.length);
    ctx.drawImage(
      element.images[currentImageIndex],
      element.x,
      element.y,
      element.width,
      element.height
    );

    // Collision with dogOne
    if (collision(element.x, element.y, element.height, element.width)) {
      energy = 0;
      element.visible = false;
    }
  });
}

function moveDogTwo() {
  obstDogTwoArray.forEach((element) => {
    // dogTwo movement
    element.x -= 4;
    if (element.x < -element.width - 5) {
      element.y = Math.random() * canvas.height - 140;
      element.x = 1000 * Math.random() + 1000 + element.width;
      score++;
    }
    // Checking if Bella 'touched' dogTwo
    if (!element.visible) {
      return;
    }

    // Drawing obstDogTwo
    // Visual rep of image size (important for crashes)
    // ctx.fillRect(element.x, element.y, element.width, element.height);
    const currentImageIndex = Math.floor((frame / 3) % element.images.length);
    ctx.drawImage(
      element.images[currentImageIndex],
      element.x,
      element.y,
      element.width,
      element.height
    );

    // Collision with dogTwo
    if (collision(element.x, element.y, element.height, element.width)) {
      energy = 0;
      element.visible = false;
    }
  });
}

function moveBone() {
  boneArray.forEach((element) => {
    // bone movement
    element.x -= 2;
    if (element.x < -element.width - 5) {
      element.y = Math.random() * canvas.height - 120;
      element.x = 1000 * Math.random() + 1000 + element.width;
      element.visible = true;
    }
    // Checking if Bella 'touched' bone
    if (!element.visible) {
      return;
    }

    // Drawing bone
    // Visual rep of image size (important for crashes)
    // ctx.fillRect(element.x, element.y, element.width, element.height);
    ctx.drawImage(element.image, element.x, element.y, element.width, element.height);

    // Collision with bone
    if (collision(element.x, element.y, element.height, element.width)) {
      chewingAudio.currentTime = 0;
      energy++;
      chewingAudio.play();
      element.visible = false;
    }
  });
}

function collision(obstX, obstY, obstHeight, obstWidth) {
  return (
    // Bella top - obst bottom
    bellaY < obstY + obstHeight &&
    // Bella bottom - obst top
    bellaY + bellaHeight > obstY &&
    // Bella right - obst left
    bellaX < obstX + obstWidth &&
    // Bella left - obst right
    bellaX + bellaWidth > obstX
  )
}
