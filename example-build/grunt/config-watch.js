/*
 * Watch Configuration
 *
 * See all options: https://github.com/gruntjs/grunt-contrib-watch
 */
module.exports = function( grunt ) {

    // Accept specific files
    // --files="less/mgmGrand/some/path/index.less"
    // --files="less/mgmGrand/some/path/index.less, less/mgmGrand/some/path/index.less"
    var tasks = 'lessDev'
        , files = grunt.option( 'files' )
        ;

    if ( files ) {

        files = files.split( /,\s*/ );
        tasks = 'less:dev'
    }

    grunt.config( 'watch', {
        less: {
            files: [ 'library/styles/**/*.less' ],
            tasks: [ tasks ]
        }
    });

    grunt.loadNpmTasks( 'grunt-contrib-watch' );
};
