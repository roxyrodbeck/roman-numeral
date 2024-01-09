let i = 0;
let convert = "";

function convertToRoman(num) {
  const roman = {
    numerals: {
      1000: "M",
      900: "CM",
      500: "D",
      400: "CD",
      100: "C",
      90: "XC",
      50: "L",
      40: "XL",
      10: "X",
      9: "IX",
      5: "V",
      4: "IV",
      3: "III",
      2: "II",
      1: "I",
    },
    values: [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 3, 2, 1],
  };
// values are included to iterate through when subtracting the highest to see if you need to keep going.
  
  function converter(num, i) {
    let numStore = num;

  if (num <= 0 && convert.length == 0 || false || NaN) {
    return "not a valid number in roman numerals";

  } else if (numStore >= 5000) {
    return "please enter a smaller number";
    
// base case - the function iterates through all the roman.values to see if they match or if it's 0
  } else if (i > roman.values.length || numStore == 0) {
    return convert;
    
// if the number is greater than any of the index values it adds it ton the convert string and subtracts from highest roman value index it can from it, then reiterates through the array.
  } else if (numStore > roman.values[i]) {
    convert = convert.concat(roman.numerals[roman.values[i]]);
    numStore -= roman.values[i];
    return converter(numStore, i);

  // same but equal to
  } else if (numStore == roman.values[i]) {
    convert = convert.concat(roman.numerals[roman.values[i]]);
    numStore -= roman.values[i];
    return converter(numStore, i);

  // same but less than
  } else if (numStore < roman.values[i]) {
    return converter(numStore, i + 1);
  }
  }

  let converted = converter(num, i, convert);
  return converted.toUpperCase()
};

// console.log(convertToRoman(insert your numher here)); - type into JS console for practice
