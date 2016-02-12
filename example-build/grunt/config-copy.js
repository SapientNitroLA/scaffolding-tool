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
        ],
        devFiles: [],
        distFiles: [
            // '!**/boilerplate/**'
        ]
    };

    grunt.config( 'copy', {
        dev: {
            files: [
                {
                    expand: options.expand,
                    src: options.files.concat( options.devFiles ),
                    dest: '<%= buildPath.dev %>'
                }
            ]
        },
        dist: {
            files: [
                {
                    expand: options.expand,
                    src: options.files.concat( options.distFiles ),
                    dest: '<%= buildPath.dist %>'
                }
            ]
        }
    });

};
