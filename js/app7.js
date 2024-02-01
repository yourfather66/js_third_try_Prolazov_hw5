let userNum = +prompt(`Enter your three-digit num`, `123`);
let userNumFirstDigit = parseInt(userNum / 100);
let userNumSecondDigit = parseInt((userNum / 10) % 10);
let userNumThirdDigit = userNum % 10;

if (
  userNumFirstDigit === userNumSecondDigit &&
  userNumSecondDigit === userNumThirdDigit
) {
  alert(`All of digits are aquel`);
} else {
  alert(`All of digits are not aquel`);
}

if (userNumFirstDigit === userNumSecondDigit) {
  console.log(`first digit and second digit are equal`);
} else if (userNumSecondDigit === userNumThirdDigit) {
  console.log(`second digit and third digit are equal`);
} else if (userNumFirstDigit === userNumThirdDigit) {
  console.log(`first digit and third digit are equal`);
}
