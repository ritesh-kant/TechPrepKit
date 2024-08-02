/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    return quickSelect(nums, 0, nums.length - 1, k)
};

function quickSelect(arr, start, end, k) {
    const pivotIndex = partition(arr, start, end)
    if (pivotIndex < arr.length - k) {
        return quickSelect(arr, pivotIndex + 1, end, k)
    } else if (pivotIndex > arr.length - k) {
        return quickSelect(arr, start, pivotIndex - 1, k)
    }
    // if (k < arr.length - pivotIndex) {
    //     return quickSelect(arr, pivotIndex + 1, end, k);
    // } else if (k > arr.length - pivotIndex) {
    //     return quickSelect(arr, start, pivotIndex - 1, k);
    // }
    return arr[pivotIndex]
}

function partition(nums, start, end) {
    let pivot = nums[end], // using the last element as the pivot
        i = start - 1,
        j = end;
    do {
        do {
            i += 1;
        } while (nums[i] < pivot);
        do {
            j -= 1;
        } while (nums[j] > pivot);
        if (i < j) {
            swap(nums, i, j);
        }
    } while (i < j);
    swap(nums, i, end); // swap pivot element to its correct position
    return i;
}


function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
}

findKthLargest([3, 2, 1, 5, 6, 4], 2)