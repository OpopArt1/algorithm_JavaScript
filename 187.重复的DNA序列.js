/*给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。

示例 1:

输入: [1,2,3,4,5,6,7] 和 k = 3
输出: [5,6,7,1,2,3,4]
解释:
向右旋转 1 步: [7,1,2,3,4,5,6]
向右旋转 2 步: [6,7,1,2,3,4,5]
向右旋转 3 步: [5,6,7,1,2,3,4]
示例 2:

输入: [-1,-100,3,99] 和 k = 2
输出: [3,99,-1,-100]
解释: 
向右旋转 1 步: [99,-1,-100,3]
向右旋转 2 步: [3,99,-1,-100]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/rotate-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。*/

/**
 * @param {string} s
 * @return {string[]}
 */
 //滑动窗口+哈希
 //通过滑动窗口得到每个长度为10的子串，添加到Set中
 //如果Set中已存在该子串，说明该字串出现次数超过1次
var findRepeatedDnaSequences = function(s) {
    var visited = new Set(), res = new Set();
    for(var i = 0; i < s.length - 9; i++) {
        var sub = s.substring(i, i+10);
        if(visited.has(sub)) {
            res.add(sub)
        } else {
            visited.add(sub)
        }
    }
    return [...res];
};
