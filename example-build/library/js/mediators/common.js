define(
    [
        'jquery',
        'modules/polyfill'
    ],

    function(

        $,
        polyfill

    ) {

        'use strict';

        var common = {

            init: function() {

                // jQuery DOMContentReady
                $( this.initUI.bind( this ) );

                return this;

            },

            initUI: function() {

                console.log( 'common.initUI' );

            }
        };

        return common;

    }
);
