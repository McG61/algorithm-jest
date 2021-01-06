// 86.分隔链表 https://leetcode-cn.com/problems/partition-list/
const {ListNode, listToArray, arrayToList} = require('../utils')
/**
 * 给你一个链表和一个特定值 x ，请你对链表进行分隔，使得所有小于 x 的节点都出现在大于或等于 x 的节点之前。
 * 你应当保留两个分区中每个节点的初始相对位置。
 */

/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */

var partition = function(head, x) {
    // 没有内置转换，需要手动进行数组->链表转换
    head = arrayToList(head)
    let minHead = min = new ListNode(null);
    let maxHead = max = new ListNode(null);
    while(head !== null) {
        if(head.val < x) {
            min.next = head;
            min = min.next;
        } else {
            max.next = head;
            max = max.next;
        }
        head = head.next;
    }
    max.next = null;
    min.next = maxHead.next;
    // 没有内置转换，需要手动进行链表->数组转换
    return listToArray(minHead.next);
};

describe('分隔链表', () => {
    const data = [
        53, 46, 42, 13, 37,
        95, 57, 12, 11, 41
    ]
    test('while循环', () => {
        expect(partition([1,4,3,2,5,2], 3)).toStrictEqual([1,2,2,4,3,5]);
        expect(partition(data, 29)).toStrictEqual([13,12,11,53,46,42,37,95,57,41]);
        expect(partition(data, 44)).toStrictEqual([42,13,37,12,11,41,53,46,95,57]);
        expect(partition(data, 57)).toStrictEqual([53,46,42,13,37,12,11,41,95,57]);
    });
});