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
        , task = grunt.cli.tasks[ 0 ]
        , files = {}
        , path
        , i
        ;

    for ( i = 0; i < length; i++ ) {

        path = mainConfig.modules[ i ].name;

        files[ '<%= buildPath.' + task + ' %>library/js/' + path + '.js' ] = '<%= buildPath.' + task + ' %>library/js/' + path + '.js';

    }

    // Concatenate require.js and common.js to fix mediator race condition
    files[ '<%= buildPath.' + task + ' %>library/js/vendor/require.js' ] = [
        '<%= buildPath.' + task + ' %>library/js/vendor/require.js',
        '<%= buildPath.' + task + ' %>library/js/mediators/common.js'
    ];

    grunt.config( 'uglify', {
        dev: {
            files: files,
            options: {
                beautify: true,
                mangle: false
            }
        },
        dist: {
            files: files,
            options: {
                compress: {
                    drop_console: true
                },
                report: 'gzip'
            }
        }
    });

};
