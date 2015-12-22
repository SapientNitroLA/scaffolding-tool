/*
 * Clean Configuration
 *
 * See all options: https://github.com/gruntjs/grunt-contrib-clean
 */
module.exports = function( grunt ) {

    'use strict';

    grunt.config( 'clean', {
        options: {
            force: true
        },
        css: [
            'library/**/css',
            'library/**/index.css'
        ],
        dev: [
            '<%= buildPath.dev %>'
        ],
        distPre: [
            '<%= buildPath.dist %>'
        ],
        distPost: [
            '<%= buildPath.dist %>grunt',
            '<%= buildPath.dist %>**/styles',
            '<%= buildPath.dist %>**/build.txt',
            '<%= buildPath.dist %>**/common/css/config'
        ]
    });

};
