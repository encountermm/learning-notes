// 测试用例

// 生成有n个元素的随机数组,每个元素的随机范围为[rangeL, rangeR]
const generateRandomArray = (n, rangeL, rangeR) => {
  let arr = []
  for (let i = 0; i < n; i++) {
    arr[i] = parseInt(Math.random() * (rangeR - rangeL + 1) + rangeL, 10)
  }
  return arr
}
