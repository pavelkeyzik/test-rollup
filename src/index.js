function calc(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

function runApplication() {
  const x = 2;
  const y = 5;
  const result = calc(x, y);
  
  console.log('Result:', result);
}

export { runApplication };