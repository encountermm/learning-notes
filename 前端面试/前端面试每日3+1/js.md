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

## 9. 写一个判断数据类型的方法

```js
// 安全监测js基本数据类型和内置对象
// 参数：o表示检测的值
// 返回值：返回字符串"undefined"、"number"、"boolean"、"string"、"function"、"regexp"、"array"、"date"、"error"、"object"、"null"
function typeOf(o) {
  var _toString = Object.prototype.toString
  var _type = {
    undefined: 'undefined',
    number: 'number',
    boolean: 'boolean',
    string: 'string',
    '[object Function]': 'function',
    '[object RegExp]': 'regexp',
    '[object Date]': 'date',
    '[object Error]': 'error'
  }
  return _type[typeof 0] || _type[_toString.call(o)] || (o ? 'object' : 'null')
}
```

## 10. 简要描述下什么是回调函数，并写出一个例子来。

> 回调是把一个函数作为参数传递给另一个函数，当该函数满足某个条件时触发该函数参数。
> 主要用于异步操作，例如网络请求，防止页面同步代码阻塞导致渲染进程停止。

```js
// 例子
function longTask(callback, timeout) {
  setTimeout(callback, timeout)
}
longTask(() => {
  console.log('回调任务被执行了')
}, 3000)
console.log('我是同步代码，不会阻塞我')
```

## 11. 简要描述下 js 有哪些内置的对象？

- Date
- String
- Math
- Number
- Array
- Function
- 函数参数集合 arguments
- 布尔对象 Boolean
- 错误对象 Error
- 基础对象 Object

## 12. 写一个获取当前 url 查询字符串中的参数的方法

```js
function params() {
  const search = window.location.search
  search = search.substr(1, search.length)
  const res = {}
  if (!search) return res
  search.split('&').map((item) => {
    const [key, value] = item.split('=')
    res[key] = decodeURIComponent(value)
  })
  return res
}
```

## 13. 说说你对 js 作用域的理解？

- 全局作用域
- 局部作用域
  - 函数作用域（函数内）
  - 块级作用域（es6）
