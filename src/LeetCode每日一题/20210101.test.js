// 605.种花问题 https://leetcode-cn.com/problems/can-place-flowers/

/**
 * 假设有一个很长的花坛，一部分地块种植了花，另一部分却没有。可是，花不能种植在相邻的地块上，它们会争夺水源，两者都会死去。
 * 给你一个整数数组  flowerbed 表示花坛，由若干 0 和 1 组成，其中 0 表示没种植花，1 表示种植了花。另有一个数 n ，能否在不打破种植规则的情况下种入 n 朵花？
 * 能则返回 true ，不能则返回 false。
 */

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    if(n === 0) return true;
    let len = flowerbed.length;
    let i = 0;
    while(i < len) {
        if(flowerbed[i] === 1) {
            i += 2;
        } else if(flowerbed[i+1] !== 1 && flowerbed[i-1] !== 1) {
            n--;
            i += 2;
        } else {
            i++;
        }
        if(n===0) return true;
    }
    return false;
};


describe('种花问题', () => {
    const bigData = [
        1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,
        1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,
        1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,
        0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,
        0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,
        0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,
        1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,
        1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,
        0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,
    ]
    test('while循环', () => {
        expect(canPlaceFlowers([1,1,0,0,0,1,], 1)).toBe(true);
        expect(canPlaceFlowers([1,0,0,0,1], 2)).toBe(false);
        expect(canPlaceFlowers([1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1], 5)).toBe(false);
        expect(canPlaceFlowers(bigData, 9)).toBe(true);
        expect(canPlaceFlowers(bigData, 11)).toBe(true);
        expect(canPlaceFlowers(bigData, 15)).toBe(false);
    });
});