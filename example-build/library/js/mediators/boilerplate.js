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

        var mediator = {

            init: function() {

                console.log('mediator.init() executed');

                $( this.initUI.bind( this ) );
            },

            initUI: function() {

                console.log('mediator.initUI() executed');
            }
        };

        mediator.init();
    }
);
