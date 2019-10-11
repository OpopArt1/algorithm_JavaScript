/*给定一个由 '1'（陆地）和 '0'（水）组成的的二维网格，计算岛屿的数量。一个岛被水包围，并且它是通过水平方向或垂直方向上相邻的陆地连接而成的。你可以假设网格的四个边均被水包围。

示例 1:

输入:
11110
11010
11000
00000

输出: 1
示例 2:

输入:
11000
11000
00100
00011

输出: 3

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/number-of-islands
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。*/

/**
 * @param {character[][]} grid
 * @return {number}
 */
 
//思路：遍历二维数组，找到第一个为'1'的，用bfs或dfs将他扩展
//      继续找'1'直到遍历结束
var numIslands = function(grid) {
    var res = 0;
    var row = grid.length;
   
    if(!grid || row === 0) {
        return 0;
    }
    var col = grid[0].length;
    for(var i = 0; i < row; i++) {
        for(var j = 0; j < col; j++) {
            if(grid[i][j] === '1') {
                
                res++;
                bfs(grid, i, j, row, col);
            }
        }
    }
    return res;
};

function bfs(grid, x, y, lenx, leny) {
    if((x>=0&&x<lenx)&&(y>=0&&y<leny)&&(grid[x][y] === '1')) {
        grid[x][y] = '0';
    
    bfs(grid, x+1, y, lenx, leny)
    bfs(grid, x-1, y, lenx, leny)
    bfs(grid, x, y+1, lenx, leny)
    bfs(grid, x, y-1, lenx, leny)
    }
}
