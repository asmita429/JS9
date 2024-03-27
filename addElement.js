// Adding Elements

// document.createElement('p')

// appendChild( element )
// append( element ) //append(element/string) in same line
// prepend( element ) // append in starting/first
// insertAdjacentElement( where, element)

let newP = document.createElement("p");
console.dir(newP); //p obj

newP.innerText = "Hi, I am a new paragraph";

// select a parent & append
let box = document.querySelector(" .box");
box.appendChild(newP); //added at last

let btn = document.createElement("button");
btn.innerText = "click me";
// box.appendChild(btn); //adds btn inside box
newP.append(btn); // adds btn inside paragraph

newP.append("this is new text"); 

//adds paragraph at beginning of box
// box.prepend(newP);

// see insert adjacent mdn
// beforebegin, afterbegin, beforeend, afterend

btn.innerHTML = "new btn";
let p = document.querySelector('p');
p.insertAdjacentElement("beforebegin", btn); //before paragraph
p.insertAdjacentElement("afterbegin", btn); //after para starts
p.insertAdjacentElement("afterend", btn);

// Removing elements

// removeChild( element )
// remove( element )

let body = document.querySelector("body");
body.removeChild(btn);

p.insertAdjacentElement("afterend", btn);
btn.remove(); //removes btn

p.remove(); //removes paragraph

body.remove(); //remove whole body
