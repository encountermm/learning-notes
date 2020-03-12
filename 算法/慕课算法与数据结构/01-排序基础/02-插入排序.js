// 插入排序 O(n^2)
const insertionSort = (arr, n) => {
  for (let i = 1; i < n; i++) {
    // 寻找元素arr[i]合适的插入位置
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        // 交换arr[j]与arr[j-1]
        arr[j] = [arr[j - 1], (arr[j - 1] = arr[j])][0]
      } else {
        break
      }
    }
  }
}

// test
const test = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
insertionSort(test, 10)
console.log(test.join('<'))
