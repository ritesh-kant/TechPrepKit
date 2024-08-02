let result = []
function dfs(arr, n) {
    if (n == 0) {
        result.push([...arr].join(""));
        return
    }
    ["a", "b"].forEach(letter => {
        // arr.push(letter)
        dfs([...arr,letter], n - 1)
        // arr.pop();
    })
}

dfs([], 3)
console.log(result)