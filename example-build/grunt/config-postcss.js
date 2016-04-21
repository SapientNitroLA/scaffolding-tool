/*
 * PostCSS
 *
 * See all options: https://github.com/nDmitry/grunt-postcss
 */
module.exports = function( grunt ) {

    'use strict';

    grunt.config( 'postcss', {
        options: {
            map: true, // inline sourcemaps
            processors: [
                require( 'autoprefixer' )( { browsers: [ 'ie 10', 'last 2 versions' ] } ) // add vendor prefixes
            ]
        },
        all: {
            expand: true,
            src: 'library/css/**/*.css'
        }
    });

};
