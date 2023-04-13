//linear search
function search(arr, x) {
  let i;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      return i;
    }
  }
  return false; // bisa disederhanakan tanpa return
}
console.log(search([2, 20, 10, 20, 3], 20));

//binary search
function binarySearch(arr, l, r, x) {
  if (r >= l) {
    let mid = l + Math.floor((r - l) / 2);
    if (arr[mid] == x) return mid;
    if (arr[mid] > x) return binarySearch(arr, l, mid - 1, r, x);
    return binarySearch(arr, mid + 1, r, x);
  }
  return -1;
}
let arr = [1, 2, 3, 4, 4, 10];
let x = 10;
console.log(binarySearch(arr, 0, arr.length - 1, x));
