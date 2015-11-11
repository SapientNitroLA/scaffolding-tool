require(
    [
        'jquery',
        'mediators/common'
    ],

    function(

        $,
        common

    ) {

        'use strict';

        common.init();

        var home = {

            init: function() {

                $( this.initUI.bind( this ) );
            },

            initUI: function() {

                console.log( 'home mediator' );
            }
        };

        home.init();
    }
);
