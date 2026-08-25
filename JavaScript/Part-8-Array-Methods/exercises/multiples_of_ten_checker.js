// Question : Check if all numbers in our arrat are multiples of 10 or not.
let nums = [ 10, 20, 30, 40];

let ans = nums.every((el) => el % 10 == 0);

console.log(ans);
