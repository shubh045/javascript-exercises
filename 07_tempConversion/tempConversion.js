const ftoc = function(numf) {
  let celsius = (numf - 32)*(5/9);
  let roundCel = Math.round(celsius * 10) / 10;
  return roundCel;
};

const ctof = function(numc) {
  let fahrenheit = numc * 9/5 + 32;
  let roundf = Math.round(fahrenheit * 10) / 10;
  return roundf;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
