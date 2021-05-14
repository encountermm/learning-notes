var obj = {
  value: 1,
  valueOf() {
    return 2
  },
  toString() {
    return '3'
  },
  [Symbol.toPrimitive]() {
    return 4
  }
}

console.log(obj + 1)

console.log(10 + {})

console.log([1, 2, undefined, 4, 5] + 10)
