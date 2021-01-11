// 189.旋转数组 https://leetcode-cn.com/problems/rotate-array/

/**
 * 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
 */

 /**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let prev, cur;
    let len = nums.length;
    for(let i=0; i<k; i++) {
        prev = nums[0];
        nums[0] = nums[len-1];
        for(let j=1; j<len; j++) {
            cur = nums[j];
            nums[j] = prev;
            prev = cur;
        }
    }
    return nums;
};

describe('旋转数组', () => {
    test('for循环', () => {
        expect(rotate([1,2,3,4,5,6,7], 3)).toStrictEqual([5,6,7,1,2,3,4]);
        expect(rotate([-1,-100,3,99], 2)).toStrictEqual([3,99,-1,-100]);
    });
});