// Input:
// let s = "aabacbebebe", k = 3
let s = "aaab", k = 3
        //  ^
// Output: 
// 7
// Explanation: 
// "cbebebe" is the longest substring with 3 distinct characters.

function substring(s, k) {
    let left = 0
    let right = 0
    let ans = -1
    let map = new Map()

    while (right < s.length) {

        map.set(s[right], (map.get(s[right]) ?? 0) + 1)
        if (map.size == k) {
            ans = Math.max(ans, right - left + 1)
        }  
        if (map.size > k) {
                while (map.size > k) {
                    map.set(s[left], map.get(s[left]) - 1)
                    if (map.get(s[left]) == 0) {
                        map.delete(s[left])
                    }
                    left++
                }
            }

        right++
    }
    console.log(ans)
}


substring(s, k)
