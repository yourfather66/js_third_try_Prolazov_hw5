let userNum = +prompt(`Enter your three-digit num`, `123`);
let userNumFirstDigit = parseInt(userNum / 100);
let userNumSecondDigit = parseInt((userNum / 10) % 10);
let userNumThirdDigit = userNum % 10;
let userNumFirstAct =
  (userNumFirstDigit + userNumSecondDigit + userNumThirdDigit) % 2;
let userNumSecondAct =
  (userNumFirstDigit + userNumSecondDigit + userNumThirdDigit) % 5;
let userNumThirdAct =
  userNumFirstDigit * userNumSecondDigit * userNumThirdDigit;

console.log(`${userNumFirstAct} , ${userNumSecondAct} , ${userNumThirdAct}`);

if (userNumFirstAct) {
  alert(`
  Sum of the numbers is not even`);
} else if (!userNumFirstAct) {
  alert(`Sum of the numbers is even`);
}

if (userNumSecondAct) {
  alert(`Sum of numbers is not a multiple of five`);
} else if (!userNumSecondAct) {
  alert(`Sum of numbers is a multiple of five`);
}

if (userNumThirdAct > 100) {
  alert(`Product of numbers bigger than 100`);
} else if (userNumThirdAct < 100) {
  alert(`Product of numbers less than 100`);
} else {
  alert(`Product of numbers equals 100`);
}
