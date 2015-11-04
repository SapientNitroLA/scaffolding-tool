/*
 * Less Configuration
 *
 * See all options: https://github.com/gruntjs/grunt-contrib-less
 */
module.exports = function( grunt ) {

    // Accept specific files
    // --files="less/mgmGrand/some/path/index.less"
    // --files="less/mgmGrand/some/path/index.less, less/mgmGrand/some/path/index.less"
    var files = grunt.option( 'files' );

    if ( files ) {

        files = files.split( /,\s*/ );
    }

    grunt.config( 'less', {
        dist: {
            options: {
                compress: true,
                sourceMap: false,
                strictMath: true,
                relativeUrls: true
            },
            files: [
                {
                    expand: true,
                    cwd: 'library',
                    src: [
                        '**/index.less',
                        '**/svg.less',
                        '**/logo.less',
                        '**/logo-resorts.less'
                    ],
                    dest: 'library',
                    ext: '.css',

                    // Set the destination to a directory named "css"
                    rename: function( dest, src ) {

                        var path = require( 'path' )
                            , splitDirs = src.split( '/' )
                            ;

                        splitDirs[ splitDirs.indexOf( 'less' ) ] = 'css';

                        return path.join( dest, splitDirs.join( '/' ) );
                    }
                }
            ]
        },
        dev: {
            options: {
                sourceMap: true,
                strictMath: true,
                relativeUrls: true,
                sourceMapRootpath: '../../../../'
            },
            files: [
                {
                    expand: true,
                    cwd: 'library',
                    src: files || [
                        '**/index.less',
                        '**/svg.less',
                        '**/logo.less',
                        '**/logo-resorts.less'
                    ],
                    dest: 'library',
                    ext: '.css',

                    // Set the destination to a directory named "css"
                    rename: function( dest, src ) {

                        var path = require( 'path' )
                            , splitDirs = src.split( '/' )
                            ;

                        splitDirs[ splitDirs.indexOf( 'less' ) ] = 'css';

                        return path.join( dest, splitDirs.join( '/' ) );
                    }
                }
            ]
        }
    });

    grunt.loadNpmTasks( 'grunt-contrib-less' );
};