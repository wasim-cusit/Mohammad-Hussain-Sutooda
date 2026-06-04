// Author: Mohammad Hussain Sutooda
// Package Express - shipping quote calculator

import * as readline from "readline";

// Set up readline to read input from the keyboard
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Ask the user a question and return their answer as text
function ask(promptText) {
  return new Promise((resolve) => {
    rl.question(promptText, (answer) => {
      resolve(answer.trim());
    });
  });
}

// Show a prompt on its own line, then read the answer on the next line
async function askOnNewLine(message) {
  console.log(message);
  return ask("");
}

async function main() {
  // First line of output (required by assignment)
  console.log(
    "Welcome to Package Express. Please follow the instructions below."
  );

  // Get package weight from the user
  const weightInput = await askOnNewLine("Please enter the package weight:");
  const weight = Number(weightInput); // convert text input to a number

  // End program if weight is over 50
  if (weight > 50) {
    console.log(
      "Package too heavy to be shipped via Package Express. Have a good day."
    );
    rl.close();
    return;
  }

  // Get width, height, and length
  const widthInput = await askOnNewLine("Please enter the package width:");
  const width = Number(widthInput); // package width as a number

  const heightInput = await askOnNewLine("Please enter the package height:");
  const height = Number(heightInput); // package height as a number

  const lengthInput = await askOnNewLine("Please enter the package length:");
  const length = Number(lengthInput); // package length as a number

  // End program if the sum of dimensions is over 50
  const dimensionTotal = width + height + length;
  if (dimensionTotal > 50) {
    console.log("Package too big to be shipped via Package Express.");
    rl.close();
    return;
  }

  // Multiply height, width, length, and weight, then divide by 100 for the quote
  const quote = (height * width * length * weight) / 100;

  // Show quote as dollars with two decimal places
  console.log(
    `Your estimated total for shipping this package is: $${quote.toFixed(2)}`
  );
  console.log("Thank you!");

  rl.close();
}

main();
