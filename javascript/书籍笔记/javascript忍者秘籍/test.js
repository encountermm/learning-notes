const promise = new Promise((resolve, reject) => {
	//如果在处理promise时出现未处理的异常，则会被隐式地拒绝
	undeclaredVariable++
})

// 如果发生了异常，则第二个回调函数error将被调用
promise
	.then(() => fail("Happy path, won't be called!"))
	.catch(error => pass('Third promise was also rejected'))
