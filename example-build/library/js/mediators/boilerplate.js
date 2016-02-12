//>>excludeStart( 'buildExclude', pragmas.buildExclude );
require( [ '../../library/js/config/require-config.js' ], function( config ) {

    'use strict';

    require.config( config );
    //>>excludeEnd( 'buildExclude' );

    require(
        [
            'jquery',
            'mediators/common',
            'modules/global-vps',
            'modules/pubsub'
        ],
        function(

            $,
            common,
            viewport,
            pubsub

        ) {

            common.init();

            var home = {

                init: function() {

                    $( this.initUI.bind( this ) );

                },

                initUI: function() {

                    console.log( 'home mediator' );

                    viewport.subscribe( '*', function( current ) {

                        console.log( 'current viewport:', current.name );

                    });

                }

            };

            home.init();

        }

    );
    //>>excludeStart( 'buildExclude', pragmas.buildExclude );

});
//>>excludeEnd( 'buildExclude' );
