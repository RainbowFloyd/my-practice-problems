// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

/**
 * @param {number[]} nums
 * @return {number[]}
 */

//FIRST SOLUTION

var runningSum = function(nums) {
    //track curr sum
    let sum = 0;
    let output = []
        //iterate through nums
    nums.forEach((num) => {
        //add curr num to sum
        sum = sum + num
        //add sum to output arr
        output.push(sum)
    })
    //return output
    return output;
};

//SECOND SOLUTION

// var runningSum = function(nums) {
//     let output = []
//     nums.forEach((num) => {
//         if (output.length > 0) {
//             output.push(output[output.length - 1] + num)
//         } else {
//             output.push(num)
//         }
//     })
//     return output;
// };