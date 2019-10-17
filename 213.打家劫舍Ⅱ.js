/*你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。这个地方所有的房屋都围成一圈，这意味着第一个房屋和最后一个房屋是紧挨着的。同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

给定一个代表每个房屋存放金额的非负整数数组，计算你在不触动警报装置的情况下，能够偷窃到的最高金额。

示例 1:

输入: [2,3,2]
输出: 3
解释: 你不能先偷窃 1 号房屋（金额 = 2），然后偷窃 3 号房屋（金额 = 2）, 因为他们是相邻的。
示例 2:

输入: [1,2,3,1]
输出: 4
解释: 你可以先偷窃 1 号房屋（金额 = 1），然后偷窃 3 号房屋（金额 = 3）。
     偷窃到的最高金额 = 1 + 3 = 4 。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/house-robber-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。*/


/**
 * @param {number[]} nums
 * @return {number}
 */
 
 //与198. 打家劫舍 I相类似，不过分类讨论，不包含最左边的点，以及不包含最右边的点
var rob = function(nums) {
    if(!nums || nums.length === 0) {
        return 0;
    }
    if(nums.length === 1) {
        return nums[0]
    }
    var dp1 = [], dp2 = [];
    for(var i = 0; i < nums.length - 1; i++) {
        dp1[i] = Math.max((dp1[i-1] || 0), (dp1[i-2] || 0) + nums[i]);
    }
    for(var j = 1; j < nums.length; j++) {
        dp2[j] = Math.max((dp2[j-1] || 0), (dp2[j-2] || 0) + nums[j]);
    }

    return Math.max(dp1[i-1], dp2[j-1])
};
