// 冒泡排序  O(n^2)
const bubbleSort = (arr, n) => {
  while (n > 0) {
    for (j = 0; j < n - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        arr[j] = [arr[j + 1], (arr[j + 1] = arr[j])][0]
      }
    }
    n--
  }
}

// test
const test = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
bubbleSort(test, 10)
console.log(test.join('<'))
