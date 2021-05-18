// Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has.

// For each kid check if there is a way to distribute extraCandies among the kids such that he or she can have the greatest number of candies among them. Notice that multiple kids can have the greatest number of candies.

// Input: candies = [2,3,5,1,3], extraCandies = 3
// Output: [true,true,true,false,true]
// Explanation:
// Kid 1 has 2 candies and if he or she receives all extra candies (3) will have 5 candies --- the greatest number of candies among the kids.
// Kid 2 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids.
// Kid 3 has 5 candies and this is already the greatest number of candies among the kids.
// Kid 4 has 1 candy and even if he or she receives all extra candies will only have 4 candies.
// Kid 5 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids.

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */

//FIRST SOLUTION

var kidsWithCandies = function(candies, extraCandies) {
    let mostCandies = 0;
    let output = [];
    //interate through candies
    candies.forEach((num) => {
        //find highest number of candies
        if (num > mostCandies) {
            mostCandies = num;
        }
    })
    //interate through candies
    candies.forEach((num) => {
        //add extra candies to index
        let newSum = num + extraCandies;
        //if equal or greater than highest number of candies
        if (newSum >= mostCandies) {
            //add true to output arr
            output.push(true);
        } else {
            //if not add false to output arr
            output.push(false)
        }
    })
    return output;
};