class Plinko {
  constructor(x,y,r){
 var options={
     isStatic:true
 }
  this.x=x;
  this.y=y;
  this.r=r;
  this.body=Bodies.circle(this.x,this.y,this.r/2,options)
  World.add(world,this.body)
  }
  display(){
    ellipseMode(CENTER)
    ellipse(this.x,this.y,this.r,this.r)
  }
}