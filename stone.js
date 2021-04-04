class Stone{
  constructor(x, y,diametre) {
      var options = {
         isStatic:false,
         restitution:0,
         friction:1,
         density:1.2
      }
      this.body = Bodies.rectangle(x, y, width,height, options);
      this.width=80;
      this.height = 80;
      this.image = loadImage("stone.png");
      World.add(world, this.body);
    }
    display(){
      push();
      translate(this.body.position.x, this.body.position.y);
      imageMode(CENTER);
      image(this.image, 7, 160, this.width,this.height);
      
      pop();
    }
}