# JS 基础知识点及常考面试题（一）

## **原始（Primitive）类型**

在 JS 中，存在 6 种原始值，分别是：

- `boolean`
- `null`
- `undefined`
- `number`
- `string`
- `symbol`

首先原始类型存储的都是值，是没有函数可以调用的，比如`undefined.toString()`。

此时你肯定会有疑问，这不对呀，明明 `'1'.toString()` 是可以使用的。其实在这种情况下，`'1'` 已经不是原始类型了，而是被强制转换成了 `String` 类型也就是对象类型，所以可以调用 `toString` 函数。

## **对象（Object）类型**

对象类型和原始类型不同的是，原始类型存储的是值，对象类型存储的是地址（指针）。当你创建了一个对象类型的时候，计算机会在内存中帮我们开辟一个空间类存放值，但是我们需要找到这个空间，这个空间会拥有一个地址（指针）。

```javascript
const a = []
```

对于常量`a`来说，假设内存地址（指针）为`#001`,那么在地址`#001`的位置存放了值`[]`，常量`a`存放了地址（指针）`#001`，再看以下代码

```javascript
const a = []
const b = a
b.push(1)
```

当我们将变量赋值给另外一个变量时，复制的是原本变量的地址（指针），也就是说当前变量`b`存放的地址（指针）也是`#001`,当我们进行数据修改的时候，就会修改存放再地址（指针）`#001`上的值，也就导致了两个变量的值都发生了改变。

接下来我们来看函数参数是对象的情况

```javascript
function test(person) {
  person.age = 26
  person = {
    name: 'yyy',
    age: 30
  }
  return person
}
const p1 = {
  name: 'kimi',
  age: 2
}
const p2 = test(p1)

console.log(p1) // -> ?
console.log(p2) // -> ?
```
