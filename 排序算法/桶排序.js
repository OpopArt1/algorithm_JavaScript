function bucketSort(array, bucketSize) {
  if (array.length === 0) {
    return array;
  }

  var i = 1,
      min = array[0],
      max = min;
  while (i++ < array.length) {
    if (array[i] < min) {
      min = array[i];                //输入数据的最小值
    } else if (array[i] > max) {
      max = array[i];                //输入数据的最大值
    }
  }

  //桶的初始化
  bucketSize = bucketSize || 5; //设置桶的默认大小为5
  var bucketCount = ~~((max - min) / bucketSize) + 1, //桶的个数
      buckets = new Array(bucketCount); //创建桶
  for (i = 0; i < buckets.length; i++) {
    buckets[i] = []; //初始化桶
  }

  //将数据分配到各个桶中,这里直接按照数据值的分布来分配,一定范围内均匀分布的数据效率最为高效
  for (i = 0; i < array.length; i++) {
    buckets[~~((array[i] - min) / bucketSize)].push(array[i]);
  }

  array.length = 0;
  for (i = 0; i < buckets.length; i++) {
    quickSort(buckets[i]); //对每个桶进行排序，这里使用了快速排序
    for (var j = 0; j < buckets[i].length; j++) {
      array.push(buckets[i][j]); //将已排序的数据写回数组中
    }
  }
  return array;
}
