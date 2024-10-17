let highscore = 0; // To track the high score
let currscore = 0; // To track the current score
let snake = [
  { x: 10, y: 10 }, // Initial position of the snake
];

let dir = "right"; // Initial direction of the snake
let hasGameStarted = false; // Game start flag
let gridSize = 20; // Size of the grid (20x20)
let gameInterval; // To store the game interval for movement
let gameSpeedDelay = 250; // Speed of the game (250 ms per move)

// DOM elements for manipulation
const logoEl = document.getElementById("logo");
const instructionEl = document.getElementById("instruction__text");
const boardEl = document.getElementById("game__board");
const currScoreEl = document.getElementById("currscore");
const highScoreEl = document.getElementById("highscore");

// Function to generate random food position on the grid
const generateFood = () => {
  let foodPosition;
  // Loop to ensure food doesn't spawn on the snake
  while (true) {
    foodPosition = {
      x: Math.floor(Math.random() * gridSize + 1),
      y: Math.floor(Math.random() * gridSize + 1),
    };
    // Check if food is not on the snake's body
    if (
      !snake.some(
        (part) => part.x === foodPosition.x && part.y === foodPosition.y
      )
    ) {
      break; // Exit the loop once valid position is found
    }
  }
  return foodPosition;
};

let food = generateFood(); // Generate initial food

// Set the position of an element (either snake or food) on the grid
const setPosition = (pixel, el) => {
  el.style.gridRow = pixel.x;
  el.style.gridColumn = pixel.y;
};

// Create a new DOM element for the game (snake or food)
const createGameEl = (tag, className) => {
  let el = document.createElement(tag);
  el.className = className;
  return el;
};

// Clear the game board by removing all elements (snake and food)
const clearBoard = () => {
  boardEl.innerHTML = "";
};

// Draw the snake on the game board
const drawSnake = () => {
  snake.forEach((pixel) => {
    let snakeSquareEl = createGameEl("div", "snake"); // Create a snake square
    setPosition(pixel, snakeSquareEl); // Set its position
    boardEl.append(snakeSquareEl); // Add to the board
  });
};

// Draw the food on the game board
const drawFood = () => {
  let foodSquare = createGameEl("div", "food"); // Create food element
  setPosition(food, foodSquare); // Set its position
  boardEl.append(foodSquare); // Add to the board
};

// Move the snake in the current direction and handle game logic
const move = () => {
  let snakeHead = { x: snake[0].x, y: snake[0].y }; // Get the current head of the snake

  // Update the snake's direction based on user input
  switch (dir) {
    case "up":
      snakeHead.x--;
      break;
    case "down":
      snakeHead.x++;
      break;
    case "left":
      snakeHead.y--;
      break;
    case "right":
      snakeHead.y++;
      break;
    default:
      break;
  }

  // Check if the snake eats the food
  if (food.x === snakeHead.x && food.y === snakeHead.y) {
    currscore++; // Increment current score
    currScoreEl.innerText = currscore.toString().padStart(3, "0"); // Update score display
    food = generateFood(); // Generate new food
  } else {
    snake.pop(); // Remove the snake's tail if no food is eaten
  }

  // Add the new head to the snake's body
  snake.unshift(snakeHead);

  // Check for collisions (with walls or self)
  if (
    snakeHead.x < 1 ||
    snakeHead.x > gridSize ||
    snakeHead.y < 1 ||
    snakeHead.y > gridSize ||
    snake
      .slice(1)
      .some((part) => part.x === snakeHead.x && part.y === snakeHead.y) // Check if the head collides with the body
  ) {
    gameOver(); // End the game on collision
  }
};

// Game over function to reset the game
const gameOver = () => {
  clearInterval(gameInterval); // Stop the game loop
  hasGameStarted = false; // Reset game started flag
  highscore = Math.max(highscore, currscore); // Update high score if needed
  highScoreEl.innerText = highscore.toString().padStart(3, "0"); // Update high score display
  highScoreEl.style.display = "block"; // Show high score
  logoEl.style.display = "block"; // Show logo
  instructionEl.style.display = "block"; // Show instructions
  currscore = 0; // Reset current score
  currScoreEl.innerText = "000"; // Reset score display
  snake = [{ x: 10, y: 10 }]; // Reset snake to initial state
  dir = "right"; // Reset direction to right
};

// Function to start the game
const startGame = () => {
  if (!hasGameStarted) {
    // Only start if the game hasn't started
    hasGameStarted = true;
    logoEl.style.display = "none"; // Hide logo
    instructionEl.style.display = "none"; // Hide instructions
    drawSnake(); // Draw initial snake
    gameInterval = setInterval(() => {
      clearBoard(); // Clear the board on each frame
      move(); // Move the snake
      drawSnake(); // Draw the updated snake
      drawFood(); // Draw the food
    }, gameSpeedDelay); // Game loop with delay for movement
  }
};

// Handle keyboard inputs to control the game
const handleKeyPress = (e) => {
  switch (e.key) {
    case " ": // Start game with space key
      startGame();
      break;
    case "ArrowUp":
      if (dir !== "down") dir = "up"; // Prevent moving in the opposite direction
      break;
    case "ArrowDown":
      if (dir !== "up") dir = "down";
      break;
    case "ArrowRight":
      if (dir !== "left") dir = "right";
      break;
    case "ArrowLeft":
      if (dir !== "right") dir = "left";
      break;
    default:
      break;
  }
};

document.addEventListener("keyup", handleKeyPress); // Add event listener for keyboard inputs
