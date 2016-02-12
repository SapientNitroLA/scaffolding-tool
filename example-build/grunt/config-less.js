/*
 * Less Configuration
 *
 * See all options: https://github.com/gruntjs/grunt-contrib-less
 */
module.exports = function( grunt ) {

    'use strict';

    // Accept specific files
    // --files="less/some/path/index.less"
    // --files="less/some/path/index.less, less/some/path/index.less"
    var stylesDir = 'library/styles'
        , options = {
            compress: true,
            files: {
                expand: true,
                cwd: stylesDir,
                src: [
                    '**/index.less',
                    '**/svg.less',
                    '**/logo.less',
                    '**/logo-resorts.less'
                ],
                dest: 'library/css',
                ext: '.css'
            },
            paths: stylesDir, // shared
            relativeUrls: true, // shared
            strictMath: true, // shared
            sourceMap: {
                dev: true,
                dist: false,
                fileInline: true,
                rootPath: '../../../../'
            }
        }
        ;

    // If `--files` options exists split into array and save to src property
    if ( grunt.option( 'files' ) ) {

        options.files.src = grunt.option( 'files' ).split( /,\s*/ );

    }

    grunt.config( 'less', {
        dist: {
            options: {
                paths: options.paths, // shared
                relativeUrls: options.relativeUrls, // shared
                strictMath: options.strictMath, // shared
                compress: options.compress,
                sourceMap: options.sourceMap.dist
            },
            files: [ options.files ]
        },
        dev: {
            options: {
                paths: options.paths, // shared
                relativeUrls: options.relativeUrls, // shared
                strictMath: options.strictMath, // shared
                sourceMap: options.sourceMap.dev,
                sourceMapFileInline: options.sourceMap.fileInline,
                sourceMapRootpath: options.sourceMap.rootPath
            },
            files: [ options.files ]
        }
    });

};
