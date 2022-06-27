let romanToInt = function(s) {
  let numbers = [];

  for(let z = 0; z < s.length; z++){
    if(s[z] === "I"){
      numbers.push(1);
    }
    if(s[z] === "V"){
      numbers.push(5);
    }
    if(s[z] === "X"){
      numbers.push(10);
    }
    if(s[z] === "L"){
      numbers.push(50);
    }
    if(s[z] === "C"){
      numbers.push(100);
    }
    if(s[z] === "D"){
      numbers.push(500);
    }
    if(s[z] === "M"){
      numbers.push(1000)
    }
  };

  let equals = 0;
  let reverse = numbers.reverse();

  reverse.map((x, y, arr) => {
    for(let i = 0; i < arr.length; i++){
      let b = arr[i + 1];
      let c = arr.length -1;
      let d = arr[i];

      if(b === undefined){
        b = arr[c];
      };
      if(arr[i] === b){
        return equals += d;
      }
      return;
    };
  });

  if(equals != 0){
    return equals;
  };
    return reverse.reduce((first, second) => {
    if(first > second){
      return first - second;
    }
    if(first < second){
      return first + second;
    }
  });
};

console.log(romanToInt("LVIII")) //expected 3
//MCMXCIV expected(1994)