// Node.js Execution Context, Global Process & Module Imports

console.log("=== Node.js Fundamentals & Module System ===");

// 1. Process Object Inspection
console.log("Node Version:", process.version);
console.log("Current Working Directory:", process.cwd());
console.log("Process ID:", process.pid);

// 2. Importing Custom Modules
const math = require('./math');

console.log("\n--- Math Module Operations ---");
console.log("Addition (10 + 5):", math.add(10, 5));
console.log("Multiplication (10 * 5):", math.multiply(10, 5));
console.log("PI Constant:", math.PI);

// 3. Command-Line Arguments Parsing
const args = process.argv.slice(2);
if (args.length > 0) {
    console.log("\n--- Command Line Arguments Received ---");
    args.forEach((arg, index) => {
        console.log(`Argument ${index + 1}: ${arg}`);
    });
} else {
    console.log("\nNo extra command-line arguments passed. (Pass args like: node index.js hello world)");
}
