let firstNum = +prompt(`Enter your first number`, `1`);
let secondNum = +prompt(`Enter your second number`, `1`);
let firstAction = firstNum > secondNum;
let secondAction = secondNum > firstNum;

if (firstAction) {
  alert(`First num bidder than second num`);
} else if (secondAction) {
  alert(`Second num bigger than first num`);
} else {
  alert(`Numbers are equal`);
}
