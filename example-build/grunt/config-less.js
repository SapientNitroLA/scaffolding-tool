/*
 * Less Configuration
 *
 * See all options: https://github.com/gruntjs/grunt-contrib-less
 */
module.exports = function( grunt ) {

    // Accept specific files
    // --files="less/mgmGrand/some/path/index.less"
    // --files="less/mgmGrand/some/path/index.less, less/mgmGrand/some/path/index.less"
    var path = require( 'path' )
        , files = grunt.option( 'files' )
        , libPath = 'library'
        , options = {
            relativeUrls: true,
            strictMath: true,
            files: {
                expand: true,
                cwd: 'library',
                src: [
                    '**/index.less',
                    '**/svg.less',
                    '**/logo.less',
                    '**/logo-resorts.less'
                ],
                dest: 'library',
                ext: '.css'
            }
        }
        ;

    if ( files ) {

        files = files.split( /,\s*/ );
    }

    // Set the destination to a directory named "css"
    function rename( dest, src ) {

        var splitDirs = src.split( '/' );

        splitDirs[ splitDirs.indexOf( 'styles' ) ] = 'css';

        return path.join( dest, splitDirs.join( '/' ) );
    }

    grunt.config( 'less', {
        dist: {
            options: {
                compress: true,
                relativeUrls: options.relativeUrls,
                sourceMap: false,
                strictMath: options.strictMath
            },
            files: [
                {
                    expand: true,
                    cwd: libPath,
                    src: options.files.src,
                    dest: libPath,
                    ext: '.css',
                    rename: rename
                }
            ]
        },
        dev: {
            options: {
                relativeUrls: options.relativeUrls,
                sourceMap: true,
                sourceMapRootpath: '../../../../',
                strictMath: options.strictMath
            },
            files: [
                {
                    expand: true,
                    cwd: libPath,
                    src: files || options.files.src,
                    dest: libPath,
                    ext: '.css',
                    rename: rename
                }
            ]
        }
    });

};
