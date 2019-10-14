# JS 基础知识

## 变量类型和计算

---

### 题目

1.  JS 中使用 typeof 能得到的哪些类型

    ```js
    typeof undefined //"undefined"
    typeof 'abc' //"string"
    typeof 123 //"number"
    typeof true //"boolean"
    typeof {} //"object"
    typeof [] //"object"
    typeof null //"object"
    typeof console.log //"function"
    ```

2.  何时使用`===`何时使用`==`

```js
if (obj.a == null) {
	// 这里相当于obj.a===null||obj.a===undefined，简写形式
}
```

3.  JS 中有哪些内置函数

```js
// 数据封装类对象
Object
Array
Boolean
Number
String
Function
Date
RegExp
Error
Math
```

4.  JS 变量按照存储方式区分为哪些类型,并描述其特点

```js
// 值类型 ->数字、字符串...
// 引用类型->对象...
```

5.  如何理解 JSON

```js
// 是一个js的对象，同时也是一种数据格式
JSON.stringify()
JSON.parse()
```

### 知识点

#### 1.变量类型

-   `值类型` vs `引用类型`
-   `typeof`

#### 2.变量计算--强制类型转换

-   字符串拼接
-   ==运算符
-   if 语句
-   逻辑运算
