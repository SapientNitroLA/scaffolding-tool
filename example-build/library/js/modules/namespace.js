// Global Namespace for MGM Resorts International
window.MGMRI = window.MGMRI || {};

/*
* Convenience function for parsing string namespaces and automatically generating nested namespaces.
* http://addyosmani.com/blog/essential-js-namespacing/
* http://yuilibrary.com/yui/docs/api/classes/YUI.html#method_namespace
*
* Example:
*    MGMRI.extend( 'some.type.of.object' );
*
* @param ns {String} A dot separated namespace
*
*/
window.MGMRI.extend = function( ns ) {

    'use strict';

    var parts = ns.split( '.' )
        , parent = this
        ;

    if ( parts[ 0 ] === 'MGMRI' ) {
        parts = parts.slice( 1 );
    }

    for ( var i = 0, len = parts.length; i < len; i++ ) {

        // Create a property if it doesn't exist
        if ( typeof parent[ parts[ i ] ] === 'undefined' ) {

            parent[ parts[ i ] ] = {};
        }

        parent = parent[ parts[ i ] ];
    }

    return parent;
};