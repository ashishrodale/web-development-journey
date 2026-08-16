// Topic: While Loops & Break Conditions
console.log("--- While Loop with Break ---");
let i = 1;
while (i <= 5) {
    if (i === 3) {
        console.log("Loop stopped at 3 using break keyword");
        break;
    }
    console.log(`Value: ${i}`);
    i++;
}
