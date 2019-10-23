/*给定一组区间，对于每一个区间 i，检查是否存在一个区间 j，它的起始点大于或等于区间 i 的终点，这可以称为 j 在 i 的“右侧”。

对于任何区间，你需要存储的满足条件的区间 j 的最小索引，这意味着区间 j 有最小的起始点可以使其成为“右侧”区间。如果区间 j 不存在，则将区间 i 存储为 -1。最后，你需要输出一个值为存储的区间值的数组。

注意:

你可以假设区间的终点总是大于它的起始点。
你可以假定这些区间都不具有相同的起始点。
示例 1:

输入: [ [1,2] ]
输出: [-1]

解释:集合中只有一个区间，所以输出-1。
示例 2:

输入: [ [3,4], [2,3], [1,2] ]
输出: [-1, 0, 1]

解释:对于[3,4]，没有满足条件的“右侧”区间。
对于[2,3]，区间[3,4]具有最小的“右”起点;
对于[1,2]，区间[2,3]具有最小的“右”起点。
示例 3:

输入: [ [1,4], [2,3], [3,4] ]
输出: [-1, 2, -1]

解释:对于区间[1,4]和[3,4]，没有满足条件的“右侧”区间。
对于[2,3]，区间[3,4]有最小的“右”起点。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/find-right-interval
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。*/

/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function(intervals) {
    var res = [];
    var hash = {}
    for(var i = 0; i < intervals.length; i++) {
        var s = intervals[i].toString();
        hash[s] = i;
    }
    intervals.sort((a, b) => {return a[0] - b[0]});
    for(var j = 0; j < intervals.length; j++) {
        var cur = binarySearch(intervals, 0, intervals.length - 1, intervals[j][1]);
        var a = cur === -1 ? -1 : hash[intervals[cur].toString()];
        var b = hash[intervals[j].toString()]
        res[b] = a;
    }
    return res;
    
    
};

function binarySearch(arr, left, right, target) {
    while(left < right) {
        var mid = left + parseInt((right - left)/2);
        if(arr[mid][0] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return arr[left][0] >= target ? left : -1;
}
