// Selecting elements
// 1. getElementById : returns the element as an obj or null(if not found)

document.getElementById("mainImg");
document.getElementById("description");
// document.gerElementById("notAvailable"); //null

// 2. getElementByClassName : returns the elements as an HTML Collection or empty collection

// document.getElementByClassName("oldImg");
// document.getElementByClassName("oldImg")[0];

let smallImages = document.getElementsByClassName("oldImg");

// for (let i=0; i<smallImages.length; i++) {
//     console.dir(smallImages[i].src);
// }

for (let i=0; i<smallImages.length; i++) {
    smallImages[i].src = "assets/spiderman_img.png";
    console.log(`value of image no. ${i} is changed.`);
}

// 3. getElementByTagName: returns the elements as an HTML collection or empty collection

document.getElementsByTagName("p");
document.getElementsByTagName("p")[1].innerText = "abc"; // 'abc'

document.getElementsByTagName("span"); // HTMLCollection [] empty


// Query Selectors
// allows us to use any CSS selector

document.querySelector('p'); // selects first p element
document.querySelector('#myId'); // selects first element with id = myId
document.querySelector('.myClass'); // selects first element with class = myClass

// pseudo elements .className: nth-of-type(2n+1);
document.querySelectorAll('p'); // selects all p element

console.dir(document.querySelector("h1")); //h1 obj

console.dir(document.querySelector("#description")); //p#description obj

console.dir(document.querySelector("div a")); //a.boxlink

console.dir(document.querySelectorAll("div a")); //NodeList(4)

