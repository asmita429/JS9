// add following elements using JS & DOM

// a <p> with red text
let para1 = document.createElement('p');
para1.innerText = "hello I am red";

document.querySelector("body").append(para1);

para1.classList.add("red");

// a <h3> with blue text
let h3 = document.createElement('p');
h3.innerText = "heading blue";

document.querySelector("body").append(h3);

h3.classList.add("blue");

// div with black border & pink bg eith h1 & p

let div = document.createElement("div");
let h1 = document.createElement("h1");
let p = document.createElement('p');

h1.innerText ="I'm in a div";
p.innerText = "ME TOO!"; 

div.append(h1);
div.append(p);
div.classList.add("pink");

document.querySelector("body").prepend(div);

// Practice Qs

let input = document.createElement("input");
document.querySelector("body").append(input);

let button = document.createElement("button");
button.innerText = "Click me";
document.querySelector("body").append(button);

// change placeholder value to "username" & id of btn to "btn"
input.setAttribute("placeholder", "username");
button.setAttribute("id", "btn");

// access btn using querySelector & id.
let btn = document.querySelector("#btn");
btn.classList.add("red");

// create h1 element & change color
let h2 = document.createElement("h1");
h2.innerText = "DOM Practice";
document.querySelector("body").append(h2);

h2.classList.add("underline");

// p tag, with bold Delta
let para2 = document.createElement("p");
para2.innerHTML = "Apna College <b>Delta</b> Practice.";
document.querySelector("body").append(para2);
