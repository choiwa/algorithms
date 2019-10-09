var maxSubArray = function(nums) {
    let output = undefined;
    
       for (let i = 0; i < nums.length; i += 1) {
         let head = nums.slice(i);
         let sum = 0;

         for (let j = 0; j < head.length; j += 1) {
           sum += head[j];

           if (output === undefined || output < sum) {
             output = sum;
           }
         }
       }

       return output;
};