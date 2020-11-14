const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground;
var particles = [];
var plinkos = [];
var divisions = [];
var DivisionHeight = 300;


function setup(){
    var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(240,790,480,20);

    for(var j = 40; j <=480; j = j + 50 ){
       plinkos.push(new Plinko(j,40,20))
    }
    for(var j = 15; j <=480-10; j = j + 50 ){
        plinkos.push(new Plinko(j,140,20))
     }
     for(var j = 40; j <=480; j = j + 50 ){
        plinkos.push(new Plinko(j,240,20))
     }
     for(var j = 15; j <=480-10; j = j + 50 ){
         plinkos.push(new Plinko(j,340,20))
      }
    for(var k = 0; k <=480; k = k+80){
        divisions.push(new Division(k, 800-DivisionHeight/2,10,DivisionHeight));
     }
}

function draw(){
    background(0);    
    Engine.update(engine);
    
    fill("white");
    ground.display();
    

    for(var k = 0; k < divisions.length; k++){
        divisions[k].display();
     }
    
    for(var j = 0;j < plinkos.length; j++){
       plinkos[j].display();
    } 
    for(var j = 0;j < plinkos.length; j++){
        plinkos[j].display();
     } 
     for(var j = 0;j < plinkos.length; j++){
        plinkos[j].display();
     } 
     for(var j = 0;j < plinkos.length; j++){
        plinkos[j].display();
     } 
    for(var p = 0;p < particles.length; p++){
        particles[p].display();
     } 


     if(frameCount%60===0){
         particles.push(new Part(random(width/2+20,width/2-20),0,10) )
     }
   drawSprites();
}
