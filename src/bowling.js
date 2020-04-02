// Write a BowlingGame object with methods roll(pins) and getScore().
// This will be the game engine which follows the rules of bowling:
// The game consists of 10 frames, in each frame the player has the ability to knock down 10 pins.
// The score for the frame is the total number of pins knocked down + bonuses for strikes and spares.
// A spare is when the player knocks down all 10 pins in 2 tries. The bonus for a spare is the next roll.
// A strike is when the player knocks down all 10 pins in 1 try. The bonus is the next 2 rolls.
// In the tenth frame a player who rolls a spare / strike gets an extra roll(s) to complete the frame.
// No more than 3 rolls can be rolled in the 10th frame.

// - - - [X] - - 
// current = previous = last = {}
// last = previous
// previous = current
// current = {}
// if pinesLeft == 0 then was strike or a spare ?
// if pinesleft > 0 then wasnt strike or spare 
export class BowlingGame {
  constructor() {
      this.score = 0;
      this.frame =  0;
      this.frameRoll = 0;
      this.pinsLeft = 10;
      this.bonus = 0;
  }
  roll(pins) {
    if (this.bonus > 1) {
        this.score += pins
        this.bonus--;
    }
    this.frameRoll++;
    this.pinsLeft -= pins;
    // either a spare or a strike
    if (this.pinsLeft === 0) {
      // this is the case for a spare 
      if (this.frameRoll > 1) {
        this.bonus++;
      }

    }
    this.score += pins;
  }

  getScore() {
    return this.score;
  }
}