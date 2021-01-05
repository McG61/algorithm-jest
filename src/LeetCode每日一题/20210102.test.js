// 239.滑动窗口最大值 https://leetcode-cn.com/problems/sliding-window-maximum/

/**
 * 给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。
 * 返回滑动窗口中的最大值。
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let result = [];
    let queue = [];
    for(let i=0; i<nums.length; i++) {
        if(i-queue[0]>=k) queue.shift();
        while(nums[i] > nums[queue[queue.length-1]]) {
            queue.pop();
        }
        queue.push(i);
        if(i>=k-1) result.push(nums[queue[0]])
    }
    return result;
};

describe('滑动窗口最大值', () => {
    test('for+while循环', () => {
        expect(maxSlidingWindow([1], 1)).toStrictEqual([1]);
        expect(maxSlidingWindow([1,-1], 1)).toStrictEqual([1,-1]);
        expect(maxSlidingWindow([9,11], 2)).toStrictEqual([11]);
        expect(maxSlidingWindow([4,-2], 2)).toStrictEqual([4]);
        expect(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3)).toStrictEqual([3,3,5,5,6,7]);
    });
});