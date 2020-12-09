class Bob2{
    constructor(x,y,r,color){
        var options = {
            isStatic:false,
            restitution:1,
            friction:0,
            frictionAir:0.0,
            density:1.2,
            slop:1,
            inertia:Infinity
        }
        this.x=x
        this.y=y;
        this.r=r
        this.color=color
        this.body=Bodies.circle(x,y,r/2,options)
        World.add(world, this.body);
    }
    display(){
        var paperpos =this.body.position;
        
        push();
        translate(paperpos.x, paperpos.y);
        rectMode(CENTER);
        strokeWeight(3);
        stroke("white")
        fill(this.color);
        ellipse(0, 0, this.r, this.r);
        pop();
      }
    




}