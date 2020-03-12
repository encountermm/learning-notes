function mergeSort(arr, start, end) {
  if (start >= end) {
    return
  }
  let mid = start + parseInt((end - start) / 2)
  mergeSort(arr, start, mid)
  mergeSort(arr, mid + 1, end)
  merge(arr, start, mid, end)
}

function merge(arr, start, mid, end) {
  let temp = []
  let len = 0
  let i = start,
    j = mid + 1
  for (; i <= mid && j <= end; ) {
    if (arr[i] > arr[j]) {
      temp[len++] = arr[j++]
    } else {
      temp[len++] = arr[i++]
    }
  }
  while (i <= mid) {
    temp[len++] = arr[i++]
  }
  while (j <= end) {
    temp[len++] = arr[j++]
  }
  for (let t = 0; t < len; t++) {
    arr[t + start] = temp[t]
  }
}

// test
const test = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
mergeSort(test, 0, 9)
console.log(test.join('<'))
