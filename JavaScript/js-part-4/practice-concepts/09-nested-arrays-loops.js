// Topic: Iterating Multi-dimensional Arrays
console.log("--- Nested Array Traversal ---");
const heroes = [
    ["ironman", "spiderman", "thor"],
    ["superman", "batman", "flash"]
];

for (let i = 0; i < heroes.length; i++) {
    console.log(`List #${i + 1}:`);
    for (let j = 0; j < heroes[i].length; j++) {
        console.log(` - ${heroes[i][j]}`);
    }
}
