/*给定一个无重复元素的有序整数数组，返回数组区间范围的汇总。

示例 1:

输入: [0,1,2,4,5,7]
输出: ["0->2","4->5","7"]
解释: 0,1,2 可组成一个连续的区间; 4,5 可组成一个连续的区间。
示例 2:

输入: [0,2,3,4,6,8,9]
输出: ["0","2->4","6","8->9"]
解释: 2,3,4 可组成一个连续的区间; 8,9 可组成一个连续的区间。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/summary-ranges
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。*/

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    var res = [];
    var i = 0;
    while(i < nums.length) {
        var j = i;
        while(nums[j]+1 === nums[j+1] && j+1 < nums.length) {
            j++;
        }
        if(i === j) {
            res.push(''+nums[j]);
        } else {
            res.push(nums[i] + '->' + nums[j]);
        }
        
        i = j + 1;
    }
    return res;
};
