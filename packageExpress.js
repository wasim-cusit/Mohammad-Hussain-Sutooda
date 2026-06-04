/**
 * Package Express — shipping quote calculator
 * Prompts for weight and dimensions, validates limits, and prints an estimated total.
 */

import * as readline from "readline";

// Create a readline interface so we can read user input from the terminal (stdin)
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * Wraps readline.question in a Promise so we can use async/await for each prompt.
 * @param {string} promptText - The message shown before the user types their answer
 * @returns {Promise<string>} - Resolves with the trimmed line the user entered
 */
function ask(promptText) {
  return new Promise((resolve) => {
    rl.question(promptText, (answer) => {
      resolve(answer.trim());
    });
  });
}

/**
 * Parses user input as a number; returns NaN if the value is not a valid number.
 * @param {string} input - Raw string from the prompt
 * @returns {number}
 */
function parseNumber(input) {
  return Number(input);
}

/**
 * Formats a numeric quote as US currency (e.g. 528 -> "$528.00").
 * @param {number} amount
 * @returns {string}
 */
function formatDollars(amount) {
  return `$${amount.toFixed(2)}`;
}

async function main() {
  // Required opening message (must be the first line of program output)
  console.log(
    "Welcome to Package Express. Please follow the instructions below."
  );

  // --- Weight ---
  const weightInput = await ask("Please enter the package weight:");
  const weight = parseNumber(weightInput);

  // Stop if weight exceeds the maximum allowed for shipping
  if (weight > 50) {
    console.log(
      "Package too heavy to be shipped via Package Express. Have a good day."
    );
    rl.close();
    return;
  }

  // --- Dimensions (width, height, length) ---
  const widthInput = await ask("Please enter the package width:");
  const width = parseNumber(widthInput);

  const heightInput = await ask("Please enter the package height:");
  const height = parseNumber(heightInput);

  const lengthInput = await ask("Please enter the package length:");
  const length = parseNumber(lengthInput);

  // Sum of all three dimensions must not exceed 50
  const dimensionTotal = width + height + length;
  if (dimensionTotal > 50) {
    console.log(
      "Package too big to be shipped via Package Express."
    );
    rl.close();
    return;
  }

  // Quote = (height × width × length × weight) ÷ 100
  const volumeTimesWeight = height * width * length * weight;
  const quote = volumeTimesWeight / 100;

  // Show the estimated shipping total in dollars, then close with a thank-you
  console.log(
    `Your estimated total for shipping this package is: ${formatDollars(quote)}`
  );
  console.log("Thank you!");

  rl.close();
}

// Run the program and surface any unexpected errors
main().catch((err) => {
  console.error(err);
  rl.close();
  process.exit(1);
});
