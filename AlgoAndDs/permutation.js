/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let result = []
    let dfs = (path, used) => {
        if(path.length == nums.lenth) {
            result.push([...path])
            return;
        }
        for(let i =0; i< nums.length; i++) {
            if(used[i]) continue;
            used[i] = true
            path.push(nums[i])
            dfs(path,used)
            path.pop()
            used[i] = false
        }
    }

    dfs([], [])
    console.log(result)
    return result
};

permute([1,2,3])