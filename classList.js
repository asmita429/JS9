// Manipulating Style

// obj.classList

// classList.add() to add new classes
// classList.remove() to remove classes
// classList.contains() to check if class exists
// classList.toggle() to toggle between add & remove

let img = document.querySelector('img');
console.log(img.classList); //empty value, there is no class for this element

let heading = document.querySelector('h1');
console.log(heading.classList); // empty value

heading.classList.add("green");
heading.classList.add("underline");
// heading.setAttribute('class', 'green'); //can access only one class at a time, bad way
console.log(heading.classList);

heading.classList.remove("underline");
heading.classList.contains("green"); //true

heading.classList.toggle("beauty"); // yes/no, if class exists then remove it, else add it

console.log(heading.classList);

let box = document.querySelector(".box");
box.classList.add("yellowBG");

console.log(box.classList);

// Navigation 
// parentElement, children, previousElementSibling/ nextElementSibling

let h4 = document.querySelector("h4");
console.log(h4.parentElement); //div.box.yellowBG
console.log(h4.children); //[]

box = document.querySelector(".box");
console.log(box.children); //[h4, ul]
console.log(box.childElementCount); //2

let ul = document.querySelector(".box ul");
console.log(ul.children); // [li, li, li]

console.log(h4.nextElementSibling); //ul
console.log(ul.previousElementSibling); //h4

img = document.querySelector("img");
// console.log(img.previousElementSibling);
img.previousElementSibling.style.color = "gold";

