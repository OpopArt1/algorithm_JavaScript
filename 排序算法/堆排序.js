function swap(a, b, array) {
    var temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}
function heapAdjust(array, i, length) {//堆调整
  var left = 2 * i + 1,
      right = 2 * i + 2,
      largest = i;
  if (left < length && array[largest] < array[left]) {
    largest = left;
  }
  if (right < length && array[largest] < array[right]) {
    largest = right;
  }
  if (largest != i) {
    swap(i, largest, array);
    heapAdjust(array, largest, length);
  }
}
function heapSort(array) {
  //建立大顶堆
  length = array.length
  for (var i = length>>1; i >= 0; i--) {
    heapAdjust(array, i, length);
  }
  //调换第一个与最后一个元素,重新调整为大顶堆
  for (var i = length - 1; i > 0; i--) {
    swap(0, i, array);
    heapAdjust(array, 0, --length);
  }
  return array;
}
//平均情况	最好情况	最坏情况	辅助空间	
//O(nlog₂n)	O(nlog₂n)	O(nlog₂n)	O(1)
