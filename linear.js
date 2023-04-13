function search(arr, x) {
  let i;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == x) {
      return i;
    }
  }
  return "tidak ada";
}

console.log(search([2, 20, 10, 3], 5));
