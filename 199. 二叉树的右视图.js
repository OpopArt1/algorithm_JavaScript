/*给定一棵二叉树，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。

示例:

输入: [1,2,3,null,5,null,4]
输出: [1, 3, 4]
解释:

   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/binary-tree-right-side-view
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 
 //利用队列，保存每一层的节点，并将每层最右边的节点记录
var rightSideView = function(root) {
    if(root === null) {
        return [];
    }
    var res = [];
    var queue = [root];
    while(queue.length) {
        var len = queue.length;
        for(var i = 0; i < len; i++) {
            var node = queue.shift();
            if(node.left) {queue.push(node.left)}
            if(node.right) {queue.push(node.right)}
            if(i === len - 1) {res.push(node.val)}
        }
        
    }
    return res;
};
