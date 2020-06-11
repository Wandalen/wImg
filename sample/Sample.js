
let _ = require( 'wimg' );

let image = _.image.fileRead( __dirname + '/../proto/dwtools/amid/l4.test/_assets/basic/Pixels-2x2.png' );
console.log( image );
/* log :
_structureHandle full
{
  filePath: '/home/dmytry/Documents/IntellectualServiceMysnyk/wImg/sample/../proto/dwtools/amid/l4.test/_assets/basic/Pixels-2x2.png',
  reader: wImageReaderPngjs { formed: 1 },
  data: ArrayBuffer {
    [Uint8Contents]: <89 50 4e 47 0d 0a 1a 0a 00 00 00 0d 49 48 44 52 00 00 00 02 00 00 00 02 08 06 00 00 00 72 b6 0d 24 00 00 00 01 73 52 47 42 00 ae ce 1c e9 00 00 00 04 67 41 4d 41 00 00 b1 8f 0b fc 61 05 00 00 00 09 70 48 59 73 00 00 0e c2 00 00 0e c2 01 15 28 4a 80 00 00 00 14 49 44 41 54 18 57 63 f8 cf 00 44 40 c8 ... 27 more bytes>,
    byteLength: 127
  },
  format: 'png',
  ext: 'png',
  sync: 1,
  mode: 'full',
  onHead: null,
  readerClass: [Function: wImageReaderPngjs] {
    shortName: 'Pngjs',
    Formats: [Getter/Setter],
    Exts: [Getter/Setter],
    [Symbol(Formats)]: [ 'png' ],
    [Symbol(Exts)]: [ 'png' ]
  },
  structure: [Object: null prototype] {
    special: [Object: null prototype] { interlaced: false },
    channelsMap: [Object: null prototype] {
      red: [Object],
      green: [Object],
      blue: [Object],
      alpha: [Object]
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
  },
  headGot: true,
  originalStructure: {
    width: 2,
    height: 2,
    depth: 8,
    interlace: false,
    palette: false,
    color: true,
    alpha: true,
    bpp: 4,
    colorType: 6,
    data: <Buffer ff 00 00 ff 00 ff 00 ff 00 00 ff ff ff ff ff ff>,
    gamma: 0.45455
  }
}
*/
