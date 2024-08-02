const input = [1,1,2]

function removeDuplicates(input) {
    let [p,q] = [0,1]
    while( q < input.length ) {
        if(input[p] != input[q] ) {
            p++
            input[p] = input[q]
        }
        q++
    }
    return p+1
}

const ans = removeDuplicates(input)
console.log(ans)