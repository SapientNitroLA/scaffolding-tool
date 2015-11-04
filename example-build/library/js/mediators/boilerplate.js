require(
    [
        'jquery',
        'mediators/common',

        // Angular-specific dependencies
        'controllers/sign-in-widget-controller',
        'modules/booking-widget',
        'vendor/angular-custom'
    ],

    function(

        $,
        common,

        // Angular-specific dependencies
        signInWidgetController,
        bookingWidget,
        angular

    ) {

        'use strict';

        // Load Global Navigation / Footer functionality
        common.init();

        var mediator = {

            init: function() {
                // @FLAG: Console.log needs to be removed before integration.
                console.log('mediator.init() executed');

                $( this.initUI.bind( this ) );
            },

            initUI: function() {
                // @FLAG: Console.log needs to be removed before integration.
                console.log('mediator.initUI() executed');

                this.initAngular();

                this.anotherMethod();
            },

            initAngular: function() {

                /*
                 * App/Module definition
                 */
                angular.module( 'THISAPP',
                    [
                        /*
                         * Add page dependencies here
                         */
                        'BookingWidget',
                        'SignInWidget.controllers'
                    ]
                );
                /*
                 * Bootstrap application dynamically to `document` as there is no access to global header elements inside AEM.
                 */
                angular.bootstrap( document, [ 'THISAPP' ] );

            }
        };

        mediator.init();
    }
);