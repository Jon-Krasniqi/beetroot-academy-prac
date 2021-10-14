var result = window.prompt("Please enter your name:", "Filan Fisteku");
console.log(result);

// alert("Screen height " + screen.height);
// alert("Screen width " + screen.width);

function getWindowWidth() {
  return "This window's width is " + window.innerWidth;
}

function getWindowHeight() {
  return "This window's height is " + window.innerHeight;
}

console.log(getWindowHeight(), getWindowWidth());
