/**
 * Assignment Question 6: Same Last Digit Checker
 * Description: Checks if two given numbers have the same last digit using the modulo operator (%).
 */

let num1 = 32;
let num2 = 47852;

// Extract last digit using modulo operator (%)
if (num1 % 10 === num2 % 10) {
    console.log(`Numbers have the same last digit which is ${num1 % 10}`);
} else {
    console.log("Numbers don't have the same last digit");
}
