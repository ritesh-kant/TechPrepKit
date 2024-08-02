let cache = {}
console.time()
function fibo(num) {
    if (num == 0) return 0
    if (num == 1) return 1
    if (cache[num]) return cache[num]
    const x = fibo(num - 1) + fibo(num - 2)
    cache[num] = x
    return x;
}



function fibLoop(num) {
    let x = [1, 1]
    for (let i = 2; i <= num; i++) {
        x[i] = x[i-1]+x[i-2]
    }   
    return x
}
// const x = fibLoop(30)
const x = fibo(30)
console.log(x)
console.timeEnd()