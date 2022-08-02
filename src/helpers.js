// // Obstacle bushes: location & measures
// let bushWidth = 120;
// let bushHeight = 120;
// let obstBushesArray = [];
// let numObstBushes = 5;

// function generateBushes() {
//   obstBushesArray = [];
//   for (let i = 0; i < numObstBushes; i++) {
//     // Getting obstBush image
//     let obstBush = new Image();
//     obstBush.src = "./images/bush.png";
//     // obstBush random position
//     let obstBushY = Math.random() * canvas.height;
//     let obstBushX = 1000 * Math.random() + 1000 + bushWidth;
//     // Creating the object objBush with above properties
//     let objBush = {
//       image: obstBush,
//       x: obstBushX,
//       y: obstBushY,
//     };
//     obstBushesArray.push(objBush);
//   }
// }

// // Obstacle dogOne: location & measures
// let dogOneWidth = 140;
// let dogOneHeight = 140;
// let obstDogOneArray = [];
// let numObstDogOne = 3;

// function generateDogOne() {
//   obstDogOneArray = [];
//   for (let i = 0; i < numObstDogOne; i++) {
//     // Getting obstDogOne image
//     let obstDogOne = new Image();
//     obstDogOne.src = "./images/dog-running-mirror.gif";
//     // obstDogOne random position
//     let obstDogOneY = Math.random() * canvas.height - 100;
//     let obstDogOneX = 1000 * Math.random() + 1000 + bushWidth;
//     // Creating the object objDogOne with above properties
//     let objDogOne = {
//       image: obstDogOne,
//       x: obstDogOneX,
//       y: obstDogOneY,
//     };
//     obstDogOneArray.push(objDogOne);
//   }
// }

// // Obstacle dogTwo: location & measures
// let dogTwoWidth = 200;
// let dogTwoHeight = 200;
// let obstDogTwoArray = [];
// let numObstDogTwo = 2;

// function generateDogTwo() {
//   obstDogTwoArray = [];
//   for (let i = 0; i < numObstDogTwo; i++) {
//     // Getting obstDogTwo image
//     let obstDogTwo = new Image();
//     obstDogTwo.src = "./images/dog2-running-mirror.gif";
//     // obstDogTwo random position
//     let obstDogTwoY = Math.random() * canvas.height - 100;
//     let obstDogTwoX = 1000 * Math.random() + 1000 + bushWidth;
//     // Creating the object objDogOne with above properties
//     let objDogTwo = {
//       image: obstDogTwo,
//       x: obstDogTwoX,
//       y: obstDogTwoY,
//     };
//     obstDogTwoArray.push(objDogTwo);
//   }
// }

// // Bones: location & measures
// let boneWidth = 50;
// let boneHeight = 50;
// let boneArray = [];
// let numBone = 6;

// function generateBone() {
//   boneArray = [];
//   for (let i = 0; i < numBone; i++) {
//     // Getting bone image
//     let bone = new Image();
//     bone.src = "./images/treat-bone.png";
//     // bone random position
//     let boneY = Math.random() * canvas.height - 100;
//     let boneX = 1000 * Math.random() + 1000 + bushWidth;
//     // Creating the object objBone with above properties
//     let objBone = {
//       image: bone,
//       x: boneX,
//       y: boneY,
//     };
//     boneArray.push(objBone);
//   }
// }

// export default {
//   bushHeight,
//   bushWidth,
//   obstBushesArray,
//   numObstBushes,
//   generateBushes,
//   dogOneHeight,
//   dogOneWidth,
//   obstDogOneArray,
//   numObstDogOne,
//   generateDogOne,
//   dogTwoHeight,
//   dogTwoWidth,
//   obstDogTwoArray,
//   numObstDogTwo,
//   generateDogTwo,
//   boneHeight,
//   boneWidth,
//   boneArray,
//   numBone,
//   generateBone
// };
