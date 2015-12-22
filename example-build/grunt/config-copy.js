/*
 * Copy Configuration
 *
 * See all options: https://github.com/gruntjs/grunt-contrib-copy
 */
module.exports = function( grunt ) {

    'use strict';

    var srcFiles = [
        '**/.*',
        '**',
        '!.git',
        '!.DS_Store',
        '!docs/**',
        '!**/less/**',
        '!resources/**',
        '!package.json',
        '!Gruntfile.js',
        '!**/readme.md',
        '!**/css/config/**',
        '!**/node_modules/**'
    ];

    grunt.config( 'copy', {
        dev: {
            src: srcFiles,
            dest: '<%= buildPath.dev %>'
        },
        dist: {
            src: srcFiles,
            dest: '<%= buildPath.dist %>'
        }
    });

};
