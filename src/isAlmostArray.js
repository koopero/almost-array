module.exports = isAlmostArray

function isAlmostArray( ob, options ) {
  options = options || {}

  // Real array, not almost-array
  if ( Array.isArray( ob ) )
    return false

  // Only objects can be almost-arrays
  if ( 'object' != typeof ob || ob === null )
    return false


  var keys = []
  for ( var k in ob ) {
    if ( k == 'length' )
      continue

    if ( parseInt( k ) != k )
      return false

    keys.push( k )
  }

  // Objects matching { length: 0 } are almost arrays!
  if ( !keys.length && ob['length'] === 0 ) {
    return true
  }

  if ( !keys.length )
    return !!options.matchEmpty

  keys.sort()
  for ( var i = 0; i < keys.length; i ++ )
    if ( keys[i] != i )
      return false

  return true
}
