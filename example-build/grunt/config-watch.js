/*
 * Watch Configuration
 *
 * See all options: https://github.com/gruntjs/grunt-contrib-watch
 */
module.exports = function( grunt ) {

    'use strict';

    // Accepts specific files
    // --files="pages/boilerplate/index.less"
    //
    // Accepts files globbing
    // --files="pages/boilerplate/**/*.less"
    //
    // Accepts multiple files/globs
    // --files="pages/boilerplate/index.less, components/example/index.less"
    // --files="pages/boilerplate/*.less, components/example/*.less"

    var stylesDir = 'library/styles/'
        , files = [ 'library/styles/**/*.less' ]
        , tasks = [ 'lessDev' ]
        , param = grunt.option( 'files' )
        ;

    if ( param ) {

        files = param.split( /,\s*/ ).map( function( file ) {

            return stylesDir + file;

        });

        tasks = 'less:dev';

    }

    grunt.config( 'watch', {
        options: {
            livereload: true
        },
        grunt: {
            options: {
                reload: true
            },
            files: [
                'Gruntfile.js',
                'grunt/*.js'
            ]
        },
        less: {
            files: files,
            tasks: tasks
        }
    });

};
