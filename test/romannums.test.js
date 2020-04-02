import { romanToInt } from "../src/romannums";

/*
I
II
III
IV
V
VI
VII
VIII
IX
X
99	XCIX
40  XL
45  XLV

I = 1	C = 100
V = 5	D = 500
X = 10	M = 1000
L = 50

I -> V, X
X -> C, L
*/

describe('roman numeral tests', function () {
  it('I = 1', () =>{
    expect(romanToInt("I")).toBe(1);
  });
  it('II = 2', () => {
    expect(romanToInt('II')).toBe(2);
  });
  it('V = 5', () => {
    expect(romanToInt('V')).toBe(5);
  });
  it('IV = 4', () => {
    expect(romanToInt('IV')).toBe(4);
  });
});
