var drops = [];

function setup() {
  createCanvas(800,400);
  frameRate(15);

  for(var i=0;i<100;i++){
drops.push(new drop());

  }

}

function draw() {
  background(0);  
  for(var i=0;i<drops.length;i++){
drops[i].draw();
drops[i].update();

  }


}