let n = 5
function findStep (n) {
    if (n==0){
        return 1
    } else if (n<0) {
        return 0
    } else {
        return findStep(n-2) + findStep(n-1)
    }
}
console.log(findStep(n))

//cara 2
function climbStairs (n) {
    let fibo =[1,1] 
    if (n===1 || n === 2) {
        return n
     }
     for (let i = 2; i <= n; i++) {
        fibo[i] = fibo [i-1] + fibo [i-2]
     }
     return fibo[n]
}
console.log(climbStairs(4))