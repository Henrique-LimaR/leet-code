let main = function(arr){
  arr.map((item, index, arr) => {
    if(item){
     return index; 
    } else {
      return arr.indexOf(index * 3);
    };
  });
};

console.log('Hello World!', main([1,2,3,4,]));
