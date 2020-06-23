// function* NinjaGenerator(action) {
//   const imposter = yield 'Hattori ' + action
//   console.log(imposter === 'Hanzo')
//   yield '(Yoshi ' + imposter + ' ) ' + action
// }

// const ninjaIterator = NinjaGenerator('shulk')

// const result1 = ninjaIterator.next()
// console.log(result1.value)

// const result2 = ninjaIterator.next('Hanzo')
// console.log(result2.value)

function* NinjaGenerator() {
  try {
    yield 'Hattori'
    console.log('----------')
  } catch (e) {
    console.log(e)
  }
}

const ninjaIterator = NinjaGenerator()

const result1 = ninjaIterator.next()
console.log(result1.value === 'Hattori')
ninjaIterator.throw('catch this')
console.log(ninjaIterator.next())
