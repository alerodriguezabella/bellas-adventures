# Bella's adventures
Click [here](https://alerodriguezabella.github.io/bellas-adventures/) to see deployed game

## Description
Brief description of the project

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
List of features you might implement after the MVP:

- Add GIFs: doggies added with GIFs and not images
- Add bones to the game, they would appear randomly horizontally
- Increase game logic: 
    - Add energy board
    - Bella will start the game with 100% energy (Energy = 10)
    - If Bella runs into bushes, her energy level will drop partially (Energy -= 2)
    - If Bella runs into doggies, her energy level, no matter where it is, will drop completely (Energy = 0)
    - If Bella runs into bones, her energy level will increase partially (Energy += 1)
- Winning logic: When Bella's score reaches 40, she would have arrived to her final destination > YOU WIN!
- Losing logic: If Bella runs out of energy she would't have arrived to her final destination > YOU LOSE!
- Add sound

## Data structure
List of classes and methods

### main.js
- buildSplashScreen () {}
- buildGameScreen () {}
- buildGameOverScreen () {}

## States y States Transitions
List of states (views) of your game

- Start game screen (.game-intro)
- Game screen (.game-canvas)
- Game over screen (.game-over)
- Game won screen (.game-won)

## Links
- [Slides Link](https://docs.google.com/presentation/d/1_64-emZtrloe6nEUWX7pmSHj93uGgHB5-0-7mxyR4pE/edit?usp=sharing)
- [Github repository Link](https://github.com/alerodriguezabella/bellas-adventures)
- [Deployment Link](https://alerodriguezabella.github.io/bellas-adventures/)