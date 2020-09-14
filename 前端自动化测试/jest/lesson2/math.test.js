/*
 * @Descrition:
 * @Version: V1.0.0
 * @Author: encountermm
 * @Date: 2020-09-14 22:15:01
 * @LastEditors: encountermm
 * @LastEditTime: 2020-09-14 22:27:44
 */
const math = require('./math')
const { add, minus, multi } = math

test('测试加法 3 + 7', () => {
  expect(add(3, 7)).toBe(10)
})

test('测试减法 3 - 3', () => {
  expect(minus(3, 3)).toBe(0)
})

test('测试乘法 3 * 3', () => {
  expect(multi(3, 3)).toBe(9)
})

// 单元测试，集成测试
// 模块测试，多个模块测试
