function transformString(str) {
  // Check if the input is a string and not empty ("")
  if (typeof str !== "string" || str.length === 0) {
    return `Invalid input. ${
      str.length === 0
        ? "Please provide a non-empty string."
        : "Input must be a string"
    }`;
  }

  // Convert string to an array then reverse the array then join the array back to a string
  let reversedStr = str.split("").reverse().join("");

  // Hash map for vowel sounds
  const vowelPositions = {
    a: "1",
    e: "5",
    i: "9",
    o: "15",
    u: "21",
  };

  //  Using regEx to to match vowel sounds with the reversedStr
  reversedStr = reversedStr.replace(
    /[aeiou]/gi,
    (match) => vowelPositions[match.toLowerCase()]
  );

  // Capitalize every second character
  let transformedStr = "";
  for (let i = 0; i < reversedStr.length; i++) {
    if (i % 2 !== 0) {
      transformedStr += reversedStr[i].toUpperCase();
    } else {
      transformedStr += reversedStr[i];
    }
  }
  //   for (let i = 0; i < reversedStr.length; i++) {
  //     transformedStr +=
  //       i % 2 === 0 ? reversedStr[i].toUpperCase() : reversedStr[i];
  //   }

  // Append the length of the original string
  transformedStr += str.length;

  return transformedStr;
}

console.log(transformString("CodelabLLC"));
