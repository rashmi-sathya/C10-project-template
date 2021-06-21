var btn_red;
var btn_green;

var r = 0;
var g = 0;
var b = 0;

function setup() 
{
  
  createCanvas(400, 400);
  
  btn_red = createButton("RED");
  btn_red.position(100,50);
  btn_red.mousePressed(red_bg);

  btn_green = createButton("GREEN");
  btn_green.position(250,50);
  btn_green.mousePressed(green_bg);
}

function red_bg() 
{
  background('rgb(225,0,0)');

 
}

function green_bg() 
{
  background('rgb(0,225,0)');
}

