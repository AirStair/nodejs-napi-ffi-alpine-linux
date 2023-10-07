var ffi = require('ffi-napi');

var libm = ffi.Library('./libMy', {
  'ceil': [ 'double', [ 'double' ] ]
});
libm.ceil(1.5); // 2

// You can also access just functions in the current process by passing a null
var current = ffi.Library(null, {
  'atoi': [ 'int', [ 'string' ] ]
});
current.atoi('1234');
