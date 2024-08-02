// Input: nums = [-10,-3,0,5,9]
// Output: [0,-3,9,-10,null,5]

const nums = [-10, -3, 0, 5, 9]
function TreeNode(val, left, right) {
    this.val = (val || 0)
    this.left = left || null
    this.right = right || null
}
function convert(nums) {
    if (!nums || !nums.length) return null
    const mid = Math.floor(nums.length / 2)
    let newNode = new TreeNode(nums[mid])
    newNode.left = convert(nums.slice(0, mid ))
    newNode.right = convert(nums.slice(mid + 1))
    return newNode
}

console.log(convert(nums))