// 830.较大分组的位置 https://leetcode-cn.com/problems/positions-of-large-groups/

/**
 * 在一个由小写字母构成的字符串 s 中，包含由一些连续的相同字符所构成的分组。
 * 例如，在字符串 s = "abbxxxxzyy" 中，就含有 "a", "bb", "xxxx", "z" 和 "yy" 这样的一些分组。
 * 分组可以用区间 [start, end] 表示，其中 start 和 end 分别表示该分组的起始和终止位置的下标。上例中的 "xxxx" 分组用区间表示为 [3,6] 。
 * 我们称所有包含大于或等于三个连续字符的分组为 较大分组 。
 * 找到每一个 较大分组 的区间，按起始位置下标递增顺序排序后，返回结果。
 */

/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {
    let start= 0;
    let end = 0;
    let result = [];
    for(let i=0; i<s.length-1; i++) {
        if(s[i+1] === s[end]) {
            end++;
        } else {
            end-start >= 2 && result.push([start, end]);
            start = end = i+1;
        }
    }
    end-start >= 2 && result.push([start, end]);
    return result;
};

var largeGroupPositionsLoop = function(s) {
    let start= 0;
    let end = 0;
    let result = [];
    while(end<s.length) {
        if(s[end++] !== s[start]) {
            end-start > 3 && result.push([start, end-2]);
            start = end-1;
        };
    }
    end-start >= 3 && result.push([start, end-1]);
    return result;
};

describe('较大分组的位置', () => {
    test('for遍历', () => {
        expect(largeGroupPositions("")).toStrictEqual([]);
        expect(largeGroupPositions("abaa")).toStrictEqual([]);
        expect(largeGroupPositions("abbxxxxzzy")).toStrictEqual([[3,6]]);
        expect(largeGroupPositions("abcdddeeeeaabbbcd")).toStrictEqual([[3,5],[6,9],[12,14]]);
        expect(largeGroupPositions(
            "hdfsghjdbhdhgbjhfdgjhdhdgjhfghffghffhfhhfhgfdgdfhmlkjlmknjjndfklshdjkfgbhjdfgjkhdjjdjjjdfhgjdhhfdkjjdjjdjjjcxkvvvvnnhhhjhjjfggdgyyyy"
            )).toStrictEqual([[84,86],[104,106],[110,113],[116,118],[128,131]]);
    });

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