class droplet{
constructor(){
var options = {
'restitution': 0,
'friction': 1,
'density': 1
}
this.body = Bodies.circle(random(displayWidth/2 - 100,displaywidth/2 + 100),displayHeight/4,2,options);
this.radius = 2;
this.x = this.body.position.x;
this.y = this.body.position.y;
}

}