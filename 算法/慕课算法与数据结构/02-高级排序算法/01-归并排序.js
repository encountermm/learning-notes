// 归并排序

// 将arr[l...mid]和arr[mid+1...r]两部分进行归并
function _merge(arr, l, mid, r) {
  let tempArr = new Array(r - l + 1)

  for (let i = l; i <= r; i++) {
    tempArr[i - l] = arr[i]
  }
  let i = l,
    j = mid + 1
  for (let k = l; k <= r; k++) {
    if (i > mid) {
      arr[k] = tempArr[j - l]
      j++
    } else if (j > r) {
      arr[k] = tempArr[i - l]
      i++
    } else if (tempArr[i - l] < tempArr[j - l]) {
      arr[k] = tempArr[i - l]
      i++
    } else {
      arr[k] = tempArr[j - l]
      j++
    }
  }
}
// 递归使用归并排序，对arr[l...r]的范围进行排序
function _mergeSort(arr, l, r) {
  if (l >= r) return
  let mid = (l + r) / 2
  _mergeSort(arr, l, mid)
  _mergeSort(arr, mid + 1, r)
  _merge(arr, l, mid, r)
}

const mergeSort = (arr, n) => {
  _mergeSort(arr, 0, n - 1)
}

// test
const test = [8, 7, 6, 5, 4, 3, 2, 1]
mergeSort(test, 8)
console.log(test.join('<'))
