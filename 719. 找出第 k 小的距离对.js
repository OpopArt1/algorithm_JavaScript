/*给定一个整数数组，返回所有数对之间的第 k 个最小距离。一对 (A, B) 的距离被定义为 A 和 B 之间的绝对差值。

示例 1:

输入：
nums = [1,3,1]
k = 1
输出：0 
解释：
所有数对如下：
(1,3) -> 2
(1,1) -> 0
(3,1) -> 2
因此第 1 个最小距离的数对是 (1,1)，它们之间的距离为 0。
提示:

2 <= len(nums) <= 10000.
0 <= nums[i] < 1000000.
1 <= k <= len(nums) * (len(nums) - 1) / 2.

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/find-k-th-smallest-pair-distance
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function(nums, k) {
    nums.sort((a, b) => {return a-b});
    var left = 0, right = nums[nums.length-1] - nums[0], mid;
    while(left < right) {
        mid = left + ~~((right - left)/2);
        var count = 0;
        var j = 0;
        for(var i = 1; i < nums.length; i++) {
            while(nums[i] - nums[j] > mid) {
                j++;
            }
            count += i - j;
        }
        if(count < k) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left;
};
