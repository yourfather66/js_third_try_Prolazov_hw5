let userKm = +prompt(`Enter the km-s`, `1`);
let userFeet = +prompt(`Enter the feet`, `1`);
let userKmAction = userKm * 1000;
let userFeetAction = Math.round(userFeet * 0.305);

alert(
  userKmAction < userFeetAction ? `Km less than feet` : `Feet less than km`
);
