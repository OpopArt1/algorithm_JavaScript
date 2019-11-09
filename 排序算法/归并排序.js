function mergeSort(array) {  //采用自上而下的递归方法
  var length = array.length;
  if(length < 2) {
    return array;
  }
  var m = (length >> 1),
      left = array.slice(0, m),
      right = array.slice(m); //拆分为两个子数组
  return merge(mergeSort(left), mergeSort(right));//子数组继续递归拆分,然后再合并
}
function merge(left, right){ //合并两个子数组
  var result = [];
  while (left.length && right.length) {
    var item = left[0] <= right[0] ? left.shift() : right.shift();//注意:判断的条件是小于或等于,如果只是小于,那么排序将不稳定.
    result.push(item);
  }
  return result.concat(left.length ? left : right);
}
//平均时间复杂度   最好情况    最坏情况    空间复杂度
//O(nlog₂n)       O(nlog₂n)   O(nlog₂n)   O(n)
