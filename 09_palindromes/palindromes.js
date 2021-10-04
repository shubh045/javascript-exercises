const palindromes = function (string) {
  let str = string.split(" ").join("").replace(/[^A-Za-z]/g, "");
  let revstr = '';
  for(let i=str.length-1;i>=0;i--)
  revstr += str[i];
  if(revstr.toLowerCase() === str.toLowerCase())
  return true;
  else 
  return false;
};

// Do not edit below this line
module.exports = palindromes;
