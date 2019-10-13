/*
编写一个算法来判断一个数是不是“快乐数”。

一个“快乐数”定义为：对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和，然后重复这个过程直到这个数变为 1，也可能是无限循环但始终变不到 1。如果可以变为 1，那么这个数就是快乐数。

示例: 

输入: 19
输出: true
解释: 
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/happy-number
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。*/

/**
 * @param {number} n
 * @return {boolean}
 */
 
 //思路用hash保存每一轮值，若再次出现则表示循环了。
var isHappy = function(n) {
    if(n === null) {
        return false;
    }
    var hash = {};
    var val = n;
    while(!hash[val]) {
        if(val === 1) {
            return true;
        }
        hash[val] = true;
        var res = 0;
        var s = ((''+ val)).split('');
        for(var i = 0; i < s.length; i++) {
            var cur = parseInt(s[i]);
            res += Math.pow(cur, 2);
        }
        val = res;
    }
    return false;
};
