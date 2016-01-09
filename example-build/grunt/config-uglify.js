/*
 * Uglify Configuration
 *
 * See all options: https://github.com/gruntjs/grunt-contrib-uglify
 */
module.exports = function( grunt ) {

    'use strict';

    require( 'amdefine/intercept' );

    var mainConfig = require( '../library/js/config/require-config.js' )
        , length = mainConfig.modules.length
        , distFiles = {}
        , path
        , i
        ;

    for ( i = 0; i < length; i++ ) {

        path = mainConfig.modules[ i ].name;

        distFiles[ '<%= buildPath.dist %>library/js/' + path + '.js' ] = '<%= buildPath.dist %>library/js/' + path + '.js';

    }

    // Concatenate require.js and common.js to fix mediator race condition
    distFiles[ '<%= buildPath.dist %>library/js/vendor/require.js' ] = [
        '<%= buildPath.dist %>library/js/vendor/require.js',
        '<%= buildPath.dist %>library/js/mediators/common.js'
    ];

    grunt.config( 'uglify', {
        options: {
            compress: {
                drop_console: true
            },
            report: 'gzip'
        },
        dist: {
            files: distFiles
        }
    });

};
