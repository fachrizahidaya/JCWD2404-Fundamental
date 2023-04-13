//pengecekan dan filter untuk alphabet
let palindrome = "mobil, baru";
let arrAlpha = "abcdefghijklmnopqrstuvwxyz".split("");
//dipisah
palindrome = palindrome.split("");
palindrome = palindrome.filter((letter) => {
  return arrAlpha.includes(letter);
});
//digabung lagi
palindrome = palindrome.join("");
//proses pengecekan palindrome
let palindromeReverse = "";
for (let i = palindrome.length - 1; i >= 0; i--) {
  palindromeReverse += palindrome[i];
}
if (palindrome === palindromeReverse) {
  console.log(true);
} else {
  console.log(false);
}

// function palindromeCheck(palindrome) {
//   let len = palindrome.length;
//   for (let j = 0; j < len / 2; j++) {
//     if (palindrome[j] != palindrome[len - 1 - j]) {
//       console.log("not palindrome");
//     }
//     console.log("palindrome");
//   }
// }
// let value = palindromeCheck(palindrome);
