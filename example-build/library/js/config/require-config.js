/*
 Set global dependency exclusion for template mediators.
 Global dependencies are included in `mediators/common.js.`
 Variable used in require.modules compile array.
*/
var globalExcludes = [
    'jquery',
    'directives/angular-picturefill',
    'controllers/sign-in-widget-controller',
    'filters/custom-date-format-filter',
    'filters/custom-filters',
    'mediators/common',
    'modules/analytics-module',
    'modules/canvas',
    'modules/global-vps',
    'modules/booking-widget',
    'vendor/angular-custom',
    'vendor/picturefill',
    'waypoints'
];

var require = {

    // This is the main path to which our modules are relative.
    baseUrl: ( typeof MGMRI !== 'undefined' && MGMRI.baseURL ) || '../../library/js',

    // Time in seconds until timeout
    waitSeconds: 90,

    // Paths are relative to `baseUrl`.
    paths: {
        /*
         jquery.js defines its path as `jquery`. The following
         option allows us to locate it at a more logical path.
        */
        'jquery': 'vendor/jquery',
        'waypoints' : 'vendor/waypoints.min',
        'vendor/lodash': 'vendor/lodash.underscore',
        'vendor/s7video': ( ( typeof MGMRI !== 'undefined' ) && MGMRI.externalUrl && MGMRI.externalUrl.s7video ) || '//s7d1.scene7.com/s7viewers/html5/js/VideoViewer',
        'cdn/gigya': ( ( typeof MGMRI !== 'undefined' ) && MGMRI.externalUrl && MGMRI.externalUrl.gigya ) || '//cdn.gigya.com/JS/socialize.js?apikey=2_Y82PzwJ_chSFImHXaIDJClnLyJzmk-VFOavSsaNTzl6m901s_NNxRAS0xJ3bd3_N'
    },

    shim: {
        // The angular library does not implement AMD.
        'vendor/angular-custom': {
            exports: 'angular'
        },
        // The picturefill library does not implement AMD.
        'vendor/picturefill': {
            exports: 'picturefill'
        },
        // TweenLite library does not implement AMD.  TweenMax does by comparison.
        'vendor/TweenLite': {
            deps: [ 'vendor/CSSPlugin' ],
            exports: 'TweenLite'
        },
        // S7 VideoViewer does not implement AMD.
        'vendor/s7video': {
            exports: 's7viewers.VideoViewer'
        },
        // Fix matchMedia.addListener race condition
        'vendor/matchMedia.addListener': {
            deps: [ 'vendor/matchmedia' ]
        },
        // EaselJS library does not implement AMD.
        'vendor/easel': {
            exports: 'createjs'
        },
        // Gigya library does not implement AMD.
        'cdn/gigya': {
            exports: 'gigya'
        }
    },

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
        'vendor/matchmedia',
        'vendor/matchMedia.addListener',
        'mediators/common'
    ],

    /*
     Add modules to compile here with their respective includes/excludes.
     Referenced in both RequireJS and Uglify Grunt files.
    */
    modules: [
        {
            name: 'mediators/common',
            include: [
                'modules/global-vps',
                'controllers/sign-in-widget-controller',
                'directives/angular-picturefill',
                'filters/custom-date-format-filter',
                'filters/custom-filters',
                'modules/analytics-module',
                'modules/booking-widget',
                'modules/canvas',
                'vendor/angular-custom'
            ]
        },
        {
            name: 'mediators/accounts-primary',
            exclude: globalExcludes
        },
        {
            name: 'mediators/accounts-summary',
            exclude: globalExcludes
        },
        {
            name: 'mediators/accounts-tax-print',
            exclude: globalExcludes
        },
        {
            name: 'mediators/boilerplate',
            exclude: globalExcludes
        },
        {
            name: 'mediators/booking-bookall',
            exclude: globalExcludes
        },
        {
            name: 'mediators/booking-room',
            exclude: globalExcludes
        },
        {
            name: 'mediators/booking-ticketing',
            exclude: globalExcludes
        },
        {
            name: 'mediators/components-alt',
            exclude: globalExcludes
        },
        {
            name: 'mediators/components',
            exclude: globalExcludes
        },
        {
            name: 'mediators/detail',
            exclude: globalExcludes
        },
        {
            name: 'mediators/dining',
            exclude: globalExcludes
        },
        {
            name: 'mediators/home',
            exclude: globalExcludes
        },
        {
            name: 'mediators/anchor-detail',
            exclude: globalExcludes
        },
        {
            name: 'mediators/hotel-comparison-all',
            exclude: globalExcludes
        },
        {
            name: 'mediators/open-detail',
            exclude: globalExcludes
        },
        {
            name: 'mediators/itinerary-confirmation',
            exclude: globalExcludes
        },
        {
            name: 'mediators/itinerary-print',
            exclude: globalExcludes
        },
        {
            name: 'mediators/itinerary',
            exclude: globalExcludes
        },
        {
            name: 'mediators/landing',
            exclude: globalExcludes
        },
        {
            name: 'mediators/miscellaneous',
            exclude: globalExcludes
        },
        //list of modules that should load asynchronously
        {
            name: 'modules/account-signin',
            exclude: globalExcludes
        },
        {
            name: 'modules/account-forgotpassword',
            exclude: globalExcludes
        },
        {
            name: 'modules/accounts-passwordreset',
            exclude: globalExcludes
        },
        {
            name: 'modules/accounts-verifyemail',
            exclude: globalExcludes
        },
        {
            name: 'modules/accounts-activate-mlife',
            exclude: globalExcludes
        },
        {
            name: 'modules/accounts-signup',
            exclude: globalExcludes
        },
        {
            name: 'modules/accounts-create-web-account',
            exclude: globalExcludes
        },
        {
            name: 'modules/account-manage-preferences',
            exclude: globalExcludes
        },
        {
            name: 'modules/account-unauth-profile',
            exclude: globalExcludes
        },
        {
            name: 'modules/account-find-reservation',
            exclude: globalExcludes
        },
        {
            name: 'modules/account-guest-book',
            exclude: globalExcludes
        }
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
    }
};