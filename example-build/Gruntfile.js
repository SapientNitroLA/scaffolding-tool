module.exports = function( grunt ) {

    'use strict';

    // Auto-loads Grunt plugins
    require( 'load-grunt-tasks' )( grunt );

    // Measure execution time
    require( 'time-grunt' )( grunt );

    /* Configure */
    grunt.initConfig({
        pkg: grunt.file.readJSON( 'package.json' ),
        buildRoot: '../',
        buildName: {
            dev: '<%= pkg.name %>-dev-build',
            dist: '<%= pkg.name %>-dist-build'
        },
        buildPath: {
            dev: '<%= buildRoot %><%= buildName.dev %>/',
            dist: '<%= buildRoot %><%= buildName.dist %>/'
        }
    });

    /* Load tasks */
    grunt.loadTasks( 'grunt' );

    /* Task aliases */
    grunt.registerTask( 'dev', 'Build for testing.', [
        'eslint', // Lint all appropriate js files
        'less:dev',
        'copy:dev',
        'requirejs:dev'
    ]);

    grunt.registerTask( 'dist', 'Build for integration handoff.', [
        'eslint', // Lint all appropriate js files
        'less:dist',
        'clean:distPre',
        'copy:dist',
        'requirejs:dist',
        'uglify:dist',
        'clean:distPost'
    ]);

    grunt.registerTask( 'lessDev', 'Build to compile Less files during development.', [
        'clean:css',
        'less:dev',
        'postcss'
    ]);

    grunt.registerTask( 'lessDist', 'Build to compile Less files for distribution.', [
        'clean:css',
        'less:dist',
        'postcss'
    ]);

};
