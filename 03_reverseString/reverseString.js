const reverseString = function(str) {
const myArr = str.split("");
let newString = "";
for(let i=myArr.length-1; i>=0; i--){
 newString += myArr[i];
}
return newString;
};

// Do not edit below this line
module.exports = reverseString;
