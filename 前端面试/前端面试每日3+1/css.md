# css

## 1. 圣杯布局和双飞翼布局的区别

参考[https://www.jianshu.com/p/81ef7e7094e8](https://www.jianshu.com/p/81ef7e7094e8)

两者功能相同，都是为了实现一个**两侧宽度固定，中间宽度自适应的三栏布局**。
两者实现方法虽然略有差异，不过都遵循以下要点：

- 两侧宽度固定，中间宽度自适应
- 中间部分在 DOM 结构上优先，以便先行渲染
- 允许三列中的任意一列成为最高列
- 只需要使用一个额外的`div`标签

**圣杯布局**

1. DOM 结构

```html
<body>
  <div id="header"></div>
  <div id="container">
    <div id="center" class="column"></div>
    <div id="left" class="column"></div>
    <div id="right" class="column"></div>
  </div>
  <div id="footer"></div>
</body>
```

2. CSS 代码

```css
body {
  min-width: 550px;
}
#container {
  padding-left: 200px;
  padding-right: 150px;
}
#container .column {
  float: left;
}
#center {
  width: 100%;
}
#left {
  width: 200px;
  margin-left: -100%;
  position: relative;
  right: 200px;
}
#right {
  width: 150px;
  margin-right: -150px;a
}
#footer {
  clear: both;
}
```

**双飞翼布局**

1.  DOM 结构

```html
<body>
  <div id="header"></div>
  <div id="container" class="column">
    <div id="center"></div>
  </div>
  <div id="left" class="column"></div>
  <div id="right" class="column"></div>
  <div id="footer"></div>
</body>
```

2.  CSS 代码

```css
body {
  min-width: 500px;
}
#container {
  width: 100%;
}
.column {
  float: left;
}

#center {
  margin-left: 200px;
  margin-right: 150px;
}

#left {
  width: 200px;
  margin-left: -100%;
}

#right {
  width: 150px;
  margin-left: -150px;
}

#footer {
  clear: both;
}
```

## 2. css3 有哪些新增的特性？

**边框(borders):**

- border-radius 圆角
- box-shadow 盒阴影
- border-image 边框图像

**背景**:

- background-size 背景图片的尺寸
- background_origin 背景图片的定位区域
- background-clip 背景图片的绘制区域

**渐变：**

- linear-gradient 线性渐变
- radial-gradient 径向渐变

**文本效果**：

- word-break
- word-wrap
- text-overflow
- text-shadow
- text-wrap
- text-outline
- text-justify

**转换：**

**2D 转换属性**

- transform
- transform-origin

**2D 转换方法**

- translate(x,y)
- translateX(n)
- translateY(n)
- rotate(angle)
- scale(n)
- scaleX(n)
- scaleY(n)
- rotate(angle)
- matrix(n,n,n,n,n,n)

**3D 转换属性：**

- transform
- transform-origin
- transform-style

**3D 转换：**

- translate3d(x,y,z)
- translateX(x)
- translateY(y)
- translateZ(z)
- scale3d(x,y,z)
- scaleX(x)
- scaleY(y)
- scaleZ(z)
- rotate3d(x,y,z,angle)
- rotateX(x)
- rotateY(y)
- rotateZ(z)
- perspective(n)

**过渡**

- transition

**动画**

- @Keyframes 规则
- animation

**弹性盒子(flexbox)**
**多媒体查询@media**

## 3. 在页面上隐藏元素的方法有哪些？

**占位:**

- `visibility: hidden;`
- `margin-left: -100%;`
- `opacity: 0;`
- `transform: scale(0);`

**不占位:**

- `display: none;`
- `width: 0; height: 0; overflow: hidden;`

**仅对块内文本元素:**

- `text-indent: -9999px;`
- `font-size: 0;`

## 4. css 选择器有哪些？哪些属性可以继承？

**css 选择器**

- 通配符
- id
- class
- 标签
- 后代选择器
- 子选择器
- 兄弟选择器
- 属性选择器
- 伪类选择器
- 伪元素选择器

**可继承的属性:**

- 字体属性:`font-size`，`font-weight`，`font-style`，`font-family`
- 文本属性:`text-indent`，`text-align`，`line-height`，`word-spacing`，`letter-spacing`，`color`，`direction`，`text-transform`
- 元素可见性:`visibility`，`opacity`
- 光标属性:`cursor`

## 5. css3 新增伪类有哪些，并简要描述？

| CSS3 伪类                                                                 | 描述                                                                     |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| :root                                                                     | 文档根元素，总是返回 html                                                |
| :last-child, :only-child, :only-of-type                                   | 文本的最后一个 / 唯一一个 / 指定类型的唯一一个 子元素                    |
| :nth-child(n), :nth-last-child(n), :nth-of-type(n), :nth-last-of-type(n), | 第 n 个 / 倒数第 n 个 / 指定类型的第 n 个 / 指定类型的倒数第 n 个 子元素 |
| :enabled, :disabled                                                       | 启用 / 禁用                                                              |
| :checked                                                                  | 已勾选                                                                   |
| :default                                                                  | 默认，例如 radio group 中默认选中的 radio                                |
| :valid, :invalid, :required, :optional, :in-range, :out-of-range          | 校验有效 / 校验无效 / 必填 / 非必填 / 限定范围内 / 限定范围外的 input    |
| :not()                                                                    | 括号内条件取反                                                           |
| :empty                                                                    | 没有子元素的元素                                                         |
| :target                                                                   | URL 片段标识符指向的元素                                                 |

## 6. 用 css 创建一个三角形，并简述原理

参考链接[前端面试每日 3+1](https://github.com/haizlin/fe-interview/issues/17)

## 7. 简述你对 BFC 规范的理解

BFC 全称为 块格式化上下文 (Block Formatting Context) 。

**参考链接**
[简书--什么是 BFC？](https://www.jianshu.com/p/0d713b32cd0d)

## 8. 清除浮动的方式有哪些及优缺点？

1. 给外部盒子也添加浮动
2. 在外部盒子内最下方添加 clear 属性的空盒子`<div style="clear:both;"></div>`
3. 用`overflow:hidden`清除浮动
4. 用 after 伪元素清除浮动（给外部盒子的 after 伪元素设置 clear 属性，再隐藏它）

```css
.clearfix {
  *zoom: 1;
}
.clearfix:before,
.clearfix:after {
  display: table;
  line-height: 0;
  content: '';
}
.clearfix:after {
  clear: both;
}
```

参考链接[前端面试每日 3+1](https://xiangshuo.blog.csdn.net/article/details/52749993)

## 9. 简述下你理解的优雅降级和渐进增强

- 优雅降级，先做好一个完善的具备完整体验的版本，再向下做兼容。
- 渐进增强，先做好一个可以基本正常使用的版本，再慢慢丰富体验和内容。
