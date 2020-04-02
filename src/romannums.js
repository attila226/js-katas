
export function romanToInt(roman) {
    const mapping = {
        I: 1,
        V: 5
    };

    var sum = 0;
    for (var idx=0; idx<roman.length; idx++) {
      var thisVal = mapping[roman.charAt(idx)];
      if ((idx < roman.length - 1)  
        && thisVal < mapping[roman.charAt(idx + 1)]){
          sum -= thisVal;
      } else {
        sum += thisVal;
      }
    }
    return sum;
}