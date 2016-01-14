define({
    load: function( name, req, onload, config ) {

        'use strict';

        var path = SN.app || 'mediators/' + name;

        // Load RequireJS config
        req( [ '../../library/js/config/require-config.js' ], function( value ) {

            // Tell RequireJS that module is loaded from plugin
            onload( value );

            // Initiate loaded configuration object
            require.config( value );

            // Load app
            req( [ path ] );

        });

    }

});
