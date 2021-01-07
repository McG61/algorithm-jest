// 399.除法求值 https://leetcode-cn.com/problems/evaluate-division/

/**
 * 给你一个变量对数组 equations 和一个实数值数组 values 作为已知条件，其中 equations[i] = [Ai, Bi] 和 values[i] 共同表示等式 Ai / Bi = values[i] 。
 * 每个 Ai 或 Bi 是一个表示单个变量的字符串。
 * 另有一些以数组 queries 表示的问题，其中 queries[j] = [Cj, Dj] 表示第 j 个问题，请你根据已知条件找出 Cj / Dj = ? 的结果作为答案。
 * 返回 所有问题的答案 。如果存在某个无法确定的答案，则用 -1.0 替代这个答案。
 * 注意：输入总是有效的。你可以假设除法运算中不会出现除数为 0 的情况，且不存在任何矛盾的结果
 */

/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    let map = new Map(), result = [];
    let visit = new Map();  // visit 数组标记在搜索过程中是否访问过
    const dfs = (src, dst) => {
        // 若可达，且找到了目的节点，返回 1.0 表示成功到达
        if (src === dst) {
            return 1.0;
        }
        let path = map.get(src);
        for(let i=0; i<path.length; i++) {
            let next = path[i];
            if (!visit.get(next[0])) {
                visit.set(next[0], true);
                let ret = dfs(next[0], dst);
                visit.set(next[0], false);
                if(ret !== -1) {
                    return ret * next[1];
                }
            }
        }
        
        return -1.0;
    }

    // 创建邻接表
    for(let i = 0; i < equations.length; ++i) {
        let e = equations[i], v = values[i];
        if(!map.has(e[0])) {
            visit.set(e[0], false);
            map.set(e[0], []);
        }
        if(!map.has(e[1])) {
            visit.set(e[1], false);
            map.set(e[1], []);
        }
        let adj1 = map.get(e[0]);
        let adj2 = map.get(e[1]);
        adj1.push([e[1], v]);
        adj2.push([e[0], 1/v]);
    }

    for(let item of queries) {
        let param1 = item[0];
        let param2 = item[1];
        if(map.has(param1) && map.has(param2)) {
            visit.set(param1, true);
            result.push(+dfs(param1, param2).toFixed(5));
            visit.set(param1, false);
        } else {
            result.push(-1.00000);
        }
    }
    return result;
};


describe('除法求值', () => {
    test('邻接表+DFS', () => {
        expect(calcEquation([["a","b"],["b","c"]], [2.0,3.0], [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]))
            .toStrictEqual([6.00000,0.50000,-1.00000,1.00000,-1.00000]);
        expect(calcEquation([["a","b"],["b","c"],["bc","cd"]], [1.5,2.5,5.0], [["a","c"],["c","b"],["bc","cd"],["cd","bc"]]))
            .toStrictEqual([3.75000,0.40000,5.00000,0.20000]);
        expect(calcEquation([["a","b"]], [0.5], [["a","b"],["b","a"],["a","c"],["x","y"]]))
            .toStrictEqual([0.50000,2.00000,-1.00000,-1.00000]);
    });
});