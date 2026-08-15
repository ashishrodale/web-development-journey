// Topic: Dry Run Concepts & Iteration Tracking
console.log("--- Dry Run Concept Demo ---");
let sum = 0;
for (let i = 1; i <= 3; i++) {
    // Trace: i=1 -> sum=1 | i=2 -> sum=3 | i=3 -> sum=6
    sum += i;
    console.log(`Step ${i}: current sum is ${sum}`);
}
