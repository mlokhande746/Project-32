const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var score=0;

function preload(){
  polygon_img=loadImage("polygon.png");

  getTime();
}

function setup() {
  createCanvas(1600,800);

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  base1=new Ground(620,400,280,5);
  base2=new Ground(1200,320,280,5);

  box1=new Box(530,378,30,40);
  box2=new Box(560,378,30,40);
  box3=new Box(590,378,30,40);
  box4=new Box(620,378,30,40);
  box5=new Box(650,378,30,40);
  box6=new Box(680,378,30,40);
  box7=new Box(710,378,30,40);

  box8=new Box(560,338,30,40);
  box9=new Box(590,338,30,40);
  box10=new Box(620,338,30,40);
  box11=new Box(650,338,30,40);
  box12=new Box(680,338,30,40);

  box13=new Box(590,298,30,40);
  box14=new Box(620,298,30,40);
  box15=new Box(650,298,30,40);

  box16=new Box(620,258,30,40);
  //box17=new Box(635,258,30,40);
  //box18=new Box(620,218,30,40);

  b1=new Box(1110,298,30,40);
  b2=new Box(1140,298,30,40);
  b3=new Box(1170,298,30,40);
  b4=new Box(1200,298,30,40);
  b5=new Box(1230,298,30,40);
  b6=new Box(1260,298,30,40);
  b7=new Box(1290,298,30,40);

  b8=new Box(1140,258,30,40);
  b9=new Box(1170,258,30,40);
  b10=new Box(1200,258,30,40);
  b11=new Box(1230,258,30,40);
  b12=new Box(1260,258,30,40);

  b13=new Box(1170,218,30,40);
  b14=new Box(1200,218,30,40);
  b15=new Box(1230,218,30,40);

  b16=new Box(1200,178,30,40);
 // b17=new Box(1215,178,30,40);

  //b18=new Box(1200,138,30,40);
  
  //fill("yellow");
  polygon=Bodies.circle(200,50,20);
  World.add(world,polygon);
  
  slingshot=new Slingshot(this.polygon,{x:200,y:300});

}

function draw() {
   background(0);  
   Engine.update(engine);
   
   fill("red");
   textSize(20);
   text("Score:-"+score,750,40);

   base1.display();
   base2.display();

   box1.display();
   box1.score();
   box2.display();
   box2.score();
   box3.display();
   box3.score();
   box4.display();
   box4.score();
   box5.display();
   box5.score();
   box6.display();
   box6.score();
   box7.display();
   box7.score();

   box8.display();
   box8.score();
   box9.display();
   box9.score();
   box10.display();
   box10.score();
   box11.display();
   box11.score();
   box12.display();
   box12.score();

   box13.display();
   box13.score();
   box14.display();
   box14.score();  
   box15.display();
   box15.score();

   box16.display();
   box16.score();
  // box17.display();

  // box18.display();

   b1.display();
   b1.score();
   b2.display();
   b2.score();
   b3.display();
   b3.score();
   b4.display();
   b4.score();
   b5.display();
   b5.score();
   b6.display();
   b6.score();
   b7.display();
   b7.score();

   b8.display();
   b8.score();
   b9.display();
   b9.score();
   b10.display();
   b10.score();
   b11.display();
   b11.score();
   b12.display();
   b12.score();

   b13.display();
   b13.score();
   b14.display();
   b14.score();
   b15.display();
   b15.score();

   b16.display();
   b16.score();
  // b17.display();

  // b18.display();

   imageMode(CENTER);
   image(polygon_img,polygon.position.x,polygon.position.y,40,40);

   slingshot.display();

}

function mouseDragged(){
	Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

async function getTime(){
  
  var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo");
  var responseJSON=response.json();
  var dt=response.datetime;
  var hour=dt.slice(11,13);

  if(hour>=06 && hour<=19){
    background("light blue");
  }
  else{
    background("black");
  }
}
