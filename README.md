# Bella's adventures
Click [here](https://alerodriguezabella.github.io/bellas-adventures/) to see deployed game

## Description
Brief description of the project:

*Bella's adventures* is a game where you'll be able to see the world through Bella's eyes. Bella is the cutest Jack Russell you'll ever encounter and in this adventure, she'll be on her way to the beach, where her human-parents are waiting for her. <br/>
She has lots of energy but it's a long way, so she'll need to preserve that energy in order to get to her final destination. Running into bushes take part of her energy away but meeting with other dogs make her run out of energy straight away (she can't control herself and wants to play aaaall daaaay :sweat_smile: ). In the way she can also find bones, they give her energy as soon as she runs into them.

## MVP
List of min features:

- Bella is able to move vertically, yet not horizontally
- Bushes and doggies appear randomly horizontally
- Scoreboard:
    - Bella will start the game with no score (Score = 0)
- Winning logic: When Bella's score reaches 20, she would have arrived to her final destination > YOU WIN!
- Losing logic: When Bella runs into bushes or doggies, she would't have arrived to her final destination > YOU LOSE!


## Backlog
List of implemented features after the MVP:

- Add GIFs: doggies animated (sequence of images that make them look like GIFs)
- Add bones to the game, they would appear randomly horizontally
- Increase game logic: 
    - Add energy board
    - Bella will start the game with her energy level equal to 10 (Energy = 10)
    - If Bella runs into bushes, her energy level will drop partially (Energy -= 2)
    - If Bella runs into doggies, her energy level, no matter where it is, will drop completely (Energy = 0)
    - If Bella runs into bones, her energy level will increase partially (Energy += 1)
- Winning logic: If Bella's score reaches 40 (Score = 40) and she still has energy left (Energy > 0), she would have arrived to her final destination > YOU WIN!
- Losing logic: If Bella runs out of energy she wouldn't have been able to arrive to her final destination > YOU LOSE!
- Add sound

## Data structure

### script.js
- DOM manipulation 
- Setting initial values (audio, game images, etc.)
- Game state functions (startOver(), gameStateReset(), keyboardSetup(), showScoreBoard(), showEnergyBoard(), checkGameOver(), checkGameWin(), updateGame())

### helpers.js
- Setting initial values of obstacles
- Obstacle related functions (generateBushes(), generateDogOne(), generateDogTwo(), generateBone(), moveBushes(), moveDogOne(), moveDogTwo(), moveBone())

## States y States Transitions
List of states/views of the game:

- Start game screen: startScreen (.game-intro)
- Game screen: canvas (.game-canvas)
- Game over screen: gameOverScreen (.game-over)
- Game won screen: gameWonScreen (.game-won)

## Links
- [Slides Link](https://docs.google.com/presentation/d/1_64-emZtrloe6nEUWX7pmSHj93uGgHB5-0-7mxyR4pE/edit?usp=sharing)
- [Github repository Link](https://github.com/alerodriguezabella/bellas-adventures)
- [Deployment Link](https://alerodriguezabella.github.io/bellas-adventures/)