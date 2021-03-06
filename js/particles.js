
window.onload = function(){
    // Creating the Canvas
    var canvas = document.createElement("canvas"), 
        c = canvas.getContext("2d"),
        particles = {},
        particleIndex = 0,
        particleNum = 0.55;
    var bgc = "#5DB4F4";
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.id = "motion";
    document.body.appendChild(canvas);
    

    function Particle(){
        this.x = canvas.width/2;
        this.y = canvas.height/2;
      
        this.vx = Math.random() * 5 - 2.5;
        this.vy = Math.random() * 2 - 1;
      
        this.growth = ( Math.abs(this.vx) + Math.abs(this.vy) ) * 0.007;
      
        particleIndex++;
        particles[particleIndex] = this;
        this.id = particleIndex;
        this.size = Math.random() * 1;
        this.colors = [
          "rgba(64,169,244,"+ (Math.random() + .5) +")",
          "rgba(106,150,182,"+ (Math.random() + .5) +")",
          "rgba(142,201,244,"+ (Math.random() + .5) +")",
          "rgba(33,81,117,"+ (Math.random() + .5) +")"];
        this.color = this.colors[Math.floor(Math.random() * 3)];
    }
   
    Particle.prototype.draw = function(){
      this.x += this.vx;
      this.y += this.vy;
      
      this.size += this.growth;
      if(this.x > canvas.width || this.y > canvas.height){
        delete particles[this.id];
      }

      c.fillStyle = this.color;
      c.beginPath();
      c.font = this.size*10 + "px Arial";
      c.fillText("z", this.x, this.y);

      c.fill();
    };
    
    setInterval(function(){
        c.fillStyle = bgc;
        c.fillRect(0,0,canvas.width,canvas.height);
        /*for (var i = 0; i < particleNum; i++){
            new Particle();
        }*/
        if(Math.random() > particleNum){
          new Particle();
        }
        for(var i in particles){
            particles[i].draw();
        }
    }, 30);
};

