function swap(array, a, b) {
    var temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}
//建初始堆
function heapInsert(array, index) {
    while(array[index] > array[parseInt((index-1)/2)]) {
        swap(array, index, parseInt((index-1)/2));
        index = parseInt((index-1)/2);
    }
}
//重建堆
function heapfiy(array, index, size) {
    let left = index*2 + 1;
    while(left <= size) {
        let largest = 
            left + 1 <= size && array[left] < array[left+1] ? left + 1 : left;
        largest = array[index] < array[largest] ? largest : index;
        if(largest === index) break;
        swap(array, largest, index);
        index = largest;
        left = index*2 + 1;
    }
}

function heap(array) {
    if(array === null || array.length === 0) {return array}
    var size = array.length - 1;
    for(let i = 0; i <= size; i++) {
        heapInsert(array, i);
    }
    swap(array, 0, size--)
    while(size >= 0) {
        heapfiy(array, 0, size);
        swap(array, 0, size--);
    }
    return array;
}
