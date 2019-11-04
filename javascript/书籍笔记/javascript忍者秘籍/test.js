const shogun = {
	name: 'Yoshiaki',
	clan: 'Ashikaga',
	get fullTitle() {
		return this.name + ' ' + this.clan
	}, //在对象字面量上定义属性fullTitle的getter方法，该方法将name与clan两个属性值拼接在一起
	set fullTitle(value) {
		const segments = value.split(' ')
		this.name = segments[0]
		this.clan = segments[1]
	}
} //在对象字面量上定义属性fullTitle的setter方法，该方法将传入的参数值通过空格分隔开，并分别更新标准属性name与clan的值
assert(shogun.name === 'Yoshiaki', 'Our shogun Yoshiaki')
assert(shogun.clan === 'Ashikaga', 'Of clan Ashikaga')
assert(shogun.fullTitle === 'Yoshiaki Ashikaga', 'The full name is now Yoshiaki Ashikaga') // name与clan属性均是普通属性，具有直接属性值。而访问fullTitle属性的值时将调用对应的get方法计算属性值
shogun.fullTitle = 'Ieyasu Tokugawa'
assert(shogun.name === 'Ieyasu', 'Our shogun Ieyasu')
assert(shogun.clan === 'Tokugawa', 'Of clan Tokugawa')
assert(shogun.fullTitle === 'Ieyasu Tokugawa', 'The full name is now Ieyasu Tokugawa') //对fullTitle属性赋值时将调用对应的set方法，该方法将计算后分别赋值给name与clan属性
