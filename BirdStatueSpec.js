QUnit.test("BirdStatue construction", function(assert) {
  var blank = [0,0,0,0];
  var birdTest = new BirdStatue();
  assert.deepEqual(birdTest.frame, blank, "Frame correct");
  assert.deepEqual(birdTest.flying, false, "Flying correct");
  assert.deepEqual(birdTest.talking, false, "Talking correct");

  birdTest.flying = true;
  birdTest.talking = true;
  birdTest.looking = 2;
  for (var i = 0; i < 256 + 41; i++) {
    birdTest.advance()
  }
  var newFrame = [3,2,1,0];
  assert.deepEqual(birdTest.frame, newFrame, "Frame correct after advancing"); 
});


