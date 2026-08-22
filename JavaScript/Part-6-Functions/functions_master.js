// ==========================================================
// JAVASCRIPT PART 6: COMPLETE FUNCTIONS & MODULE PRACTICE
// ==========================================================

console.log("%c=== JS PART 6: FUNCTIONS MASTER SCRIPT LOADED ===", "color: #38bdf8; font-weight: bold; font-size: 14px;");

// 1. Basic Function Syntax
function hello() {
    console.log("hello");
}
hello();

function printName(name) {
    console.log(name);
}
printName("Ashish");

// 2. Dice Roller Logic (PQ1 & PQ2)
function rollDice() {
    let rand = Math.floor(Math.random() * 6) + 1;
    console.log("Dice Rolled Result:", rand);
}
rollDice();

// 3. Average Calculator (PQ3)
function calcAverage(a, b, c) {
    let avg = (a + b + c) / 3;
    console.log(`Average of ${a}, ${b}, ${c} is:`, avg);
}
calcAverage(10, 20, 30);

// 4. Multiplication Table Generator (PQ4)
function printTable(n) {
    console.log(`--- Multiplication Table of ${n} ---`);
    for (let i = n; i <= n * 10; i += n) {
        console.log(i);
    }
}
printTable(5);

// 5. Sum from 1 to N (PQ5)
function getSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
console.log("Sum from 1 to 5:", getSum(5));

// 6. Array String Concatenation (PQ6)
let sampleStrings = ["hi", "hello", "bye", "!"];
function concat(strArr) {
    let result = "";
    for (let i = 0; i < strArr.length; i++) {
        result += strArr[i];
    }
    return result;
}
console.log("Concatenated Array Strings:", concat(sampleStrings));

// 7. Elements Larger Than N (AQ1)
function getLargerElements(arr, num) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log("Elements larger than 5 in [1,4,6,8,2,9]:", getLargerElements([1, 4, 6, 8, 2, 9], 5));

// 8. Extract Unique Characters from String (AQ2)
function getUniqueChars(str) {
    let unique = "";
    for (let i = 0; i < str.length; i++) {
        if (!unique.includes(str[i])) {
            unique += str[i];
        }
    }
    return unique;
}
console.log("Unique Chars of 'abcdabcdefggh':", getUniqueChars("abcdabcdefggh"));

// 9. Find Longest Country Name (AQ3)
function getLongestCountry(countries) {
    let longest = "";
    for (let i = 0; i < countries.length; i++) {
        if (countries[i].length > longest.length) {
            longest = countries[i];
        }
    }
    return longest;
}
console.log("Longest Country Name:", getLongestCountry(["Australia", "Germany", "United States of America"]));

// 10. Vowel Counter (AQ4)
function countVowels(str) {
    let count = 0;
    let vowels = "aeiouAEIOU";
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log("Vowel Count in 'ApnaCollege':", countVowels("ApnaCollege"));

// 11. Random Number in Range (AQ5)
function getRandomInRange(start, end) {
    let diff = end - start;
    return Math.floor(Math.random() * (diff + 1)) + start;
}
console.log("Random Number between 10 and 20:", getRandomInRange(10, 20));
