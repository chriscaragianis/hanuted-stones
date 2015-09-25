var game = new Phaser.Game(800, 600, Phaser.CANVAS, '', { preload: preload, create: create, update: update });
var birdObj = new BirdStatue();

function preload() {

  game.load.spritesheet('birdStatue', 'assets/birdStatue.png',50,50);
}

function create() {
  game.world.setBounds(0,0,5600,600);
  introFlight();
}

function update() {
  var cursors = game.input.keyboard.createCursorKeys();
  birdObj.flying = cursors.left.isDown;
  birdObj.talking = cursors.right.isDown;
  if (!cursors.left.isDown && !cursors.right.isDown){
    birdObj.reset();
  }
  birdObj.advance();
  bird.frame = birdObj.draw();
  
}
