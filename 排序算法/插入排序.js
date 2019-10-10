//
function insertionSort(array) {
    if(array === null || array.length === 0) {
        return ;
    }
    for(var i = 1; i < array.length; i++) {
        for(var j = i-1; j >= 0 && array[j] > array[j+1]; j--){
            swap(array, j, j+1)
        }
    }
    return array;
}
function swap(array, a, b) {
    var tmp = array[a];
    array[a] = array[b];
    array[b] = tmp;
}
