
function findGCD(numerator, denomerator) { //greatest comman divisor

  let divisor =
    numerator < denomerator
      ? Math.floor(numerator / 2)
      : Math.floor(denomerator / 2);
  if (numerator < denomerator) {
    if (denomerator % numerator === 0) return numerator;
  }
  else{
    if (numerator % denomerator === 0) return denomerator;
  }

  while (divisor > 0) {
    // console.log(divisor)
    if (divisor <= 1) return -1;

    if (numerator % divisor === 0 && denomerator % divisor === 0) {
      return divisor;
    } else {
      divisor--;
    }
  }
}
console.log("gdc: ", findGCD(27, 36));
