let currentInput = '';  // Current input value
let previousInput = ''; // Previous input value
let operation = '';     // Selected operator

// Append a number or dot to the display
function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

// Update the display screen
function updateDisplay() {
  document.getElementById('display').value = currentInput;
}

// Clear the display
function clearDisplay() {
  currentInput = '';
  previousInput = '';
  operation = '';
  updateDisplay();
}

// Set the operation (+, -, *, /)
function setOperation(operator) {
  if (currentInput === '') return; // No input, do nothing
  if (previousInput !== '') {
    calculateResult(); // Calculate if there is a previous input
  }
  operation = operator; // Set the selected operator
  previousInput = currentInput; // Store current input in previous input
  currentInput = ''; // Clear the current input
}

// Calculate and display the result
function calculateResult() {
  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  if (isNaN(prev) || isNaN(current)) return; // Do nothing if inputs are invalid

  switch (operation) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      result = prev / current;
      break;
    default:
      return; // If no operation is selected, do nothing
  }

  currentInput = result.toString(); // Set the result as the new current input
  operation = ''; // Clear the operator
  previousInput = ''; // Clear previous input
  updateDisplay(); // Update the display with the result
}
