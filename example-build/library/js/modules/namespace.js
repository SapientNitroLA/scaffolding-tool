// Global Namespace for SapientNitro object
window.SN = window.SN || {};

/*
* Convenience function for parsing string namespaces and automatically generating nested namespaces.
* http://addyosmani.com/blog/essential-js-namespacing/
* http://yuilibrary.com/yui/docs/api/classes/YUI.html#method_namespace
*
* Example:
*    SN.extend( 'some.type.of.object' );
*
* @param ns {String} A dot separated namespace
*
*/
window.SN.extend = function( ns ) {

    'use strict';

    var parts = ns.split( '.' )
        , parent = this
        , len
        , i
        ;

    if ( parts[ 0 ] === 'SN' ) {

        parts = parts.slice( 1 );

    }

    for ( i = 0, len = parts.length; i < len; i++ ) {

        // Create a property if it doesn't exist
        if ( typeof parent[ parts[ i ] ] === 'undefined' ) {

            parent[ parts[ i ] ] = {};

        }

        parent = parent[ parts[ i ] ];

    }

    return parent;

};
