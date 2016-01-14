require(
    [
        'jquery',
        'mediators/common',
        'modules/global-vps'
    ],

    function(

        $,
        common,
        viewport

    ) {

        'use strict';

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
