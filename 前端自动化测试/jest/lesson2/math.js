/*
 * @Descrition:
 * @Version: V1.0.0
 * @Author: encountermm
 * @Date: 2020-09-14 22:12:28
 * @LastEditors: encountermm
 * @LastEditTime: 2020-09-14 22:25:52
 */
function add(a, b) {
  return a + b
}

function minus(a, b) {
  return a - b
}

function multi(a, b) {
  return a * b
}

try {
  module.exports = { add, minus, multi }
} catch (e) {}
