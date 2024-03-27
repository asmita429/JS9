// Using Properties & Methods

// 1.innerText: shows the visible text contained in a node
let para = document.querySelector('p');
console.log(para);

console.log(para.innerText); //show all text that are on screen
// hidden text are not shown

// 2.textContent: shows all the full text
console.log(para.textContent); //shows full content + \n + hidden text

// 3.innerHTML: shows full markup
console.log(para.innerHTML); //shows markup, tags + content


// manipulation

// para.innerText= "Hi, I am Peter Parker";
console.log(para);

para.innerHTML = "Hi, I am <b>Peter Parker</b>";

let heading = document.querySelector('h1');
console.log(heading);

// heading.innerHTML = "<u> Spider Man </u>";
heading.innerHTML = `<u> ${heading.innerHTML} </u>`;


// Manipulating attributes
// id, class, style, src,...

// obj.getAttribute( attr) //obj.setAttribute( attr, value)

let img = document.querySelector('img');

img.getAttribute('id');
img.setAttribute('id', 'spidermanImg');

img.setAttribute('src', 'assets/creation_3.jpeg');

img.getAttribute('class'); //null

img.setAttribute('class', 'images'); //creates new class .images to img tag.

// Manipulating style

console.log(img.style);

console.log(heading.style);

heading.style.color = 'green';
heading.style.backgroundColor = 'lightblue';

// change color of links inside box
let links = document.querySelectorAll(".box a");

for (link of links){  //inline style
    link.style.color = "green";
}

let box = document.querySelector('.box'); //external style
box.style.backgroundColor = "orange"; //cannot change css file's style

