/**
 * 生成范围内随机数
 * @param {number} min 最小值
 * @param {number} max 最大值
 */
function rand(min,max) {
    return Math.floor(Math.random()*(max-min))+min;
}

/**
 * 生成随机整数数组
 * @param {number} len 生成的数组长度
 * @param {number} min 元素最小值
 * @param {number} max 元素最大值
 */
function randArray(len, min, max) {
    return Array.from({length:len}, v=> Math.floor(Math.random()*(max-min))+min);
}

/**
 * 单链表生成器
 * @param {any} val 当前节点值
 * @param {object} next 指向下个节点的指针
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * 将数组转换为链表
 * @param {array} arr 需要转换的数组
 * @param {number} type 转换的类型，0为单链表，1为循环链表
 * @return ListNode    返回链表
 */
function arrayToList(arr, type = 0) {
    if (!arr.length) return null;
    let header = new ListNode(arr[0], null);
    let list = header;
    for (let i = 1; i < arr.length; i++) {
      list.next = new ListNode(arr[i], null);
      list = list.next;
    }
    if (type) list.next = header;
    return header;
}

/**
 * 将链表转换为数组
 * @param {ListNode} list 
 * @return array    返回数组
 */
function listToArray(list) {
    let result = [];
    while(list) {
        result.push(list.val);
        list = list.next;
    }
    return result;
}

module.exports={
    rand,
    randArray,
    ListNode,
    arrayToList,
    listToArray
}

