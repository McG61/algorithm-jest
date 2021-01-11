// 547.省份数量 https://leetcode-cn.com/problems/number-of-provinces/

/**
 * 有 n 个城市，其中一些彼此相连，另一些没有相连。如果城市 a 与城市 b 直接相连，且城市 b 与城市 c 直接相连，那么城市 a 与城市 c 间接相连。
 * 省份 是一组直接或间接相连的城市，组内不含其他没有相连的城市。
 * 给你一个 n x n 的矩阵 isConnected ，其中 isConnected[i][j] = 1 表示第 i 个城市和第 j 个城市直接相连，而 isConnected[i][j] = 0 表示二者不直接相连。
 * 返回矩阵中 省份 的数量。
 * @param {*} isConnected 
 */

/**
 * @param {number[][]} isConnected
 * @return {number}
 */

var findCircleNum = function(isConnected) {
    let count = 0;
    let len = isConnected.length;
    let visited = {};
    function dfs(visited, i) {
        for(let j = 0; j < len; j ++){
            // 如果相连且未访问
            if(isConnected[i][j] == 1 && !visited[j]){
                // 标记为访问过
                visited[j] = true;
               dfs(visited, j);
            }
        }
    }
    for(let i=0; i<len; i++) {
        if(!visited[i]) {
            dfs(visited, i);
            count ++;
        }
    }
    return count;
};

let data1 = [[1,1,0],[1,1,0],[0,0,1]];
let data2 = [[1,0,0],[0,1,0],[0,0,1]]
let data3 = [[1,0,0,1],[0,1,0,0],[0,0,1,0],[1,0,0,1]]
let data4 = [
    [1,1,0,0,0,0,0,1,0,0,0,0,0,0,0],
    [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,0,1,1,0,0,0,0,0,0,0,0],
    [0,0,0,0,1,0,0,0,0,1,1,0,0,0,0],
    [0,0,0,1,0,1,0,0,0,0,1,0,0,0,0],
    [0,0,0,1,0,0,1,0,1,0,0,0,0,1,0],
    [1,0,0,0,0,0,0,1,1,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,1,1,0,0,0,0,1,0],
    [0,0,0,0,1,0,0,0,0,1,0,1,0,0,1],
    [0,0,0,0,1,1,0,0,0,0,1,1,0,0,0],
    [0,0,0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
    [0,0,0,0,0,0,1,0,1,0,0,0,0,1,0],
    [0,0,0,0,0,0,0,0,0,1,0,0,0,0,1]
]

describe('省份数量', () => {
    test('for循环', () => {
        expect(findCircleNum(data1)).toBe(2);
        expect(findCircleNum(data3)).toBe(3);
        expect(findCircleNum(data2)).toBe(3);
        expect(findCircleNum(data4)).toBe(3);
    });
});