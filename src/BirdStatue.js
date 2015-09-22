var BirdStatue = function BirdStatue() {
  //[eye frame, wing frame, beak frame, color frame]
  this.frame = [0,0,0,0];
  this.flying = false;
  this.talking = false;
  //0 => straight ahead, 1 => left, 2 => down left
  this.looking = 0;
  this.clock = 0;


  this.advance = function() {
    this.clock = (this.clock + 1) % 500;
    if (this.flying && this.clock % 4 === 0) {
      this.frame[1] = (this.frame[1] + 1) % 3;
    }
    if (this.talking && this.clock % 5 === 0) {
      this.frame[2] = (this.frame[2] + 1) % 2;
    }

    this.frame[0] = this.looking;

    if (this.clock % 31 <= 5 && this.clock % 29 <= 10) {
      this.frame[0] = 3;
    } else {
      this.frame[0] = 0;
    }
  };

  this.draw = function() {
    if (this.frame[2] === 1) {
      return 12 + this.frame[0];
    }
    return (this.frame[1] * 4) + this.frame[0];
  };

  this.reset = function() {
    this.frame = [0,0,0,0];
  };
};
