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


let game = [];

const TOTAL_PINS = 10;

export function frameIsSpare(frame) {
  let frameHasTwoRolls = frame.length === 2 && frame[1] !== 0;
  return (frameHasTwoRolls && (frame[0] + frame[1]) === TOTAL_PINS);
}

export function frameIsStrike(frame) {
  let frameHasOneRoll = frame.length === 1;
  return (frameHasOneRoll && frame[0] === TOTAL_PINS);
}

export function frameIsComplete(frame, is_strike) {
  return is_strike(frame) || frame.length === 2;
}


export class BowlingGame {
  constructor() {
      this.score = 0;
      this.frame =  0;
      this.frameRoll = 0;
      this.pinsLeft = 10;
      this.bonus = 0;
  }
  roll(pins, isDebug = false) {
    if(isDebug){
      console.log(`bonus ${this.bonus}`);
    }

    this.addBonus(pins);
    this.frameRoll++;
    this.pinsLeft -= pins;

    // either a spare or a strike
    if (this.isStrike()) {
        this.bonus += 2;
    } else if (this.isSpare()) {
        this.bonus++;
    } 
    if(this.isEndOfFrame()){
      this.reset();
    }

    this.score += pins;

    if(isDebug){
      console.log(`score = ${this.score}, pins: ${pins}, pinsLeft: ${this.pinsLeft}, bonus ${this.bonus}`)
    }
  }

  isEndOfFrame(){
    return (this.pinsLeft === 0 || this.frameRoll > 1);
  }

  isStrike() {
    return this.pinsLeft === 0 && this.frameRoll === 1;
  }

  isSpare(){
    return this.pinsLeft === 0 && this.frameRoll > 1;
  }

  addBonus(pins) {
    if (this.bonus >= 1) {
        this.score += pins
        this.bonus--;
    }
  }

  reset() {
    // All of the things that happen on a new frame
    this.pinsLeft = 10;
    this.frame++;
    this.frameRoll = 0;
  }

  getScore() {
    return this.score;
  }
}