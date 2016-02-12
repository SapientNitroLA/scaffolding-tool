/*
 * RequireJS Build profile
 *
 * See all options: https://github.com/jrburke/r.js/blob/master/build/example.build.js
 */
module.exports = function( grunt ) {

    'use strict';

    require( 'amdefine/intercept' );

    var dir = require( 'node-dir' )
        , mainConfig = require( '../library/js/config/require-config.js' )
        , defaultsDeep = require( 'lodash.defaultsdeep' )
        , common = {
            /*
             The path that represents the project's root folder
             This path is relative to this file.
            */
            appDir: './library',

            /*
             This is the main path to which our modules are relative.
             This path is relative to the `appDir` option.
            */
            baseUrl: 'js',

            // Ignore the css files
            optimizeCss: 'none',

            pragmas: {
                buildExclude: true
            },
            /*
             Introduced in 2.1.2: If using "dir" for an output directory, normally the
             optimize setting is used to optimize the build bundles (the "modules"
             section of the config) and any other JS file in the directory. However, if
             the non-build bundle JS files will not be loaded after a build, you can
             skip the optimization of those files, to speed up builds. Set this value
             to true if you want to skip optimizing those other non-build bundle JS
             files.
            */
            skipDirOptimize: true
        }
        ;

    // Dynamically build module list by reading `mediators` directory.
    // Method includes exclusion feature
    function buildModuleList() {

        dir.readFiles( 'library/js/mediators', {
            exclude: [
                '.DS_Store',
                'common.js',
                'boilerplate.js'
            ]
        },
        function( err, content, filename, next ) {

            if ( err ) throw err;
            next();

        },
        function( err, files ) {

            return files.map( function( file ) {

                var module = {
                    name: 'mediator/' + file.split( '/' ).pop(),
                    exclude: mainConfig.globalExcludes
                };

                return module;

            });

        });

    }

    grunt.config( 'requirejs', {
        dev: {
            options: defaultsDeep( {
                dir: '<%= buildPath.dev %>library/',
                modules: buildModuleList(),
                // pragmas: {
                //     buildExclude: true
                // },
                optimize: 'none' // Set 'none' so you can see how the files are concatenated.
            }, common, mainConfig )
        },
        dist: {
            options: defaultsDeep( {
                dir: '<%= buildPath.dist %>library/',
                modules: buildModuleList(),
                pragmas: {
                    buildExclude: true
                },
                skipDirOptimize: false
            }, common, mainConfig )
        }
    });

};
