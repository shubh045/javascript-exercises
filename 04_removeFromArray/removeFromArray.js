const removeFromArray = function(arr) {
    let newArray = Array.from(arguments)
   for(let i=0; i<arr.length;i++){
     for(let j=0; j<newArray.length; j++){
       if(arr[i] === newArray[j]){
           arr.splice(i, 1);
           i--;
       }
    }
   }
   return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
