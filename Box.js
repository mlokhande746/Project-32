class Box{
    constructor(x,y,width,height){
        var a={
            
            restitution:0.4,
            friction:0.0,
        }
        this.Visiblity=255;
        this.body=Bodies.rectangle(x,y,width,height,a);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    
    }
    score(){
        if(this.Visiblity<0 && this.Visiblity>-105){
            score++;
        }
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
       
         if(this.body.speed<3){
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("white");
        rect(0,0,this.width,this.height);
        pop();
    }
    else{
        World.remove(world,this.body);
        push();
        tint(255,this.Visiblity);
        this.Visiblity=this.Visiblity-5;
        pop();
     }
    }
    };