module.exports = function( grunt ) {

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
    grunt.registerTask( 'default', 'Build for testing.', [
        'jshint', // Lint all appropriate js files
        'less:dev',
        'copy:dev',
        'requirejs:dev'
    ]);

    grunt.registerTask( 'dist', 'Build for integration handoff.', [
        'jshint', // Lint all appropriate js files
        'less:dist',
        'clean:distPre',
        'copy:dist',
        'requirejs:dist',
        'uglify:dist',
        'clean:distPost'
    ]);

    grunt.registerTask( 'lessDev', 'Build to compile Less files during development.', [
        'clean:css',
        'less:dev'
    ]);

    grunt.registerTask( 'lessDist', 'Build to compile Less files for distribution.', [
        'clean:css',
        'less:dist'
    ]);
};
