# snakegame

A simple implementation of the classic Snake Game using HTML, CSS, and JavaScript.

## Features

- **Classic Snake Game**: Control the snake and try to eat the food to grow the snake.
- **Responsive Controls**: Use the arrow keys to move the snake up, down, left, or right.
- **Score Tracking**: The game tracks your current score and displays the high score.
- **Collision Handling**: The game ends when the snake hits the walls or its own body.
- **Game Restart**: After game over, you can press the spacebar to restart.

## How to Play

1. Use the arrow keys to control the direction of the snake:
   - **Up**: Moves the snake upward.
   - **Down**: Moves the snake downward.
   - **Left**: Moves the snake to the left.
   - **Right**: Moves the snake to the right.
   
2. The objective is to eat the food (represented by a red-bordered square), which causes the snake to grow.
3. If the snake runs into the walls or itself, the game will end.
4. Press the spacebar to start the game and restart it after game over.

### Gameplay Rules

- The snake cannot move in the opposite direction directly (e.g., if moving right, it cannot move left).
- The score increases by 1 each time the snake eats the food.
- The high score is displayed after the game ends and will persist until the game is restarted.

## How to Run Locally

1. Clone the repository to your local machine:
```
git clone https://github.com/yourusername/snake-game.git
```
2. Navigate to the project folder:
```
cd snakegame
```
3. Open the index.html file in your browser:
```
open index.html
```
or simply drag and drop the index.html file into your browser.

## Project Structure
```
├── index.html      # Main HTML file for the game
├── script.js       # JavaScript file for game logic
├── style.css       # CSS file for styling the game
└── README.md       # Project documentation
```

## Key JavaScript Logic

- The snake’s position is tracked as an array of objects (`[{x: 10, y: 10}, ...]`).
- The movement direction is updated based on arrow key inputs.
- The snake’s body is drawn dynamically using grid-based CSS for positioning.
- The game interval updates the snake’s position and checks for collisions at a set speed (250 ms).
- The game restarts when a collision is detected.

## Core Functions

- **`move()`**: Handles the movement of the snake and checks for collisions or food consumption.
- **`startGame()`**: Starts the game and initializes the snake, food, and score display.
- **`generateFood()`**: Randomly places the food on the grid.
- **`handleKeyPress()`**: Listens for user inputs and changes the snake’s direction.

## Demo

You can see the project in action here: [SnakeGame](https://mysnakegame-mani.netlify.app/)

## Screenshots
![image](https://github.com/user-attachments/assets/1aa43360-2660-41b4-b7ac-7389be27995b)


## Developed By

**Mani Shankar Janumpalli**

---

Have fun playing the Snake Game! 🚀
