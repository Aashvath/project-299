class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.image=loadImage("download.jpg");
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      console.log(this.body.speed);
      if(this.body.speed<3){
        var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      image(this.image,0,0,5,5)
      pop();
      }
      else{
      World.remove(world,this.body);
      this.visiblity = this.visiblity-5;
      tint(255,this.visiblity);
      image(this.image,0,0,5,5)
      }
    }
  };
  