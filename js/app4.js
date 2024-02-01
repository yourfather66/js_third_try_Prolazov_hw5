let userNum = +prompt(`Enter your num`, `12`);
let userLastNum = userNum % 10;
let userNumParity = userLastNum % 2;
if (userNumParity === 0) {
  alert(`Last num is even = ${userLastNum}`);
} else if (userNumParity !== 0) {
  alert(`Last num is not even = ${userLastNum}`);
}
