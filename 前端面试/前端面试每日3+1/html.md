# html

## 1. 页面导入样式时，使用 link 和@import 有什么区别？

区别：

1. link 是 html 标签，@import 是 css 提供的
2. link 引入的样式页面加载时同时加载，@import 引入的样式需等待页面加载完成后再加载
3. link 没有兼容性问题，@import 不兼容 ie5 以下
4. link 可以通过 js 操作 DOM 动态引入样式表改变样式，而@import 不可以。

## 2. html 的元素有哪些（包含 h5）

**行内元素**：

- a
- b
- span
- strong
- i
- em
- button
- input
- label
- br
- textarea
- select
  **块元素**

* div
* p
* h1-h6
* ol
* ul
* li
* table
* tbody
* td
* tr
* thead
* dl
* dt
* dd

**H5 新增元素**

- section
- article
- audio
- video
- hearder
- footer
- small

## 3. HTML 全局属性(global attribute)有哪些（包含 H5）？

| 属性     | 描述                  |
| -------- | --------------------- |
| id       | 元素的 id，文档内唯一 |
| class    | 元素的类标识          |
| style    | 元素的行内样式        |
| title    | 元素的额外信息        |
| tabindex | 元素的 Tab 键控制次序 |
| data-\*  | 元素的自定义属性      |
| lang     | 元素内容的语言        |

## 4. HTML5 的文件离线储存怎么使用，工作原理是什么？

参考链接：

- [有趣的 HTML5：离线存储](https://segmentfault.com/a/1190000000732617)

- [HTML5 离线存储原理](https://segmentfault.com/a/1190000006984353)

## 5. 简述超链接 target 属性的取值和作用

| 取值     | 描述                               |
| -------- | ---------------------------------- |
| \_blank  | 在新窗口中打开被链接文档           |
| \_self   | 默认，在相同的框架中打开被链接文档 |
| \_parent | 在父框架集中打开被链接文档         |
| \_top    | 在整个窗口中打开被链接文档         |

## 6. label 都有哪些作用，并举例说明？

**作用：**
表示用户界面中某个元素的说明
增加命中区域，屏幕阅读器可以读出标签。使使用辅助技术的用户更容易理解输入 哪些数据

**用法：**
单击关联标签激活 input，需给 input 一个 id 属性，给 label 一个 for 属性，设为同一个值

```html
<label for="hobby">爱好</label> <input id="hobby" type="checkbox" value="0" />
```

> **注意：** 一个 input 可以与多个标签相关联。标签本身并不与表单直接相关。它们只通过与它们相关联的控件间接地与表单相关联。
> 当点击或者触碰（tap）一个与表单控件相关联的 时，关联的控件的 click 事件也会触发。

## 7. iframe 框架都有哪些优缺点？

**优点：**

- 重载页面时不需要重载整个页面，只需要重载页面中的一个框架页
- 技术易于掌握，使用方便，可主要应用于不需搜索引擎来搜索的页面
- 方便制作导航栏

**缺点：**

- 会产生很多页面，不容易管理
- 不容易打印
- 对浏览器搜索引擎不友好
- 多框架的页面会增加服务器的 http 请求

**参考链接**

- [知乎\*Iframe 有什么好处，有什么坏处？国内还有哪些知名网站仍用 Iframe，为什么？有哪些原来用的现在抛弃了？又是为什么？](https://www.zhihu.com/question/20653055)

## 8. 浏览器内多个标签页之间的通信方式有哪些？

1. localStorage
2. postMessage（可跨域）
3. WebSocket（可跨域）

## 9. viewport 常见设置都有哪些？

| 设置          | 解释                                                               |
| ------------- | ------------------------------------------------------------------ |
| width         | 设置 layout viewport 的宽度，为一个正整数，或字符串"width-device"  |
| initial-scale | 设置页面的初识缩放值，为一个数字，可以带小数                       |
| minimum-scale | 允许用户的最小缩放值，为一个数字，可以带小数                       |
| maximum-scale | 允许用户的最大缩放值，为一个数字，可以带小数                       |
| height        | 设置 layout viewport 的高度，这个属性对我们并不重要，很少使用      |
| user-scalable | 是否允许用户进行缩放，值为"no"或"yes", no 代表不允许，yes 代表允许 |

## 10. 你对标签语义化的理解？

1. 语义化的标签，旨在让标签有自己的含义
2. 代码结构清晰，方便阅读，有利于团队合作开发；方便其他设备解析（如屏幕阅读器、盲人阅读器）以语义的方式来渲染网页；有利于 SEO 优化

## 11. 常见的浏览器内核都有哪些？并介绍下你对内核的理解？

内核主要分为渲染引擎和 js 引擎，前者负责页面的渲染，后者负责执行 js，之后，由于 js 引擎越来越独立，所以现在说的浏览器内核大都是指渲染引擎。

目前主流的内核有以下 4 个：

- **Trident**：由微软开发，即我们熟知的 IE 内核
- **Gecko**：使用 C++开发，包括了 SpiderMonkey 即我们熟知的 FireFox
- **Presto**：Opera 使用的内核
- **Webkit**：前端使用最多的 Chrome 和 Safari 使用的内核

## 12. html5 中的 form 怎么关闭自动补全？

`autocomplete="off"`

## 13. 为什么 HTML5 只需要写<!DOCTYPE HTML>就可以？

DOCTYPE 是 document type 的缩写，是 HTML 中用来区分标准模式和怪异模式的声明，用来告知浏览器用标准模式渲染页面，在页面开始写即可
怪异模式兼容老页面
