/*
 * Less Configuration
 *
 * See all options: https://github.com/gruntjs/grunt-contrib-less
 */
module.exports = function( grunt ) {

    'use strict';

    // Accept specific files
    // --files="less/mgmGrand/some/path/index.less"
    // --files="less/mgmGrand/some/path/index.less, less/mgmGrand/some/path/index.less"
    var files = grunt.option( 'files' )
        , libPath = 'library'
        , libStyles = libPath + '/styles'
        , options = {
            compress: true,
            files: {
                expand: true,
                cwd: libStyles,
                src: [
                    '**/index.less',
                    '**/svg.less',
                    '**/logo.less',
                    '**/logo-resorts.less'
                ],
                dest: libPath + '/css',
                ext: '.css'
            },
            paths: libStyles,
            relativeUrls: true,
            strictMath: true,
            sourceMap: {
                dev: true,
                dist: false,
                fileInline: true,
                rootPath: '../../../../'
            }
        }
        ;

    if ( files ) {

        files = files.split( /,\s*/ );

    }

    grunt.config( 'less', {
        dist: {
            options: {
                paths: options.paths, // shared
                compress: options.compress,
                relativeUrls: options.relativeUrls, // shared
                sourceMap: options.sourceMap.dist,
                strictMath: options.strictMath // shared
            },
            files: [ files ]
        },
        dev: {
            options: {
                paths: options.paths, // shared
                relativeUrls: options.relativeUrls, // shared
                sourceMap: options.sourceMap.dev,
                sourceMapFileInline: options.sourceMap.fileInline, // shared
                sourceMapRootpath: options.sourceMap.rootPath, // shared
                strictMath: options.strictMath // shared
            },
            files: [
                {
                    expand: options.files.expand,
                    cwd: options.files.cwd,
                    src: files || options.files.src,
                    dest: options.files.dest,
                    ext: options.files.ext
                }
            ]
        }
    });

};
