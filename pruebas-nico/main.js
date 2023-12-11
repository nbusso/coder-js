/*
INSTRUCTIONS

Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/

const countPositivesSumNegatives = input => {
    let result = [];
    if (input) {
        if (Math.abs(input[0]) != 0 || Math.abs(input[1]) != 0) {
            result = [0, -0];
            for (i = 0; i < input.length; i++) {
                if (input[i] > 0) {
                    result[0] += 1;
                } else {
                    result[1] += input[i];
                }
            }
        }
    } 
    return result;
}


console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
console.log(countPositivesSumNegatives());
console.log(countPositivesSumNegatives([0, 92, 6, 1]));

// let result = [];

// console.log(result);

// result[0] = 1;
// console.log(result);

// result[1] = 10;
// console.log(result);