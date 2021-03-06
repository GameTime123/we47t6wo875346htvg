class SlingShot{
    constructor(bodyA, pointB){
        this.sling1=loadImage('sprites/sling1.png')
        this.sling2=loadImage('sprites/sling2.png')
        this.sling3=loadImage('sprites/sling3.png')
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }


    display(){
        image(this.sling1,200,30)
        image(this.sling2,170,30)
        image(this.sling3,190,30)
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke(48,22,8);
            strokeWeight(10);
            line(pointA.x, pointA.y, pointB.x-16, pointB.y+10);
            line(pointA.x, pointA.y,pointB.x+25,pointB.y+5);
            
        }
    }
    
}