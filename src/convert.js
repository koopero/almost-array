module.exports = toArrayRecursive

const isAlmostArray = require('./isAlmostArray')

const clone = ( ob ) => require('util')._extend( {}, ob )

function toArrayRecursive ( ob, options ) {
  options = options || {}

  var isClone = false
  if ( isAlmostArray( ob, options ) ) {
    ob = toArray( ob )
    isClone = true
  }

  if ( 'object' == typeof ob && options.deep !== false ) {
    for ( var key in ob ) {
      if ( ob.hasOwnProperty( key ) ) {
        var replace = toArrayRecursive( ob[key], options )
        if ( replace !== ob[key]) {
          if ( !isClone && options.clone ) {
            ob = clone( ob )
            isClone = true
          }
          ob[key] = replace
        }
      }
    }
  }

  return ob
}

function toArray( ob ) {
  const result = []

  var i = 0
  while ( 'undefined' != typeof ob[i] ) {
    result[i] = ob[i]
    i++
  }

  return result
}
