// 12. Integer to Roman

var intToRoman = function (num) {
  let chart = new Map([
    ["1", "I"],
    ["2", "II"],
    ["3", "III"],
    ["4", "IV"],
    ["5", "V"],
    ["6", "VI"],
    ["7", "VII"],
    ["8", "VIII"],
    ["9", "IX"],
    ["10", "X"],
    ["20", "XX"],
    ["30", "XXX"],
    ["40", "XL"],
    ["50", "L"],
    ["60", "LX"],
    ["70", "LXX"],
    ["80", "LXXX"],
    ["90", "XC"],
    ["100", "C"],
    ["200", "CC"],
    ["300", "CCC"],
    ["400", "CD"],
    ["500", "D"],
    ["600", "DC"],
    ["700", "DCC"],
    ["800", "DCCC"],
    ["900", "CM"],
    ["1000", "M"],
    ["2000", "MM"],
    ["3000", "MMM"],
  ]);

  let arrOutput = [];
  let roman = [];
  let result = "";
  const sNumber = num.toString();

  for (var i = 0, len = sNumber.length; i < len; i += 1) {
    arrOutput.push(+sNumber.charAt(i));
  }

  let stringified = arrOutput.map((n) => `${n}`);

  for (i = 0; i <= stringified.length; i++) {
    if (i + 1 === stringified.length) {
      roman.push(stringified[i]);
    }
    if (i + 2 === stringified.length) {
      stringified[i] += "0";
      roman.push(stringified[i]);
    }
    if (i + 3 === stringified.length) {
      stringified[i] += "00";
      roman.push(stringified[i]);
    }
    if (i + 4 === stringified.length) {
      stringified[i] += "000";
      roman.push(stringified[i]);
    }
  }

  for (i = 0; i < roman.length; i++) {
    if (roman[i] === "0" || roman[i] === "00" || roman[i] === "000") continue;
    else {
      result += chart.get(roman[i]);
    }
  }

  return result;
};

intToRoman(1201);
