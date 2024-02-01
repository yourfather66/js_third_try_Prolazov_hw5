let userNum = +prompt(`Enter your num`, `123321`);
let firstDigit = parseInt(userNum / 100000);
let secondDigit = parseInt((userNum / 10000) % 10);
let thirdDigit = parseInt((userNum / 1000) % 10);
let fourthDigit = parseInt((userNum / 100) % 10);
let fifthDigit = parseInt((userNum / 10) % 10);
let sixthDigit = userNum % 10;

if (
  firstDigit === sixthDigit &&
  secondDigit === fifthDigit &&
  thirdDigit === fourthDigit
) {
  console.log(`the number is mirrored`);
} else {
  console.log(`the number is not mirrored`);
}
