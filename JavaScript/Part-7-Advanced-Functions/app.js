// ==========================================================
// JAVASCRIPT PART 7: OBJECTS, ARROW FUNCTIONS & TIMERS MASTER
// ==========================================================

console.log("%c=== JS PART 7 MASTER SCRIPT RUNNING ===", "color: #38bdf8; font-weight: bold; font-size: 14px;");

// 1. 'this' in JavaScript
const student = {
    name: "Ashish",
    math: 95,
    eng: 90,
    phy: 85,
    getAvg() {
        let avg = (this.math + this.eng + this.phy) / 3;
        console.log(`${this.name} got average marks = ${avg}`);
    }
};
student.getAvg();

// 2. Try & Catch Block
console.log("\n--- Try & Catch Demo ---");
try {
    console.log(a); // Undefined variable triggers error
} catch (err) {
    console.log("Caught an error! Variable 'a' does not exist.");
}

// 3. Arrow Functions & Implicit Return
const sum = (a, b) => a + b;
const mul = (a, b) => a * b;
const cube = n => n * n * n; // Single parameter without parentheses

console.log("Arrow Sum (5 + 3):", sum(5, 3));
console.log("Implicit Cube (3^3):", cube(3));

// 4. SetTimeOut Function
console.log("\n--- setTimeout Demo ---");
console.log("Hi there!");
setTimeout(() => {
    console.log("Apna College (Executed after 2 seconds)");
}, 2000);

// 5. SetInterval & ClearInterval Function
console.log("\n--- setInterval Demo ---");
let count = 0;
let intervalId = setInterval(() => {
    count++;
    console.log(`Interval Tick #${count}`);
    if (count === 3) {
        clearInterval(intervalId);
        console.log("Interval cleared after 3 ticks.");
    }
}, 1000);

// 6. 'this' with Arrow Functions vs Normal Functions
const user = {
    name: "Aman",
    marks: 95,
    prop: this, // Global scope (Window)
    getName: function () {
        return this.name; // Normal function: 'this' refers to calling object
    },
    getMarks: () => {
        return this.marks; // Arrow function: lexical 'this' (Window)
    }
};

// 7. Practice Questions Solutions (PQ1 & PQ2)
console.log("\n--- Practice Questions ---");
// PQ1: Arrow function returning square of n
const square = (n) => n * n;
console.log("PQ1 Square of 4:", square(4));

// PQ2: Print "Hello World" 5 times at 2s interval
// (Uncomment below to run locally)
/*
let printId = setInterval(() => {
    console.log("Hello World");
}, 2000);
setTimeout(() => {
    clearInterval(printId);
}, 10000);
*/

// 8. Assignment Questions Solutions (AQ1, AQ2, AQ3, AQ4)
console.log("\n--- Assignment Questions ---");

// AQ1: Arrow function arrayAverage
const arrayAverage = (arr) => {
    let total = 0;
    for (let number of arr) {
        total += number;
    }
    return total / arr.length;
};
console.log("AQ1 Array Average [1,2,3,4,5,6]:", arrayAverage([1, 2, 3, 4, 5, 6]));

// AQ2: Arrow function isEven
const isEven = (num) => num % 2 === 0;
console.log("AQ2 Is 4 even?:", isEven(4));

// AQ3: Output of object with setTimeout callback
const objectAQ3 = {
    message: 'Hello, World!',
    logMessage() {
        console.log(this.message);
    }
};
// setTimeout(objectAQ3.logMessage, 1000); // Outputs undefined because method loses context

// AQ4: Output of object callback invocation
let length = 4;
function callback() {
    console.log(this.length);
}
const objectAQ4 = {
    length: 5,
    method(fn) {
        fn();
    }
};
// objectAQ4.method(callback, 1, 2); // Outputs 4 or window.length in non-strict mode
