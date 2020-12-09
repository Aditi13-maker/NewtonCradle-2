class Rope1{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.1,
            length: 200
        }
       

        this.pointB = pointB
       // this.sling = Constraint.create(options);
      //  World.add(world, this.sling);
    }

    //fly(){
    //    this.sling.bodyA = null;
   // }
    attach(body){
        this.sling.bodyA=body
    }
    display(){
        push()
        if(this.sling.bodyA){

            
            strokeWeight(5);
            stroke(white)
            line (this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.pointB.x,this.pointB.y)
            }
            pop()
        }
    
    
}