// ==========================================================
// JAVASCRIPT PART 9: DOM MANIPULATION MASTER PRACTICE
// ==========================================================

// 1. Selecting Elements by ID, Class, and Tag Name
let mainHeading = document.getElementById("mainImg");
let smallImages = document.getElementsByClassName("oldImg");
let paragraphs = document.getElementsByTagName("p");

// 2. Query Selectors
let firstP = document.querySelector("p");
let allBoxLinks = document.querySelectorAll(".boxLink");

// 3. Setting Content in Objects
let desc = document.querySelector("#description");
// desc.innerHTML = "<b>Updated Description Text</b>";

// 4. Manipulating Attributes
let mainImgElement = document.querySelector("#mainImg");
let currentId = mainImgElement.getAttribute("id");

// 5. Manipulating Style & classList Property
let box = document.querySelector(".box");
box.style.backgroundColor = "lightgray";
box.classList.add("box-shadow-active");

// 6. Navigation on Page (Parent, Children, Siblings)
let boxUl = document.querySelector(".box ul");
let boxParent = boxUl.parentElement;

// 7. Adding & Removing Elements on Page
let newBtn = document.createElement("button");
newBtn.innerText = "Click Me";
document.body.append(newBtn);
