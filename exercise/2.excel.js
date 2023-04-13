function printString(columnNumber) {
  let columnName = [];
  while (columnNumber > 0) {
    let rem = columnNumber % 26;
    if (rem == 0) {
      columnName.push("Z");
      columnNumber = Math.floor(columnNumber / 26) - 1;
    } else {
      columnName.push(String.fromCharCode(rem - 1 + "A".charCodeAt(0)));
      columnNumber = Math.floor(columnNumber / 26);
    }
  }
  return columnName.reverse().join("");
}
console.log(printString(678));

// cara 2
function lettersToNumber(letter) {
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let panjang = alphabet.length;
  let hasil = 0;
  let r = /\d/;
  if (r.test(letter)) {
    return "input salah";
  } else {
    normalLetter = letter.toUpperCase();
    for (let j = 0; j < normalLetter.length; j++) {
      hasil = hasil * panjang + alphabet.indexOf(normalLetter[j]) + 1;
    }
  }
  return hasil;
}
console.log(lettersToNumber("a"));

//cara 3
function titleToNumber(s) {
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    result *= 26;
    result += s[i].charCodeAt(0) - "A".charCodeAt(0) + 1;
  }
  return result;
}
console.log(titleToNumber("AA"));
