/*
 * Clean Configuration
 *
 * See all options: https://github.com/gruntjs/grunt-contrib-clean
 */
module.exports = function( grunt ) {

    var prop = grunt.option( 'property' );

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
            '<%= buildPath.dist %>**/less',
            '<%= buildPath.dist %>**/build.txt',
            '<%= buildPath.dist %>**/common/css/config'
        ],
        svg: [
            'library/less/' + prop +'/global/icons/delete/',
            'library/images/' + prop +'/svg-min/'
        ]
    });

    grunt.loadNpmTasks( 'grunt-contrib-clean' );
};