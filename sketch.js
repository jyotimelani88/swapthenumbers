var a = prompt("Enter the first number");
var b = prompt("Enter the second number");
var c

function setup() {
  createCanvas(400, 400);
  c = createButton("SWAP THE NUMBERS")
  c.mousePressed(swap)
}

function draw() {
  background(220);
}

function swap()
{
  [a,b] = [b,a];

  console.log("the first no after swapping: ", +a);
  console.log("the second no after swapping: ", +b);
}