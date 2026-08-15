// Topic: Infinite Loop Logic & Prevention (Safeguarded Example)
console.log("--- Infinite Loop Prevention ---");
let counter = 1;
while (true) {
    if (counter > 3) {
        console.log("Controlled loop exit triggered via break.");
        break; // Prevents browser hanging
    }
    console.log(`Running safely, count: ${counter}`);
    counter++;
}
