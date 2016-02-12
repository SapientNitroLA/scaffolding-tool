/*
 * Copy Configuration
 *
 * See all options: https://github.com/gruntjs/grunt-contrib-copy
 */
module.exports = function( grunt ) {

    'use strict';

    var options = {
        expand: true,
        files: [
            '.htaccess',
            'components/**',
            'index.*',
            'library/**',
            'pages/**',
            'services/**',
            '!**/boilerplate/**',
            '!**/composer.*',
            '!**/css/config/**',
            '!**/readme.md',
            '!**/styles/**'
        ]
    };

    grunt.config( 'copy', {
        dev: {
            files: [
                {
                    expand: options.expand,
                    src: options.files,
                    dest: '<%= buildPath.dev %>'
                }
            ]
        },
        dist: {
            files: [
                {
                    expand: options.expand,
                    src: options.files,
                    dest: '<%= buildPath.dist %>'
                }
            ]
        }
    });

};
