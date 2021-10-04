const getTheTitles = function(arr) {
   let titleArr = [];
   for(let i=0; i<arr.length; i++)
   titleArr.push(arr[i].title);
   return titleArr;
};

// const getTheTitles = function(arr) {
//     arr.map(book => book.title);
//  };

// Do not edit below this line
module.exports = getTheTitles;
