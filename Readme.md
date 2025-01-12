# Bubble Game

A simple bubble clicking game where you have to click on the correct bubble to score points before the timer runs out.

## Files

- `index.html`: The main HTML file that sets up the structure of the game.
- `style.css`: The CSS file that styles the game.
- `logic.js`: The JavaScript file that contains the game logic.

## How to Play

1. Open `index.html` in your web browser.
2. The game will start automatically with a 60-second timer.
3. A random number will be displayed in the "Hit" box.
4. Click on the bubble with the matching number to score points.
5. Each correct click will generate a new set of bubbles and a new number to hit.
6. The game ends when the timer reaches zero.

## Game Elements

- **Hit**: Displays the number you need to click on.
- **Timer**: Displays the remaining time.
- **Score**: Displays your current score.
- **Bubbles**: Clickable bubbles with random numbers.

## Code Overview

### HTML

The HTML file sets up the structure of the game with three main sections: Hit, Timer, and Score. The bubbles are generated dynamically by JavaScript.

### CSS

The CSS file styles the game elements, including the layout, colors, and hover effects for the bubbles.

### JavaScript

The JavaScript file contains the game logic:
- `Makebubble()`: Generates the bubbles with random numbers.
- `time()`: Manages the game timer.
- `Hit()`: Generates the random number to hit.
- `score()`: Updates the score when the correct bubble is clicked.
- Event listener on the `body` to handle bubble clicks.

## License

This project is licensed under the MIT License.