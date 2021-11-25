let RANDOM = -1;
let VERT = 1;
let ROUGE = 0;
let BLEU= 2;

let NB_BALLES_MAX = 200;
let boule = new Array(NB_BALLES_MAX);

function setup()
{
  createCanvas(400,300);
  strokeWeight(1);
  stroke(10,120);
  background(235,240,255);
  smooth();
  
  for (let i = 0; i < NB_BALLES_MAX; i++){
    boule[i] = new balle(floor(random(2.99))); 
    boule[i].updatePos();
  }
    
}

function draw()
{
    
  for(let j = 0; j < NB_BALLES_MAX-1; j++)
    for(let i = j + 1; i < NB_BALLES_MAX; i++)
    {
      collisionBalle(boule[j],boule[i]);
    }
    
  for (let i = 0; i < NB_BALLES_MAX; i++){
    boule[i].updatePos();   
  }
    
}

class balle
{
  constructor(col)
  {
    this.r=0;
    this.g=0;
    this.b=0;
    this.x = random(width);
    this.y = random(height);
    
    this.velX = random(3) + 2;
    this.velY = random(3) + 2;
    
    this.rayon = random(20) + 10;
    switch (col)
    {
    case 0:
        this.r = round(random(260) + 95);
        this.g = round(random(50));
        this.b = round(random(50));
    break;
    case 1:
        this.r = round(random(50));
        this.g = round(random(260) + 95);
        this.b = round(random(50));
    break;
    case 2:
        this.r = round(random(50));
        this.g = round(random(50));
        this.b = round(random(260) + 95);
    break;
    default:
        this.r = round(random(255));
        this.g = round(random(255));
        this.b = round(random(255));
    break;
    }
    

  }
  
  updatePos()
  {
    this.x += this.velX;
    this.y += this.velY;
    
    if (this.x > width || this.x < 0)
    this.velX *= -1;
    if (this.y > height || this.y < 0)
    this.velY *= -1;
      
    if ((this.x-width) > 20)
        this.x = random(width);
    else if (this.x < -20)
        this.x = random(width);
    if (this.y-height > (height + 20))
        this.y = random(height);
    else if (this.y < -20)
        this.y = random(height);
    
    fill(this.r,this.g,this.b,100);
    ellipse(this.x,this.y,this.rayon,this.rayon);
  }
  
  changeVit()
  {
    this.velX += (random(2) - 1.5);
    this.velY += (random(2) - 1.5);
    
    if (this.velX >= 5)
    this.velX = 2.5;
    if (this.velY >= 5)
    this.velY = 2.5;  
  }
}

function collisionBalle(boule1, boule2)
{
  let distance;
  let xTmp,yTmp;
  let rayonTmp;
  
  rayonTmp = (boule1.rayon + boule2.rayon)/2;
  xTmp = boule1.x - boule2.x;
  yTmp = boule1.y - boule2.y;
  
  distance = sqrt(pow(xTmp,2) + pow(yTmp,2));
  
  if (rayonTmp > distance)
  {
    if (boule1.derniereBoule != boule2 && boule1.derniereBoule2 != boule2 && boule2.derniereBoule2 != boule1)
    {
      boule1.derniereBoule2 = boule1.derniereBoule;
      boule2.derniereBoule2 = boule2.derniereBoule;
      boule1.derniereBoule = boule2;
      boule2.derniereBoule = boule1;
      
      boule1.changeVit();
      boule2.changeVit();
      
      boule1.velX *= -1;
      boule1.velY *= -1;
      boule2.velX *= -1;
      boule2.velY *= -1;
      

    }
  }

}

