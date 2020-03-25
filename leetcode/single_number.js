//Given a non-empty array of integers, every element appears twice except for one. Find that single one.

// Input: [2,2,1]
// Output: 1

// Input: [4,1,2,1,2]
// Output: 4



/**
 * @param {number[]} nums
 * @return {number}
 */

//My original solution//

//iterate through nums
    //if num isnt in tracker obj
        //add num to tracker obj as true
    //if num is in tracker obj
        //set num to false
//iterate through tracker obj
    //if num is true
        //return num

const singleNumber = (nums) => {
    let tracker = {}
    nums.forEach((num) => {
        if (!tracker[num]) {
            tracker[num] = true;
        } else {
            tracker[num] = false;
        }
    });
    for (let num in tracker) {
        if (tracker[num] === true) {
            return num
        }
    }
};

//Optimal solution

// const singleNumber = (nums) => {
//   let num = 0;
//   for (let n of nums) {
//     console.log(num ^ n);
//     num ^= n;
//   }
//   return num;
// }