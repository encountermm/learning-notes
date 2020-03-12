// 选择排序 O(n^2)

// 数组从小到大排序
const selectionSort = (arr, n) => {
  for (let i = 0; i < n; i++) {
    // 寻找[i,n)区间里的最小值
    let minIndex = i
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    // 交换最小值与i的位置
    arr[i] = [arr[minIndex], (arr[minIndex] = arr[i])][0]
  }
}

// test
const test = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
selectionSort(test, 10)
console.log(test.join('<'))
