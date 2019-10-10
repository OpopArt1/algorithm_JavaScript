function bubble(array) {
    if(array.length === 0 || array === null) {
        return;
    }
    for(let i = array.length - 1; i >= 0; i--){
        for(var j = 0; j < i; j++) {
            if(array[j] > array[j+1]) {
                [array[j], array[j+1]] = [array[j+1], array[j]];
            }
        }
    }
    return array;
}
// 时间复杂度O(n*n)	空间复杂度O(1)	稳定
