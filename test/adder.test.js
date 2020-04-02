import { add } from "../src/adder";

describe('adder tests', function () {
  it('Adding two positive integers', () =>{
    expect(add(3,4)).toBe(7);
  });
});
