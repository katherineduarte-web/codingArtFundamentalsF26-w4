

let x,y;
let colorPalette = ['#f9e88a', '#f4d77e', '#f1c572', '#e2b460', '#d49e4c', '#b78c80', '#a578a6', '#8c6ba4', '#6b5ca0', '#4a4e9c'];
let rotspeed1,angle;



function setup() {
  // Create a canvas that fills the entire browser window
  createCanvas(windowWidth, windowHeight);

  angleMode(DEGREES); // 0--360 degrees
  
  rotspeed1 = 0.1;
  angle = 0;


}

function draw() { 
  // Set background to black
  background(0,5);
  
  
  push();
   translate(width/2, height/2);
   let circleSize = width/2;

   for(let i = 0; i < 10; i++){

   let spacing = circleSize/10;

   noFill();
   stroke (colorPalette[i]);
   strokeWeight(2);
   rotate(angle);
   circle(0, 0, circleSize);
   circleSize -= spacing;

   line (0,0, circleSize/2, 0);
    
   }
   

  
  pop();

  angle += rotspeed1;
  }

  
