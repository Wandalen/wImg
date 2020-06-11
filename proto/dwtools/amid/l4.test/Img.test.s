( function _Img_test_s_() {

'use strict';

if( typeof module !== 'undefined' )
{

  let _ = require( '../../Tools.s' );

  _.include( 'wTesting' );

  require( '../../amid/l4/Img.s' );

}

var _global = _global_;
var _ = _global_.wTools;

// --
// tests
// --

function routinesOfImage( test )
{
  test.case = 'routines _.image.*';
  test.is( _.routineIs( _.image.readHead ) );
  test.is( _.routineIs( _.image.read ) );
  test.is( _.routineIs( _.image.fileRead ) );
}

// --
// declare
// --

var Self =
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
