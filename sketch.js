let x;

let scene1;
let scene2;
let scene3;
let started = false;

let button1;
let button2;
let button3;
let button4;
let button5;
let button6;
let button7;
let button8;
let button9;
let button10;
let button11;
let button12;
let button13;
let button14;
let button15;

let game;

let sceneList = [];
let currentScene;

function preload(){
  lake= loadImage("lake.png");
  school= loadImage("school.png");
  jim= loadImage("jim.png");
  blu= loadImage("blue.png");
  scripps= loadImage("scripps.png");
  prep= loadImage("prep.png");
  town= loadImage("town.png");
  dances= loadImage("dance.png");
  coast= loadImage("coast.png");
  HW= loadImage("HW.png");
  bar= loadImage("bar.png");
  deb= loadImage("deb.png");
  street= loadImage("street.png");
  denison= loadImage("denison.png");
  room= loadImage("room.png");

  
/////GUY//////
  pw= loadImage("PW.gif");
  paddle= loadImage("Paddle.gif");
  camp= loadImage("717.gif");
  emo= loadImage("EMO.gif");
  tinyQuinn= loadImage("tinyQuinn.gif");
  home= loadImage("home.gif");
  fam= loadImage("FAM.gif");
  ak= loadImage("AK.gif");
  kkarp= loadImage("kkarp.gif");
  halloween= loadImage("Halloween.gif");
  zo= loadImage("zo.gif");
  robot= loadImage("robot.gif");
  squad= loadImage("squad.gif");
  debs= loadImage("DEBS.gif");
  frank= loadImage("frank.gif");

//////MUSIC/////
  roxy= loadSound("Pearl.mp3");
  mercy= loadSound("My Lady of Mercy.mp3");
  anotherGirl= loadSound("Another Girl, Another Planet.mp3");
  ripple= loadSound("Ripple.mp3");
  mapp= loadSound("Get Out the Map.mp3");
  soul= loadSound("Lady Grinning Soul.mp3");
  feilds= loadSound("Absolutely Cuckoo.mp3");
  rain= loadSound("Only Happy When It Rains.mp3");
  dance= loadSound("Dance Dance.mp3");
  rollin= loadSound("Rollin.mp3");
  hot= loadSound("HOT TO GO.mp3");
  disco= loadSound("I Destroyed Disco.mp3");
  fly= loadSound("Human Fly.mp3");
  banana= loadSound("Bananaphone.mp3");
  roads= loadSound("Country Roads.mp3");
}

function setup() {
  createCanvas(400, 400);
  
  scene1 = new Scene(lake,new Guy(paddle, 300,300), roxy);
  scene2 = new Scene(school, new Guy(robot,300,300), mercy);
  scene3 = new Scene(deb,new Guy(debs,300,300), anotherGirl);
  scene4 = new Scene(blu, new Guy(fam,300,300), ripple);
  scene5 = new Scene(denison, new Guy(home,300,300), mapp);
  scene6 = new Scene(prep, new Guy(frank,300,300), soul);
  scene7 = new Scene(scripps, new Guy(squad,300,300), feilds);
  scene8 = new Scene(room, new Guy(tinyQuinn,400,400), rain);
  scene9 = new Scene(town, new Guy(emo,300,300), dance);
  scene10 = new Scene(street, new Guy(pw, 450,450), rollin);
  scene11 = new Scene(dances, new Guy(zo,300,300), hot);
  scene12 = new Scene(coast, new Guy(ak,300,300), disco);
  scene13 = new Scene(HW, new Guy(halloween,300,300), fly);
  scene14 = new Scene(jim, new Guy(kkarp,300,300), banana);
  scene15 = new Scene(bar, new Guy(camp,300,300), roads);

  currentScene = scene1;

  sceneList.push(scene1);
  sceneList.push(scene2);
  sceneList.push(scene3);
  sceneList.push(scene4);
  sceneList.push(scene5);
  sceneList.push(scene6);
  sceneList.push(scene7);
  sceneList.push(scene8);
  sceneList.push(scene9);
  sceneList.push(scene10);
  sceneList.push(scene11);
  sceneList.push(scene12);
  sceneList.push(scene13);
  sceneList.push(scene14);
  sceneList.push(scene15);
  
  game = new Game(sceneList);

 

  button1 = createButton("Mother of Pearl- Roxy Music")
  button2 = createButton("My Lady of Mercy- The Last Dinner Party ")
  button3 = createButton("Another Girl, Another Planet- The Only Ones")
  button4 = createButton("Ripple- Grateful Dead")
  button5 = createButton("Get Out the Map- Indigo Girls")
  button6 = createButton("Lady Grinning Soul- David Bowie")
  button7 = createButton("Absolutely Cuckoo- The Magnetic Fields")
  button8 = createButton("Only Happy When It Rains- Garbage")
  button9 = createButton("Dance, Dance- Fall Out Boy")
  button10 = createButton("Rollin- Limp Bizkit")
  button11 = createButton("HOT TO GO!- Chappell Roan")
  button12 = createButton("I Destroyed Disco- The Dare")
  button13 = createButton("Human Fly- The Cramps")
  button14 = createButton("Bananaphone- Raffi")
  button15 = createButton("Take Me Home, Country Roads- John Denver")

  button1.mousePressed(Press1)
  button2.mousePressed(Press2)
  button3.mousePressed(Press3)
  button4.mousePressed(Press4)
  button5.mousePressed(Press5)
  button6.mousePressed(Press6)
  button7.mousePressed(Press7)
  button8.mousePressed(Press8)
  button9.mousePressed(Press9)
  button10.mousePressed(Press10)
  button11.mousePressed(Press11)
  button12.mousePressed(Press12)
  button13.mousePressed(Press13)
  button14.mousePressed(Press14)
  button15.mousePressed(Press15)

  button1.parent("s");
  button2.parent("s");
  button3.parent("s");
  button4.parent("s");
  button5.parent("s");
  button6.parent("s");
  button7.parent("s");
  button8.parent("s");
  button9.parent("s");
  button10.parent("s");
  button11.parent("s");
  button12.parent("s");
  button13.parent("s");
  button14.parent("s");
  button15.parent("s");

  button1.class("button-class")
  button2.class("button-class")
  button3.class("button-class")
  button4.class("button-class")
  button5.class("button-class")
  button6.class("button-class")
  button7.class("button-class")
  button8.class("button-class")
  button9.class("button-class")
  button10.class("button-class")
  button11.class("button-class")
  button12.class("button-class")
  button13.class("button-class")
  button14.class("button-class")
  button15.class("button-class")

}

function Press1(){
  currentScene.stop();
  currentScene = scene1;
}

function Press2(){
  currentScene.stop();
  currentScene = scene2;
}

function Press3(){
  currentScene.stop();
  currentScene = scene3;
}

function Press4(){
  currentScene.stop();
  currentScene = scene4;
}

function Press5(){
  currentScene.stop();
  currentScene = scene5;
}

function Press6(){
  currentScene.stop();
  currentScene = scene6;
}

function Press7(){
  currentScene.stop();
  currentScene = scene7;
}

function Press8(){
  currentScene.stop();
  currentScene = scene8;
}

function Press9(){
  currentScene.stop();
  currentScene = scene9;
}

function Press10(){
  currentScene.stop();
  currentScene = scene10;
}

function Press11(){
  currentScene.stop();
  currentScene = scene11;
}

function Press12(){
  currentScene.stop();
  currentScene = scene12;
}

function Press13(){
  currentScene.stop();
  currentScene = scene13;
}

function Press14(){
  currentScene.stop();
  currentScene = scene14;
}

function Press15(){
  currentScene.stop();
  currentScene = scene15;
}



function draw() {
  background("pink");
  
  if (started == true) {
   game.update();
   currentScene.start();
  }else{
    textSize(15)
    textAlign(CENTER)
    text("click", 200,200);
  }}

function mousePressed(){
  started = true;

}
  
/////////CLASSES/////////////////////////////////////////////////////////
class Guy{
  constructor(img, w, h){
    this.img = img; 
    this.w = w;
    this.h=h;
    this.x = 0;
    this.xSpeed = 3;
  }

  update() {
    if (keyIsPressed) {
      if (keyCode == RIGHT_ARROW) {
        this.x += this.xSpeed;
      }
      if (keyCode == LEFT_ARROW) {
        this.x -= this.xSpeed;
      }
    }
    imageMode(CENTER)
    image(this.img,this.x,300,this.w,this.h);
  }
  
  atEdge() {
    if (this.x > width) {
      this.x = 0;
      currentScene.stop();
      return true;
    } else {
      return false;
    }
  }
}

class Scene {
  constructor(img, Guy, music) {
    this.img = img;
    this.Guy = Guy;
    this.music = music;
    this.musicStarted = false;

  }

  update() {
    imageMode(CORNER)
    background(this.img);
    this.Guy.update();
  }

  checkEdge() {
    return this.Guy.atEdge();
  }

  start(){
    if(this.musicStarted == false){
      this.music.play();
      this.musicStarted = true;
    }
  }

  stop(){
    if(this.musicStarted == true){
      this.music.stop();
      this.musicStarted = false;
    }
  }
}

class Game{
  constructor(sceneL){
   this.sceneList = sceneL 
  }
  
  update(){
    for (let i = 0; i < this.sceneList.length; i++) {
      if (this.sceneList[i] == currentScene) {
        this.sceneList[i].update();
        if (this.sceneList[i].checkEdge()) {
          if (i != this.sceneList.length - 1) {
            currentScene = this.sceneList[i + 1];
          } else {
            currentScene = this.sceneList[0];
          }
        }
      }
    }
  }
}
  