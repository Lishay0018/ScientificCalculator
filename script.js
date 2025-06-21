const display = document.getElementById('display');

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function clearEntry() {
  let value = display.value.trim();
  const regex = /(Math\.?\w*\(?|[+\-*/%^]|[\d.]+|\()$/;
  const match = value.match(regex);
  if (match) {
    display.value = value.slice(0, -match[0].length);
  } else {
    display.value = value.slice(0, -1);
  }
}

function toggleSign() {
  if (!display.value) return;
  try {
    const value = eval(display.value);
    display.value = (-value).toString();
  } catch {
    display.value = 'Error';
  }
}

// x! factorial function
function factorial() {
  try {
    const val = eval(display.value);
    if (val < 0 || !Number.isInteger(val)) throw new Error("Invalid input");
    let result = 1;
    for (let i = 1; i <= val; i++) {
      result *= i;
    }
    display.value = result;
  } catch {
    display.value = 'Error';
  }
}

// Calculate and evaluate expression
function calculate() {
  try {
    let expression = display.value;

    // Validate balanced brackets
    const open = (expression.match(/\(/g) || []).length;
    const close = (expression.match(/\)/g) || []).length;
    if (open !== close) throw new Error("Unbalanced brackets");

    // Evaluate expression
    display.value = eval(expression);
  } catch (e) {
    display.value = 'Error';
  }
}
