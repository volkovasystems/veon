
const assert = require( "assert" );
const veon = require( "./veon.js" );

assert.equal( veon( "production", "node --version" ), process.version, "should be equal" );

console.log( "ok" );
