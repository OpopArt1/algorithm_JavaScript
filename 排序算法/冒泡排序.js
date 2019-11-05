function bubbleSort(array) {
  var length = array.length, isSwap;
  for (var i = length - 1; i >= 0; i--) {     //逆序
    isSwap = false;
    for (var j = 0; j < i; j++) {            //正序
      array[j] > array[j+1] && (isSwap = true) && swap(j,j+1,array);
    }
    if(!isSwap)
      break;
  }
  return array;
}


//平均时间复杂度       最好情况        最坏情况        空间复杂度
//O(n²)                 O(n)            O(n²)       O(1)
