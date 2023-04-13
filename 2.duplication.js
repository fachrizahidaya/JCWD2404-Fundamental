//cara O(N^2)
function checkDuplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) return true;
    }
    return false;
  }
}

console.log(checkDuplicate([1, 2, 3, 4]));

//cara O(N)
function checkDuplicate(arr) {
  let uniqueData = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (uniqueData.has(arr[i])) return true;
    else uniqueData.add(arr[i]);
  }
  return false;
}
console.log(checkDuplicate([6, 7, 7, 8]));
console.log(checkDuplicate([6, 7, 8, 9]));

// O(N Log N)
function checkDuplicate(arr) {
  arr.sort();
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) return true;
  }
  return false;
}
console.log(checkDuplicate([6, 1, 4, 1]));
