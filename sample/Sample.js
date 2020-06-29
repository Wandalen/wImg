
let _ = require( 'wimg' );

let image = _.image.fileRead( __dirname + '/../proto/dwtools/amid/l3/image.test/_assets/basic/Pixels-2x2.png' ).structure;
console.log( image );
/* log :
[Object: null prototype] {
  special: [Object: null prototype] { interlaced: false },
  channelsMap: [Object: null prototype] {
    red: { name: 'red', bits: 8, order: 0 },
    green: { name: 'green', bits: 8, order: 1 },
    blue: { name: 'blue', bits: 8, order: 2 },
    alpha: { name: 'alpha', bits: 8, order: 3 }
  },
  channelsArray: [ 'red', 'green', 'blue', 'alpha' ],
  buffer: ArrayBuffer {
    [Uint8Contents]: <ff 00 00 ff 00 ff 00 ff 00 00 ff ff ff ff ff ff>,
    byteLength: 16
  },
  dims: [ 2, 2 ],
  bytesPerPixel: 4,
  bitsPerPixel: 32,
  hasPalette: false
}
*/
