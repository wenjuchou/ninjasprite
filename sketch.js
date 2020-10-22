const CANVAS_WIDTH = 700;
const CANVAS_HEIGHT = 500;
const BG_COLOR = [255, 253, 120];

let ninja;
let ninjaAnimR;
let ninjaAnimL;

function preload() {
  const NinjaRSpriteSheet = loadSpriteSheet("Ninja/NinjaR.png", 50, 50, 5);
  const NinjaLSpriteSheet = loadSpriteSheet("Ninja/NinjaL.png", 50, 50, 5);
  ninjaAnimR = loadAnimation(NinjaRSpriteSheet);
  ninjaAnimL = loadAnimation(NinjaLSpriteSheet);
  ninja = createSprite(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 5, 50, 50);
  ninja.moveSpeed = 4;
}

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  ninja.addAnimation("moveR", ninjaAnimR);
  ninja.addAnimation("moveL", ninjaAnimL);
  ninja.addImage("still", loadImage("Ninja/Ninja-1.png"));
  ninja.setDefaultCollider()
}


function update(object) {
  if (keyDown("up") || keyDown("down") || keyDown("left") || keyDown("right")) {
    if (keyDown("up")) {
      object.addSpeed(2, 270);
    }
    if (keyDown("down")) {
      object.addSpeed(2, 90);
    }
    if (keyDown("left")) {
      object.addSpeed(2, 180);
      object.mirrorX(-1);
    }
    if (keyDown("right")) {
      object.addSpeed(2, 0);
      object.mirrorX(1);
    }
  } else {
    object.setSpeed(0);
  }
  drawObject(object);
}

function drawObject(object) {
  if (object.getSpeed() > 0.0001) {
    object.changeAnimation("moveR");
  } else {
    object.changeImage("still");
  }
  ninja.limitSpeed(ninja.moveSpeed);
  drawSprite(object);
}

function draw() {
  background(BG_COLOR);
  update(ninja);
}