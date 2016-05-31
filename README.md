
# Example

```javascript
const almostArray = require('almost-array')
    , isAlmostArray = almostArray.isAlmostArray
    , convert = almostArray.convert

isAlmostArray(
  { 0: 'zero', 1: 'one' }
) // true

isAlmostArray(
  { 0: 'zero', 1: 'one', length: 2 }
) // true

isAlmostArray(
  { 0: 'zero', 1: 'one', otherKey: 'value' }
) // false

isAlmostArray(
  [ 'value' ]
) // false

convert(
  {
    foo: { 0: 'zero', 1: 'one' },
    bar: 'baz'
  }
) // { foo: [ 'zero', 'one' ], bar: 'baz' }


```

# API

#### isAlmostArray( object, options ) => bool

#### convert( object, options ) => *

#### options.deep
Apply conversion recursively. Default: `true`
#### options.clone
Make clones of objects rather than changing the keys of existing object. Unchanged objects will not be cloned. Default: `false`
#### options.matchEmpty
Treat empty objects (`{}`) as almost-arrays. Default: `false`
