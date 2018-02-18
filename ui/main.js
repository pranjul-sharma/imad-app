console.log('Loaded!');

//Change the text of the main text
var element = document.getElementById("main-text");

element.innerHTML = "New Value set using main.js file";

//moving image to left somewhat
var img = document.getElementById("test-img");

img.onclick = function() {
  img.style.marginLeft = '100px';  
};