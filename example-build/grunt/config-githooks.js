/*
 * Git Hooks Configuration
 *
 * See all options: https://www.npmjs.org/package/grunt-githooks
 */
module.exports = function( grunt ) {

    'use strict';

    grunt.config( 'githooks', {
        all: {
            'pre-commit': 'jshint',
        }
    });

};
