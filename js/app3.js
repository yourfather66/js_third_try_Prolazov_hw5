let firstNum = +prompt(`Enter your first num`, `1`);
let secondNum = +prompt(`Enter your second num`, `1`);
let firstAction = firstNum % secondNum;
let secondAction = secondNum % firstNum;

if (firstAction === 0) {
  alert(`Second num is divider of first num`);
} else {
  alert(`Second num is not divider of first num`);
}
if (secondAction === 0) {
  alert(`First num is divider of second num `);
} else {
  alert(`First num is not divider of second num`);
}
