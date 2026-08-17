// ==========================================
// 1. OBJECT LITERALS & CREATING A POST
// ==========================================
console.log("--- 1. Object Literals & Creating a Post ---");

const post = {
    username: "@ashishrodale",
    content: "This is my #firstpost",
    likes: 150,
    reposts: 5,
    tags: ["@aas", "@ash1"]
};

console.log("Full Post Object:", post);


// ==========================================
// 2. GET VALUES & CONVERSION IN GET VALUES
// ==========================================
console.log("\n--- 2. Accessing & Converting Values ---");

// Accessing values using dot and bracket notation
console.log("Username (Dot Notation):", post.username);
console.log("Likes (Bracket Notation):", post["likes"]);

// Automatic string conversion of key names in JS
const obj = {
    1: "a",
    2: "b",
    true: "c",
    null: "d",
    undefined: "e"
};

console.log("Accessing key '1' (converted string):", obj[1]); // JS converts 1 to "1"
console.log("Accessing key 'true':", obj[true]);


// ==========================================
// 3. ADD / UPDATE VALUES
// ==========================================
console.log("\n--- 3. Add & Update Values ---");

const student = {
    name: "Ashish",
    age: 20,
    marks: 89.5,
    city: "Mumbai"
};

// Updating existing values
student.city = "Delhi";
student.marks = "A+"; // Changing data type dynamically

// Adding a new key-value pair
student.gender = "Male";

// Deleting a property
delete student.marks;

console.log("Updated Student Object:", student);


// ==========================================
// 4. NESTED OBJECTS
// ==========================================
console.log("\n--- 4. Nested Objects ---");

const classInfo = {
    ashish: {
        grade: "A+",
        city: "Delhi"
    },
    rohit: {
        grade: "A",
        city: "Pune"
    }
};

console.log("Ashish's Grade from Nested Object:", classInfo.ashish.grade);


// ==========================================
// 5. ARRAY OF OBJECTS
// ==========================================
console.log("\n--- 5. Array of Objects ---");

const classArray = [
    { name: "Ashish", grade: "A+", city: "Delhi" },
    { name: "Rohit", grade: "A", city: "Pune" },
    { name: "Suman", grade: "O", city: "Mumbai" }
];

console.log("First Student Name:", classArray[0].name);
console.log("Second Student City:", classArray[1].city);


// ==========================================
// 6. MATH OBJECT & RANDOM INTEGERS
// ==========================================
console.log("\n--- 6. Math Object & Random Numbers ---");

console.log("Math.PI:", Math.PI);
console.log("Math.abs(-12):", Math.abs(-12));
console.log("Math.pow(2, 4):", Math.pow(2, 4));
console.log("Math.floor(5.999):", Math.floor(5.999));
console.log("Math.ceil(5.001):", Math.ceil(5.001));

// Generating a random integer between 1 and 100
let randomNum = Math.floor(Math.random() * 100) + 1;
console.log("Random Integer (1 to 100):", randomNum);

// Generating a random integer between 1 and 5
let random1to5 = Math.floor(Math.random() * 5) + 1;
console.log("Random Integer (1 to 5):", random1to5);
