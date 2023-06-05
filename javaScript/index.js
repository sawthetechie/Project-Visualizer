var canvas = document.querySelector("#myCanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var con =canvas.getContext("2d");

var rectMaxHeight = 500;
var point = 200;
var rectWidth = 50;
var rectInitialX = canvas.width ;
var rectInitialY = 1000;
var rectSpawn = [];
var rectHeight = 1;
var velo = 10;
var veloY = 10;
var top;
var rectY =rectInitialY;
var rectX =rectInitialX/2;
var index = 0;
var colorArray =[
    '#247ba0',
    '#70c1b3',
    '#b2dbbf',
    '#f3ffbd',
    '#ff1654',
]
console.log(canvas.width);

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
})

function  init(){
    var rectX =rectInitialX/2;
    var velo = 10;
    var veloY = 10;
    circleArray = [];
    for (var index = 0; index < 5; index++) {
        rectSpawn[index] = new equaliserStick(rectX,rectY,rectWidth,rectHeight,velo,veloY);
        rectX += 55;
        velo += 5;
        veloY += 5;
    }
}
  

function equaliserStick(rectX,rectY,rectWidth,rectHeight, velo,veloY){

     this.rectX = rectX;
     this.rectY = rectY;
     this.rectWidth = rectWidth;
     this.rectHeight = rectHeight;
     
     this.point = point;
     this.rectInitialX = rectInitialX;
     this.rectInitialY = rectInitialY;
     this.velo = velo;
     this.veloY = veloY;
     this.colorChoice = colorArray[Math.floor(Math.random() * colorArray.length)];



    this.draw = function(){
     con.fillStyle = this.colorChoice;
     con.fillRect(this.rectX,this.rectY,this.rectWidth,this.rectHeight);
    }

    this.update = function(){
        
        this.draw();
        
        if(this.rectY <= this.point || this.rectY > this.rectInitialY){
            this.veloY = -this.veloY;
       }
    
       if(this.rectHeight >= (this.rectInitialY - this.point) || this.rectHeight < 0){
        this.velo = -this.velo;
       }
    
        this.rectHeight += this.velo;
        this.rectY -= this.veloY;
    }
    

}

    for (var index = 0; index < 5; index++) {
        rectSpawn[index] = new equaliserStick(rectX,rectY,rectWidth,rectHeight,velo,veloY);
        rectX += 55;
        velo += 5;
        veloY += 5;
    }

function rectanimation(){
    requestAnimationFrame(rectanimation);
    con.clearRect(0,0,canvas.width,canvas.height);
    
    for (var index = 0; index < rectSpawn.length; index++) {
        rectSpawn[index].update(); 
     }
    
}
rectanimation();


