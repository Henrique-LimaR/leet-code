let romanToInt = function(s) {
  let result = [];

  for(let z = 0; z < s.length; z++){
    if(s[z] === "I"){
      result.push(1);
    }
    if(s[z] === "V"){
      result.push(5);
    }
    if(s[z] === "X"){
      result.push(10);
    }
    if(s[z] === "L"){
      result.push(50);
    }
    if(s[z] === "C"){
      result.push(100);
    }
    if(s[z] === "D"){
      result.push(500);
    }
    if(s[z] === "M"){
      result.push(1000)
    }
  };

  let final = result.length - 1;
  final
  
  for(let i = 0; i < final; final--){
    i++
  };

  return result.reduce((acc, cur) => {
    if(acc >= cur){
      return acc + cur;
    }
      return cur - acc;
  });
};

console.log(romanToInt("MCMXCIV"))
