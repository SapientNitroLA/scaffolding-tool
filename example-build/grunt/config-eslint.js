/*
 * Eslint Configuration
 *
 * See all rules: http://eslint.org/docs/rules/
 * See all options: http://eslint.org/docs/user-guide/configuring
 */
module.exports = function( grunt ) {

    grunt.config( 'eslint', {
        src: [
            'library/**/*.js',
            '!library/**/config/*.js',
            '!library/**/vendor/**/*.js',
        ]
    });
     
    grunt.loadNpmTasks( 'grunt-eslint' );
};