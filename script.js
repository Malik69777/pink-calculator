const currentDisplay = document.getElementById('current');
const previousDisplay = document.getElementById('previous');
let currentInput = "0";
let lastInput = "";

function updateDisplay() {
  currentDisplay.textContent = currentInput;
  previousDisplay.textContent = lastInput;
}

function appendValue(value) {
  if (currentInput === "0" && value !== ".") {
    currentInput = value;
  } else {
    currentInput += value;
  }
  updateDisplay();
}

function clearDisplay() {
  currentInput = "0";
  lastInput = "";
  updateDisplay();
}

function deleteLast() {
  if (currentInput.length > 1) {
    currentInput = currentInput.slice(0, -1);
  } else {
    currentInput = "0";
  }
  updateDisplay();
}

function calculateResult() {
  try {
    lastInput = currentInput;
    currentInput = eval(currentInput).toString();
  } catch {
    currentInput = "Error";
  }
  updateDisplay();
}

// Initialize
updateDisplay();
