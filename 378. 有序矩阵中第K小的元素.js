/*给定一个 n x n 矩阵，其中每行和每列元素均按升序排序，找到矩阵中第k小的元素。
请注意，它是排序后的第k小元素，而不是第k个元素。

示例:

matrix = [
   [ 1,  5,  9],
   [10, 11, 13],
   [12, 13, 15]
],
k = 8,

返回 13。
说明:
你可以假设 k 的值永远是有效的, 1 ≤ k ≤ n2 。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/kth-smallest-element-in-a-sorted-matrix
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。*/

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    var len = matrix.length;
    var left = matrix[0][0], right = matrix[len - 1][len - 1];
    while(left < right) {
        var mid = left + parseInt((right - left)/2);
        var sum = count(len, matrix, mid);
        if(sum < k) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left;
    
};
function count(len, arr, mid) {
    var sum = 0;
    var i = len - 1;
    var j = 0;
    while(i >= 0 && j < len) {
        if(arr[i][j] <= mid) {
            sum += i + 1;
            j++;
        } else {
            i--;
        }
    }
    return sum;
}
