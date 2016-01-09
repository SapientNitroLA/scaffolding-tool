/*
 * RequireJS Build profile
 *
 * See all options: https://github.com/jrburke/r.js/blob/master/build/example.build.js
 */
module.exports = function( grunt ) {

    'use strict';

    require( 'amdefine/intercept' );

    var mainConfig = require( '../library/js/config/require-config.js' )
        , _ = {
            merge: require( 'lodash.merge' ),
            cloneDeep: require( 'lodash.cloneDeep' )
        }
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

            /*
             Map a module's ID to another ID. This allows a module to require
             'moduleA' and instead get 'moduleB'.
            */
            map: mainConfig.map,

            /*
             Create an object for each bootstrap to be optimized. Their immediate
             and deep dependencies will be built into the main module's file.
             Paths is relative to `baseUrl`.
             Modules are added in the site's `require-config.js` file.
            */
            modules: mainConfig.modules,

            // Ignore the css files
            optimizeCss: 'none',

            /*
             Since jQuery defines its path as `jquery`, it would need to be
             found at the root of your js directory (`baseUrl`). This may not
             always be possible. The following option allows us to locate
             jQuery at a more logical path.
             Paths are relative to `baseUrl`.
            */
            paths: mainConfig.paths,

            /*
             Introduced in 2.1.2: If using "dir" for an output directory, normally the
             optimize setting is used to optimize the build bundles (the "modules"
             section of the config) and any other JS file in the directory. However, if
             the non-build bundle JS files will not be loaded after a build, you can
             skip the optimization of those files, to speed up builds. Set this value
             to true if you want to skip optimizing those other non-build bundle JS
             files.
            */
            skipDirOptimize: true,

            /*
             If shim config is used in the app during runtime, duplicate the config
             here. Necessary if shim config is used, so that the shim's dependencies
             are included in the build.
            */
            shim: mainConfig.shim
        }
        ;

    grunt.config( 'requirejs', {
        dev: {
            options: _.merge( _.cloneDeep( common ), {
                dir: '<%= buildPath.dev %>library/',
                optimize: 'none' // Set 'none' so you can see how the files are concatenated.
            } )
        },
        dist: {
            options: _.merge( _.cloneDeep( common ), {
                dir: '<%= buildPath.dist %>library/',
                skipDirOptimize: false
            } )
        }
    });

};
