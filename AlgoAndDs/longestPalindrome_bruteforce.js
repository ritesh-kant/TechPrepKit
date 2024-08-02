const str = "babad"

function longestPalindrome(str) {
    let ans = ''
    for (let i = 0; i < str.length; i++) {
        for (let j = i; j < str.length; j++) {
            // check for palindrome
            for (let k = 0; k < (j - i + 1) / 2; k++) {
                if (str[i + k] == str[j - k]) {
                    ans = ans.length < str.slice(i + 1, j).length ? str.slice(i + 1, j) : ans
                }
            }
        }
    }
    console.log(ans)
}

longestPalindrome(str)