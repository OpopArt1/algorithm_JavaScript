function quickSort(array, left, right) {
    if (left < right) {
      partitionIndex = partition(array, left, right);//切分的基准值
      quickSort(array, left, partitionIndex-1);
      quickSort(array, partitionIndex+1, right);
    }
    return array;
  }
  function partition(array, left ,right) {   //分区操作
    for (var i = left+1, j = left; i <= right; i++) {//j是较小值存储位置的游标
      array[i] < array[left] && swap(i, ++j, array);//以第一个元素为基准
    }
    swap(left, j, array);            //将第一个元素移至中间   
    return j;
  }
function swap(a, b, arr) {
    var tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
}

