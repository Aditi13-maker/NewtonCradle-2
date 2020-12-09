
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	canvas=createCanvas(500,400);


	engine = Engine.create();
  world = engine.world;
 // let canvasmouse=Mouse.create(canvas.elt)
  //canvasmouse.pixelRatio=pixelDensity();
  //let options={
  //  mouse:canvasmouse
  //};

  //mConstraint=MouseConstraint.create(engine,options)
 // World.add(world,mConstraint)

	roofObject=new Ground(250,100,250,30)
	bobObject1=new Bob(150,300,50,0)
	bobObject2=new Bob2(200,300,50,1)
	bobObject3=new Bob2(250,300,50,2)
	bobObject4=new Bob2(300,300,50,3)
	bobObject5=new Bob(350,300,50,4)
	
	rope1=new SlingShot(bobObject1.body,{x:150,y:100})
	rope2=new SlingShot(bobObject2.body,{x:200,y:100})
	rope3=new SlingShot(bobObject3.body,{x:250,y:100})
	rope4=new SlingShot(bobObject4.body,{x:300,y:100})
	rope5=new SlingShot(bobObject5.body,{x:350,y:100})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  roofObject.display()
  background("black");
 
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();



  
  drawSprites();
 
}
function mouseDragged(){
 Matter.Body.setPosition(bobObject1.body,{x:mouseX,y:mouseY})

}


function keyPressed(){
  if(keyCode === 32){
      rope1.attach(bobObject1.body);
     rope2.attach(bobObject2.body);
     rope3.attach(bobObject3.body);
      rope4.attach(bobObject4.body);
      rope5.attach(bobObject5.body);

  }
}

