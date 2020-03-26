/**
 * 手写call
 * 不传入第一个参数，那么上下文默认为window
 * 改变了this的指向，让新的对象可以执行该函数，并能接受参数
 */

Function.prototype.myCall = function(context) {
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  context = context || window
  context.fn = this
  const args = [...arguments].slice(1)
  const result = context.fn(...args)
  delete context.fn
  return result
}

/**
 * 以下是对手写call实现的分析：
 * 1. 首先context为可选参数，如果不传入则默认上下文为window
 * 2. 接下来给context创建一个fn属性，并将值设置为需要调用的函数
 * 3. 因为call可以传入多个参数作为调用函数的参数，所以需要将参数剥离出来
 * 4. 然后调用函数并将对象上的函数删除
 */

//  -----------------------以上为实现call的思路------------------------------  //

/**
 * 手写apply
 */

Function.prototype.myApply = function(context) {
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }

  context = context || window
  context.fn = this

  let result
  // 处理参数和call有区别
  if (arguments[1]) {
    result = context.fn(...arguments[1])
  } else {
    result = context.fn()
  }

  delete context.fn
  return result
}

//  -----------------------以上为实现apply的思路------------------------------  //

/**
 * 手写bind
 * bind的实现对比上两个函数略微复杂了一点，因为bind需要返回一个函数，需要判断一些边界问题
 */

Function.prototype.myBind = function(context) {
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  const _this = this
  const args = [...arguments].slice(1)
  // 返回一个函数
  return function F() {
    // 因为返回了一个函数，我们可以new F()，所以需要判断
    if (this instanceof F) {
      return new _this(...args, ...arguments)
    }
    return _this.apply(context, args.concat(...arguments))
  }
}

/**
 * 以下是对bind实现的分析
 * 1.前几步与之前的实现差不多
 * 2.bind返回了一个函数，对于函数来说有两种方式调用，一种是直接调用，一种是通过new的方式，我们来说直接调用的方式
 * 3.对于直接调用来说，这里选择了apply的方式实现，但是对于参数需要注意以下情况：因为bind可以实现蕾西这样的代码 f.bind(obj,1)(2)，
 *   所以我们需要将两边的参数拼接起来，于是就有了这样的实现args.concat(...arguments)
 * 4.最后来说通过new的方式，在之前的章节中我们学习过如何判断 this，对于 new 的情况来说，不会被任何方式改变 this，所以对于这种情况我们需要忽略传入的 this
 */

//  -----------------------以上为实现bind的思路------------------------------  //

/**
 * 在调用new的过程中会发生以下四件事情：
 * 1. 新生成了一个对象
 * 2. 链接到原型
 * 3. 绑定this
 * 4. 返回新对象
 */

/**
 * 实现new
 */

function create() {
  let obj = {}
  let Con = [].shift.call(arguments)
  obj.__proto__ = Con.prototype
  let result = Con.apply(obj, arguments)
  return result instanceof Object ? result : obj
}

/**
 * 以下是对实现的分析
 * 1. 创建一个空对象
 * 2. 获取构造函数
 * 3. 设置空对象的原型
 * 4. 绑定this 并执行构造函数
 * 5. 确保返回值为对象
 */

//  -----------------------以上为实现new的思路------------------------------  //

/**
 * 实现instanceof
 * instanceof可以正确的判断对象的类型，因为内部机制是通过判断对象的原型链中是不是
 * 能找到类型的prototype
 */

function myInstanceof(left, right) {
  let prototype = right.prototype
  left = left.__proto__
  while (true) {
    if (left === null || left === undefined) return false
    if (prototype === left) return true
    left = left.__proto__
  }
}

/**
 * 以下是对实现的分析：
 * 1. 首先获取类型的原型
 * 2. 然后获取对象的原型
 * 3. 然后一直循环对象的原型是否等于类型的原型，直到对象原型为null，因为原型链最终为null
 */

//  -----------------------以上为实现instanceof的思路------------------------------  //
