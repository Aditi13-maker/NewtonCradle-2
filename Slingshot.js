class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1,
            angularStiffness:1,
            length: 200
        }
       

        this.pointB = pointB
        this.pointX=bodyA.x
        this.pointY=bodyA.y-250
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }
    attach(body){
        this.sling.bodyA=body
    }
    display(){
       
        if(this.sling.bodyA){
            var pointA=this.sling.bodyA.position;
            var pointB=this.pointB
            push()
            strokeWeight(3.5);
            stroke("#fff")

            line (this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.pointB.x,this.pointB.y)
            pop()
        }
 
        }
    
    
}