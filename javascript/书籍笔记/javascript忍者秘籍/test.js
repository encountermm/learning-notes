function isPrime(value) {
	if (!isPrime.answers) {
		isPrime.answers = {}
	} //创建缓存
	if (isPrime.answers[value] !== undefined) {
		return isPrime.answers[value]
	} //检查缓存的值
	var prime = value !== 0 && value !== 1 //1 is not a prime
	for (var i = 2; i < value; i++) {
		if (value % i === 0) {
			prime = false
			break
		}
	}
	return (isPrime.answers[value] = prime) //存储计算的值
}

assert(isPrime(5), '5 is prime!')
assert(isPrime.answers[5], 'The answer was cached!') //测试该函数是否正常工作
