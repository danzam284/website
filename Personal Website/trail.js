var prevEvent, currentEvent;
document.documentElement.onmousemove=function(event){
  currentEvent=event;
}
var prevSpeed = 0;
var speed;

setInterval(function(){
    if(prevEvent && currentEvent) {
        var movementX=Math.abs(currentEvent.screenX-prevEvent.screenX);
        var movementY=Math.abs(currentEvent.screenY-prevEvent.screenY);
        var movement=Math.sqrt(movementX*movementX+movementY*movementY);
        speed=10*movement;
        if (speed > 1500) {
            close = 0.2;
        } else {
            close = 0.6;
        }
    }
    prevEvent=currentEvent;
    prevSpeed=speed;
}, 100);


var close = 0.6;
var dots = [],
mouse = {
    x: 0,
    y: 0
};

// The Dot object used to scaffold the dots
var Dot = function() {
 this.x = 0;
 this.y = 0;
 this.node = (function(){
   var n = document.createElement("div");
   n.className = "trail";
   document.body.appendChild(n);
   return n;
 }());
};
// The Dot.prototype.draw() method sets the position of 
 // the object's <div> node
Dot.prototype.draw = function() {
    if (speed > 1500) {
        this.node.style.background = "rgb(51, 255, 255)";
    } else {
        this.node.style.background = "#01303F";
    }
    this.node.style.left = this.x + 50 + "px";
    this.node.style.top = this.y + 50 + "px";
};

// Creates the Dot objects, populates the dots array
for (var i = 0; i < 100; i++) {
 var d = new Dot();
 dots.push(d);
}

// This is the screen redraw function
function draw() {
 // Make sure the mouse position is set everytime
   // draw() is called.
 var x = mouse.x,
     y = mouse.y;
 
 // This loop is where all the 90s magic happens
 dots.forEach(function(dot, index, dots) {
   var nextDot = dots[index + 1] || dots[0];
   
   dot.x = x;
   dot.y = y;
   dot.draw();
   x += (nextDot.x - dot.x) * close;
   y += (nextDot.y - dot.y) * close;

 });
}

addEventListener("mousemove", function(event) {
 //event.preventDefault();
 mouse.x = event.pageX;
 mouse.y = event.pageY;
});

// animate() calls draw() then recursively calls itself
 // everytime the screen repaints via requestAnimationFrame().
function animate() {
 draw();
 requestAnimationFrame(animate);
}

// And get it started by calling animate().
animate();


document.addEventListener('click', event => {
    for (let i = 0; i < dots.length; i++) {
        dots[i].x += Math.random() * 10000 - 5000;
        dots[i].y += Math.random() * 10000 - 5000;
    }
});