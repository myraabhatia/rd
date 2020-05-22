class drop{
constructor(){
this.x = rand(0,width);
this.y = rand(0,height);
this.update();
}
draw(){

    if(Math.random()>0.1)
    fill("pink");
else
    fill("yellow");
rect(this.x,this.y,6,10);

}
update(){
this.y+=20;
if(this.y>height+80){
this.y = rand(0,50)
this.x = rand(0,width);

}
this.draw();

}
 
}
function rand(min,max){
return (random(min,max))

}
