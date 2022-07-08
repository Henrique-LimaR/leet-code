let twoSum = function(nums, target){
    let n = nums.length;
    let result = 0; 
  for(let i = 0; i < n - 1; i++){
      for(let j = i + 1;j < n; j++){
        if(nums[i] + nums[j] === target){
          result = [i, j];
        };
      };
    };
  return result;
};
console.log(twoSum([1,2,4,3,4], 4))
