let x,y,spacing,diameter,diameter2
let nin = 0;
let nin2 = 0;
function setup() {
  createCanvas(1920,1080);
  
  spacing = 50;
  diameter =25;
  noStroke();
  rectMode(CENTER);
}

function draw() {
  
      background(0);
  nin = nin+0.005;
      let nout = sin(nin);
      console.log(nout);
      diameter = map(nout,-1,1,2,49);
  
  
  for (x=spacing/2;x<width;x=x+spacing){
    
    for(y=spacing/2;y<height;y=y+spacing){
     
      
      rect(x,y,diameter,diameter);
    }
  }
  
        
}



