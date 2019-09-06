/**
  let arr1=["3","5","7","10"]
  let arr2 = ["2","17","24","28"]
  怎么算出  arr1=["3","null","null","null","null","null","null","null","5","null","null","7","null","10"]
  arr2=["2","4","6","8","10","12","14","16","17","20","22","24","26","28"]
  即arr2的相邻两位元素之间列出2的倍数,对应arr1是null
 */

const handleArray = (arr1, arr2) => {
	const getMultipleArr = (min, max) => {
		let minBase = min % 2 ? Math.floor(min / 2) : min / 2,
			maxBase = max % 2 ? Math.ceil(max / 2) : max / 2

		let ret = []
		for (let i = minBase + 1; i < maxBase; i++) {
			ret.push(i * 2)
		}
		return ret
	}

	let arr1Result = [],
		arr2Result = []

	for (let i = 0; i < arr2.length; i++) {
		arr1Result.push(arr1[i])
		arr2Result.push(arr2[i])
		if (i < arr2.length - 1) {
			let temp = getMultipleArr(arr2[i], arr2[i + 1])
			arr1Result.push(...new Array(temp.length).fill(null))
			arr2Result.push(...temp)
		}
	}
	return {
		arr1: arr1Result,
		arr2: arr2Result
	}
}
let arr1 = [3, 5, 7, 10, 11, 56, 646, 1561, 2231, 3212, 46456, 300000],
	arr2 = [2, 17, 24, 28, 100, 160, 180, 366, 1000, 2000, 60000, 300000]

console.log(handleArray(arr1, arr2))
