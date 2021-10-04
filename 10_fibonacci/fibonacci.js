const fibonacci = function(num) {
 let num1 = 1, num2 = 1, num3;
 for(let i=1; i<num; i++){
     num3 = num1 + num2;
     num1 = num2;
     num2 = num3;
 }
 if(num < 0)
 return "OOPS";
 else
 return num1;
};

// Do not edit below this line
module.exports = fibonacci;
