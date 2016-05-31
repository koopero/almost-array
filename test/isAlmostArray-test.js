const assert = require('assert')

describe('isAlmostArray', function () {
  const isAlmostArray = require('../src/isAlmostArray')

  it('positive', function () {
    assert.equal( isAlmostArray( { 0: 'bar', 1: 'baz' } ), true )
    assert.equal( isAlmostArray( { 1: 'bar', 0: 'baz' } ), true )
    assert.equal( isAlmostArray( { 0: 'bar', length: 0 } ), true )
  })

  it('zero length', function () {
    assert.equal( isAlmostArray( { length: 0 } ), true )
  })

  it('negative', function () {
    assert.equal( isAlmostArray( {} ), false )
    assert.equal( isAlmostArray( [] ), false )
    assert.equal( isAlmostArray( { 1: 'bar' } ), false )
    assert.equal( isAlmostArray( null ), false )
    assert.equal( isAlmostArray( function () {} ), false )
  })
})
