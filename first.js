
  const display = document.getElementById("display");
  let currentInput = "";

  function appendNumber(num) {
    // Prevent multiple leading 0s
    if (currentInput === "0" && num !== ".") {
      currentInput = num;
    } else {
      currentInput += num;
    }
    updateDisplay();
  }

  function appendOperator(op) {
    if (currentInput === "") return;

    const lastChar = currentInput.slice(-1);
    if ("+-*/".includes(lastChar)) {
      currentInput = currentInput.slice(0, -1) + op; // Replace last operator
    } else {
      currentInput += op;
    }
    updateDisplay();
  }

  function clearDisplay() {
    currentInput = "";
    updateDisplay();
  }

  function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
  }

  function calculate() {
    try {
      if (currentInput === "") return;
      const result = eval(currentInput);
      currentInput = result.toString();
      updateDisplay();
    } catch (e) {
      display.textContent = "Error";
      currentInput = "";
    }
  }

  function updateDisplay() {
    display.textContent = currentInput || "0";
  }
