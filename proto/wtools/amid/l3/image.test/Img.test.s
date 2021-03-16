( function _Img_test_s_()
{

'use strict';

if( typeof module !== 'undefined' )
{

  let _ = require( '../../../Tools.s' );

  _.include( 'wTesting' );

  require( '../image/entry/Img.s' );

}

let _global = _global_;
let _ = _global_.wTools;

// --
// tests
// --

function routinesOfImage( test )
{
  test.case = 'routines _.image.*';
  test.true( _.routineIs( _.image.readHead ) );
  test.true( _.routineIs( _.image.read ) );
  test.true( _.routineIs( _.image.fileRead ) );
}

// --
// declare
// --

let Self =
{

  name : 'Tools.mid.l4.img',
  silencing : 1,

  tests :
  {

    routinesOfImage,

  },

}

Self = wTestSuite( Self );
if( typeof module !== 'undefined' && !module.parent )
wTester.test( Self.name );

})();
