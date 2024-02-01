let userNum = +prompt(`Enter your two-digit num`);
let firstUserNumAct = parseInt((userNum / 10) % 10);
let secondUserNumAct = userNum % 10;

if (firstUserNumAct > secondUserNumAct) {
  alert(`First digit bigger than second`);
} else if (firstUserNumAct < secondUserNumAct) {
  alert(`Second digit bigger than first`);
} else {
  alert(`They are equal: ${firstUserNumAct} , ${secondUserNumAct}`);
}
