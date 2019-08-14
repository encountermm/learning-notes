## 基本知识
[链接](https://www.cnblogs.com/tim-li/archive/2012/08/06/2580252.html#-1)

> canvas元素绘制图像的时候有两种方法，分别是
> 
> context.fill()//填充
> 
> context.stroke()//绘制边框
> 
> style:在进行图形绘制前，要设置好绘图的样式
> 
> context.fillStyle//填充的样式
> 
> context.strokeStyle//边框样式
> 
> context.lineWidth//图形边框宽度
> 
> 颜色的表示方式:
> 
> 直接用颜色名称:"red" "green" "blue"
> 
> 十六进制颜色值: "#EEEEFF"
> 
> rgb(1-255,1-255,1-255)
> 
> rgba(1-255,1-255,1-255,透明度)

### 绘制矩形   context.fillRect(x,y,width,height)  strokeRect(x,y,width,height)

    x:矩形起点横坐标（坐标原点为canvas的左上角，当然确切的来说是原始原点，后面写到变形的时候你就懂了，现在暂时不用关系）
    
    y:矩形起点纵坐标
    
    width:矩形长度
    
    height:矩形高度

### 清除矩形区域  context.clearRect(x,y,width,height)

    x:清除矩形起点横坐标
    
    y:清除矩形起点纵坐标
    
    width:清除矩形长度
    
    height:清除矩形高度
    
### 圆弧  context.arc(x, y, radius, starAngle,endAngle, anticlockwise)

    x:圆心的x坐标
    
    y:圆心的y坐标
    
    straAngle:开始角度
    
    endAngle:结束角度
    
    anticlockwise:是否逆时针（true）为逆时针，(false)为顺时针
    
    ps：经过试验证明书本上ture是顺时针，false是逆时针是错误的，而且无论是逆时针还是顺时针，角度都沿着顺时针扩大，
![image](https://pic002.cnblogs.com/images/2012/407398/2012080217203994.png)

### 路径  context.beginPath()    context.closePath()
![image](https://pic002.cnblogs.com/images/2012/407398/2012080309473833.png)

 绘制线段 context.moveTo(x,y)  context.lineTo(x,y)

    x:x坐标

    y:y坐标

    每次画线都从moveTo的点到lineTo的点，

    如果没有moveTo那么第一次lineTo的效果和moveTo一样，

    每次lineTo后如果没有moveTo，那么下次lineTo的开始点为前一次lineTo的结束点