const assert = require('assert')


describe('convert', function () {
  const convert = require('../src/convert')
  describe('non-arrays', function () {
    it('will be passed unchanged', function () {
      const ob = { foo: 'bar' }
          , num = 4
          , func = (a) => a
          , bool = false
          , array = [ 'foo' ]

      assert.equal( convert( ob ), ob )
      assert.equal( convert( num ), num )
      assert.equal( convert( func ), func )
      assert.equal( convert( bool ), bool )
      assert.equal( convert( array ), array )

    })
  })
})
