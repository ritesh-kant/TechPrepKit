const str = 'babad'

function getPalindrome(str, i, j) {
    while(i > 0 && j< str.length && str[i] === str[j]) {
        i--; j++;
    }
    return str.slice(i+1, j)
}
function longestPalindrome(str) {
    let ans = ''
    for(let i =0 ; i< str.length; i++) {
        const p1 = getPalindrome(str, i, i)
        const p2 = getPalindrome(str, i , i+1)
        const longest = p1.length > p2.length ? p1 : p2
        ans = ans.length > longest.length ? ans : longest
    }
    console.log(ans)
}

longestPalindrome(str)