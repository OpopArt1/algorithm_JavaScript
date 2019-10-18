/*给定一个整数数组，判断数组中是否有两个不同的索引 i 和 j，使得 nums [i] 和 nums [j] 的差的绝对值最大为 t，并且 i 和 j 之间的差的绝对值最大为 ķ。

示例 1:

输入: nums = [1,2,3,1], k = 3, t = 0
输出: true
示例 2:

输入: nums = [1,0,1,1], k = 1, t = 2
输出: true
示例 3:

输入: nums = [1,5,9,1,5,9], k = 2, t = 3
输出: false

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/contains-duplicate-iii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
 //暴力不可取啊
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    for(var i = 0; i < nums.length; i++) {
        for(var j = i+1; j <= i + k && j <nums.length; j++) {
            var tmp = Math.abs(nums[i] - nums[j]);
            if(tmp <= t) {return true;}
        }
    }
    return false;
};
