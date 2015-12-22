/*
 * Uglify Configuration
 *
 * See all options: https://github.com/gruntjs/grunt-contrib-uglify
 */
module.exports = function( grunt ) {

    var mainConfigFile = grunt.file.read( 'library/js/config/require-config.js' )
        , vm = require( 'vm' )
        , mainConfig = {}
        , distFiles = {}
        , modules
        , length
        , path
        ;

    vm.runInNewContext( mainConfigFile, mainConfig );

    modules = mainConfig.require.modules;
    length = modules.length;

    for ( var i = 0; i < length; i++ ) {

        path = modules[ i ].name;

        distFiles[ '<%= buildPath.dist %>library/js/' + path + '.js' ] = '<%= buildPath.dist %>library/js/' + path + '.js';
    }
    
    // Concatenate require.js and common.js to fix mediator race condition
    distFiles[ '<%= buildPath.dist %>library/js/vendor/require.js' ] = [
        '<%= buildPath.dist %>library/js/vendor/require.js',
        '<%= buildPath.dist %>library/js/mediators/common.js'
    ];

    grunt.config( 'uglify', {
        options: {
            compress: {
                drop_console: true
            },
            report: 'gzip'
        },
        dist: {
            files: distFiles
        }
    });

