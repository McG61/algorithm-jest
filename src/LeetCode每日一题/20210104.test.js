// 509.斐波那契数 https://leetcode-cn.com/problems/fibonacci-number/

/**
 * 斐波那契数，通常用 F(n) 表示，形成的序列称为 斐波那契数列 。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：
 * F(0) = 0，F(1) = 1
 * F(n) = F(n - 1) + F(n - 2)，其中 n > 1
 * 给你 n ，请计算 F(n) 。
 */

/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let prve = 0;
    let cur = 1;
    while(n--) {
        cur += prve;
        prve = cur - prve;
    }
    return prve;
};

describe('斐波那契数', () => {
    test('while循环', () => {
        expect(largeGroupPositionsLoop("")).toStrictEqual([]);
        expect(largeGroupPositionsLoop("abaa")).toStrictEqual([]);
        expect(largeGroupPositionsLoop("abbxxxxzzy")).toStrictEqual([[3,6]]);
        expect(largeGroupPositionsLoop("abcdddeeeeaabbbcd")).toStrictEqual([[3,5],[6,9],[12,14]]);
        expect(largeGroupPositionsLoop(
            "hdfsghjdbhdhgbjhfdgjhdhdgjhfghffghffhfhhfhgfdgdfhmlkjlmknjjndfklshdjkfgbhjdfgjkhdjjdjjjdfhgjdhhfdkjjdjjdjjjcxkvvvvnnhhhjhjjfggdgyyyy"
            )).toStrictEqual([[84,86],[104,106],[110,113],[116,118],[128,131]]);
    });
});