/* 
cek ada duplicate
keluarkan yang tidak duplicate
*/
function singleNum(j, n) {
  let m = new Map();
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < n; i++) {
    if (!m.has(j[i])) {
      sum1 += j[i];
      m.set(j[i], 1);
    }
    sum2 += j[i];
  }
  return 2 * sum1 - sum2;
}
let j = [4, 1, 2, 1, 2];
let n = j.length;
console.log(singleNum(j, n));

// cara 3
function findSingle(ar, ar_size) {
  let res = ar[0];
  for (let l = 1; l < ar_size; l++) {
    res = res ^ ar[l];
    return res;
  }
}
let ar = [6, 3, 4, 5, 4, 5, 3, 4];
let ar_size = ar.length;
console.log(findSingle(ar, ar_size));

// cara 4
/* 
angka yang muncul 1 di filter
angka yang muncul 1 di masukkan ke array 0
*/
function myFunc(arr3) {
  let single = [];
  for (let i = 0; i < arr3.length; i++) {
    if (arr3.filter((a) => a == arr3[i]).length == 1) single.push(arr3[i]);
  }
  return single;
}
let arr3 = [8, 8, 8, 1];
console.log(myFunc(arr3).join());

// cara 5
function myFunc1(arr4) {
  let single1 = [];
  let temp;
  for (let i = 0; i < arr4.length; i++) {
    temp = arr4.filter((b) => b == arr4[i]);
    if (temp.length === 1) {
      single1.push(arr4[i]);
    }
  }
  return single1.join();
}
let arr4 = [4, 1, 2, 1, 2, 3, 3];
console.log(myFunc1(arr4));

function findSingle(ar1, n1) {
  for (let i = 0; i < n1; i++) {
    let count = 0;

    for (let j = 0; j < n1; j++) {
      if (ar1[i] == ar1[j]) {
        count++;
      }
    }

    if (count == 1) {
      return ar1[i];
    }
  }

  return -1;
}

let ar1 = [2, 3, 5, 4, 5, 3, 4];
let n1 = ar1.length;
console.log(findSingle(ar1, n1));
