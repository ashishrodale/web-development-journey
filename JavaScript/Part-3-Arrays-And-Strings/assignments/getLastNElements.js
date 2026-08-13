// Q2: Get last n elements of an array
function getLastNElements(arr, n) {
    return arr.slice(-n);
}
console.log("Q2 Output:", getLastNElements([7, 9, 0, -2], 3)); // [9, 0, -2]
