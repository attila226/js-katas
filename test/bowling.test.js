import { BowlingGame } from "../src/bowling";

/*
Write a class named “Game” that has two methods
roll(pins : int) is called each time the player rolls a ball.  The argument is the number of pins knocked down.
score() : int is called only at the very end of the game.  It returns the total score for that game.
*/
describe('BowlingGame tests', function () {
  it('Rolling all zeros is zero', () =>{
    const bowlingGame = new BowlingGame();
    for (var i=0; i<20; i++) {
      bowlingGame.roll(0);
    }
    const score = bowlingGame.getScore();
    expect(score).toBe(0);
  });

  it('Rolling all ones will be 20', () =>{
    const bowlingGame = new BowlingGame();
    for (var i=0; i<20; i++) {
      bowlingGame.roll(1);
    }
    const score = bowlingGame.getScore();
    expect(score).toBe(20);
  });

  it('Rolling a spare returns correct score', () =>{
    const bowlingGame = new BowlingGame();
    bowlingGame.roll(3);    // 3 for frame 1 roll 1
    bowlingGame.roll(7);    // 7 for frame 1 roll 2
    bowlingGame.roll(5);    // 5 for frame 2 roll 1, which is 
                            // added into the first frame since it was a spare
    for (var i=0; i<17; i++) {
      bowlingGame.roll(0);
    }
    const score = bowlingGame.getScore();
    expect(score).toBe(20);
  });

  it('Rolling a strike returns correct score', () =>{
    const bowlingGame = new BowlingGame();
    bowlingGame.roll(10);    // 10 for frame 1 roll 1, strike
    bowlingGame.roll(7);    // 7 for frame 2 roll 1
    bowlingGame.roll(2);    // 2 for frame 2 roll 2
                            // added into the first frame since it was a spare
    for (var i=0; i<17; i++) {
      bowlingGame.roll(0);
    }
    const score = bowlingGame.getScore();
    expect(score).toBe(28);
  });

  it('Rolling a strike and a spare returns correct score', () =>{
    const bowlingGame = new BowlingGame();
    bowlingGame.roll(10);    // 10 for frame 1 roll 1, strike
    bowlingGame.roll(7);    // 7 for frame 2 roll 1
    bowlingGame.roll(3);    // 2 for frame 2 roll 2
    bowlingGame.roll(1);    // 1 for frame 3 roll 1
                            // added into the first frame since it was a spare
    for (var i=0; i<16; i++) {
      bowlingGame.roll(0);
    }
    const score = bowlingGame.getScore();
    expect(score).toBe(32);
  });

  it('Perfect game results in correct score', () =>{
    const bowlingGame = new BowlingGame();

    for (var i=0; i<12; i++) {
      bowlingGame.roll(10, true);
    }
    const score = bowlingGame.getScore();
    expect(score).toBe(300);
  });

});
