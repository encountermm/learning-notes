# js

## 1. 用递归算法实现，数组长度为 5 且元素的随机数在 2-32 之间不重复的值

```js
let arr = new Array(5)
let num = randomNumber()
let i = 0
randomArr(arr, num)

function randomArr(arr, num) {
  if (arr.indexOf(num) < 0) {
    arr[i] = num
    i++
  } else {
    num = randomNumber()
  }
  if (i >= arr.length) {
    console.log(arr)
    return
  } else {
    randomArr(arr, num)
  }
}
function randomNumber() {
  return Math.floor(Math.random() * 31 + 2)
}
```

## 2. 写一个方法去掉字符串中的空格

```js
var trim = function (str) {
  return str.replace(/\s*/g, '')
}
str.replace(/\s*/g, '') //去除字符串中所有的空格
str.replace(/^\s*|\s*$/g, '') //去除字符串内两头的空格
str.replace(/^\s*/, '') //去除字符串内左侧的空格
str.replace(/(\s*$)/g, '') //去除字符串内右侧的空格
```

## 3. 去除字符串中最后一个指定的字符

```js
// 使用正则
function delLast(str, target) {
  let reg = new RegExp(`${target}(?=([^${target}]*)$)`)
  return str.replace(reg, '')
}
//
function delLast(str, target) {
  for (let i = str.length - 1; i >= 0; i--) {
    if (target === str[i]) {
      return str.substring(0, i) + str.substring(i + 1)
    }
  }
  return str
}
```

## 4. 写一个方法把下划线命名转成大驼峰命名

```js
function changeStr(str) {
  if (str.split('_').length == 1) return
  str.split('_').reduce((a, b) => {
    return a + b.substr(0, 1).toUpperCase() + b.substr(1)
  })
}
```

## 5. 写一个把字符串大小写切换的方法

```js
// 正则
function caseConvert(str) {
  return str.replace(/([a-z]*)([A-Z]*)/g, (m, s1, s2) => {
    return `${s1.toUpperCase()}${s2.toLowerCase()}`
  })
}
caseConvert('AsA33322A2aa') //aSa33322a2AA

// 不使用正则，split
function caseConvertEasy(str) {
  return str
    .split('')
    .map((s) => {
      if (s.charCodeAt() <= 90) {
        return s.toLowerCase()
      }
      return s.toUpperCase()
    })
    .join('')
}

console.log(caseConvertEasy('AbCxYz')) // aBcXyZ
```

## 6. 写一个去除制表符和换行符的方法

```js
/**
 * \n 换行符 new line
 * \r 回车符 return
 * \t 制表符 tab
 * \b 退格符 backspace
 * \f 换页符 form feed
 * @param {*} str
 */
function fn(str) {
  return str.replace(/[\t\n]/g, '')
}
```

## 7. 统计某一字符串在另一个字符串中出现的次数

```js
// 逐一循环匹配
function strCount(str, target) {
  let count = 0
  if (!target) return count
  while (str.match(target)) {
    str = str.replace(target, '')
    count++
  }
  return count
}
// split 另辟捷径
function strCount(str, target) {
  return str.split(target).length - 1
}
```

## 8. 写一个加密字符串的方法

```js
function encode(str) {
  return btoa(encodeURIComponent(str))
}

function decode(str) {
  return decodeURIComponent(atob(str))
}
```
