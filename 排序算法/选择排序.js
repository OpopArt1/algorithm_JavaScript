function seletSort(array) {
    if(array.length === 0 || array === null) {
        return array;
    }
    for(var i = 0; i < array.length; i++) {
        var minIndex = i;
        for(var j = i; j < array.length; j++) {
            if(array[minIndex] > array[j]) {
                swap(array, minIndex, j);
            }
        }
    }
    return array;
}

function swap(array, a, b) {
    var tmp = array[a];
    array[a] = array[b];
    array[b] = tmp;
}

//平均时间复杂度       最好情况        最坏情况        空间复杂度
//O(n²)                 O(n²)           O(n²)           O(1)
