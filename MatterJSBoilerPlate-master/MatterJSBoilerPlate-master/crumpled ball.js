class paper{
    constructor(x,y,r,angle){
        var options={
            isStatic:false,
            friction:0.5,
            restitution:0.3,
            density:1.2
          }
        this.body =Bodies.circle(x,y,r/2,options,angle);
        this.r = r;
        Matter.Body.setAngle(this.body,angle);

        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;

        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill("lightgreen");
        stroke("black");
        strokeWeight(3);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}
