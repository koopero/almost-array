const assert = require('assert')
    , equal = assert.strictEqual
    , equalDeep = assert.deepStrictEqual
    , convert = require('../src/convert')
    , isAlmostArray = require('../src/isAlmostArray')


describe('options', function () {
  describe('clone',function () {

  })

  describe('.deep',function () {
    const src = { 0: { 0: 'foo' } }

    it('true (default)', function () {
      const options = { deep: true }
      equalDeep( convert( src, options ), [ [ 'foo' ] ] )
    })

    it('false', function () {
      const options = { deep: false }
      equalDeep( convert( src, options ), [ { 0: 'foo' } ] )
    })
  })

  describe('.notCircular',function () {
    // Set up a circular almost-array
    const a = {}
        , b = { 0: a }

    a[0] = b


  })

  describe('.matchEmpty',function () {
    it('true', function () {
      const options = { matchEmpty: true }
      equal( isAlmostArray( {}, options ), true )
      equal( isAlmostArray( { length: 0 }, options ), true )
      equalDeep( convert({}, options ), [] )
      equalDeep( convert({ key: 'foo'}, options ), { key: 'foo'} )
    })

    it('false (default)', function () {
      const options = { matchEmpty: false }
      equal( isAlmostArray( {}, options ), false )
      equalDeep( convert({}, options ), {} )
      equalDeep( convert({ key: 'foo'}, options ), { key: 'foo'} )
    })
  })
})
