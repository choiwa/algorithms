var moveZeroes = function(nums) {
  //     let zeros = [];
      
  //     while (nums.indexOf(0) !== -1) {
  //         nums.splice(nums.indexOf(0), 1);
  //         zeros.push(0);
  //     }
      
  //     return nums.push(...zeros);
      nonZeros = 0;
      
      for ( let i = 0; i < nums.length; i += 1) {
          const curr = nums[i];
          
          if (curr !== 0) {
              nums[nonZeros++] = curr;
          }
      }
      
      for (let j = nonZeros; j < nums.length; j += 1) {
          nums[j] = 0;
      }
      
      return nums;
  };