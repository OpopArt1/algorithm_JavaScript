/*在一个由 0 和 1 组成的二维矩阵内，找到只包含 1 的最大正方形，并返回其面积。

示例:

输入: 

1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0

输出: 4

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/maximal-square
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。*/

/**
 * @param {character[][]} matrix
 * @return {number}
 */
 //动态规划，dp[i][j]表示以它为正方形右下角的顶点的最大的正方形，则 
 // dp[i][j] = Math.min((dp[i-1][j]||0),(dp[i-1][j-1]||0),(dp[i][j-1]||0)) + 1
var maximalSquare = function(matrix) {
    var res = 0;
    if(matrix === null || matrix.length === 0) {
        return res;
    }
    var m = matrix.length;
    var n = matrix[0].length;
    var dp = Array(m).fill(0)
    for(var i = 1; i <= matrix.length; i++) {
        dp[i] = Array(n).fill(0);
        for(var j = 1; j <= matrix[0].length; j++) {
            if(matrix[i-1][j-1] === '1') {               
                dp[i][j] = Math.min((dp[i-1][j]||0),(dp[i-1][j-1]||0),(dp[i][j-1]||0)) + 1
                console.log(dp[i][j])
                res = Math.max(res, dp[i][j])
            } else {
                dp[i][j] = 0;
            }
            
        }
    }
    return res*res
};
