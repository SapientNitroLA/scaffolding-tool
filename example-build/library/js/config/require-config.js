define( function() {

    'use strict';

    var config = {
        // This is the main path to which our modules are relative.
        baseUrl: ( typeof SN !== 'undefined' && SN.baseURL ) || '../../library/js',

        /*
         An array of dependencies to load. Useful when require is defined as
         a config object before require.js is loaded, and you want to specify
         dependencies to load as soon as require() is defined. Using deps is
         just like doing a require([]) call, but done as soon as the loader
         has processed the configuration. It does not block any other require()
         calls from starting their requests for modules, it is just a way to
         specify some modules to load asynchronously as part of a config block.
         http://requirejs.org/docs/api.html#config-deps
        */
        deps: [
            // Fix for race condition
            'vendor/matchMedia',
            'vendor/matchMedia.addListener',
            'mediators/common'
        ],

        /*
         Set global dependency exclusion for template mediators.
         Global dependencies are included in `mediators/common.js.`
         Variable used in require.modules compile array.
        */
        globalExcludes: [
            'jquery',
            'mediators/common',
            'modules/global-vps'
        ],

        /*
         Map a module's ID to another ID. This allows a
         module to require 'moduleA' and instead get 'moduleB'.
        */
        map: {
            /*
             The following applies to all modules (`'*'`).
            */
            '*': {
                /*
                 Take jquery out of the global namespace.
                */
                'jquery': 'modules/noconflict'
            },

            /*
             The following applies only to the module ID `modules/jquery` and
             declares that when the module ID `jquery` is required, it will be
             mapped back to the module ID `jquery`. And since that path has
             been relocated via the `paths` option, this module will get the
             actual jQuery source file.
             Why go through all this trouble???? Take a look at the jquery.js
             file in modules/ and you find a call to `$.noConflict( true );`.
             These hijinks keep our version of jQuery as a private instance.
             If you are working in an environment with mulitple versions of
             jQuery on the page, you can now trust which jQuery API you're using.
            */
            'modules/noconflict': {
                'jquery': 'jquery'
            }
        },

        /*
         Add modules to compile here with their respective includes/excludes.
         Referenced in both RequireJS and Uglify Grunt files.
        */
        modules: [
            {
                name: 'mediators/common',
                include: [
                    'modules/global-vps'
                ]
            },
            {
                name: 'mediators/mediator1'
            },
            {
                name: 'mediators/home'
            }
        ],

        // Paths are relative to `baseUrl`.
        paths: {
            /*
             jquery.js defines its path as `jquery`. The following
             option allows us to locate it at a more logical path.
            */
            'jquery': 'vendor/jquery'
        },

        shim: {
            // Fix matchMedia.addListener race condition
            'vendor/matchMedia.addListener': {
                deps: [ 'vendor/matchMedia' ]
            }
        },

        // Time in seconds until timeout
        waitSeconds: 3
    };

    config.modules = config.modules.map( function( mod, index ) {

        if ( mod.name.indexOf( 'mediators/common' ) < 0 ) {

            mod.exclude = config.globalExcludes;

        }

        return mod;

    } );

    return config;

});
