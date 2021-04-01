const tap = require('tap')
const { classify } = require('./index.js')

tap.test('test(1)', async (t) => {
  const result = classify(1)
  t.equal(result, 'small')
  t.end()
})

tap.test('test(2)', async (t) => {
  const result = classify(2)
  t.equal(result, 'large')
  t.end()
})
