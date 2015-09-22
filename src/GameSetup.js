var game = new Phaser.Game(800, 600, Phaser.CANVAS, '', { preload: preload, create: create, update: update });
var birdObj = new BirdStatue();
birdObj.flying = true;

function preload() {

  game.load.spritesheet('birdStatue', 'assets/birdStatue.png',50,50);
}

function create() {
  game.world.setBounds(0,0,5600,600);

  bird = game.add.sprite(400, 400, 'birdStatue');

}

function update() {

  birdObj.advance();
  bird.frame = birdObj.draw();
  
}
