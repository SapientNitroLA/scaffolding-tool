define(
    [
        'jquery',
        'modules/polyfill',
        'modules/global-navigation',
        'modules/global-footer',
        'modules/tealeaf',
        'vendor/picturefill',
        'waypoints',
        'modules/pubsub'
    ],

    function(

        $,
        polyfill,
        navigation,
        footer,
        Tealeaf,
        picturefill,
        waypoints,
        pubsub

    ) {

        'use strict';

        var documentHeight = 0
            , documentWidth = 0
            , selectors
            , mediator
            ;

        selectors = {
            footer: [
                '.resorts .grid',
                '.useful-links .grid-item'
            ]
        };

        mediator = {

            state: {
                navigation: null
            },

            init: function() {

                // jQuery DOMContentReady
                $( this.initUI.bind( this ) );

                return this;
            },

            initUI: function() {

                Tealeaf.init();

                pubsub( 'common/touch/handler' ).subscribe( function() {

                    var scroll = 0
                        , offcanvasInputElement = document.querySelectorAll( '.off-canvas-container' )
                        ;

                    var touchstartHandler = function ( event ) {

                        scroll = document.body.scrollTop;
                    };

                    var touchendHandler = function ( event ) {

                        var node = event.target.nodeName.toString().toUpperCase() // To upper case can be avoided
                            , textLength = event.target.value.length
                            ;

                        if ( scroll === document.body.scrollTop ) {

                            if ( node === 'INPUT' || node === 'SELECT' ) {

                                event.preventDefault();
                                event.target.focus();

                                if ( node !== 'SELECT' ) {

                                    if ( event.target.getAttribute( 'type' ) !== 'email' ) {

                                        event.target.setSelectionRange( textLength, textLength ); //throwing error when type = email
                                    }
                                }
                            }
                        }
                    };

                    for ( var i = 0, len = offcanvasInputElement.length; i < len; i++ ) {

                        offcanvasInputElement[ i ].addEventListener( 'touchstart', touchstartHandler );
                        offcanvasInputElement[ i ].addEventListener( 'touchend', touchendHandler );
                    }
                });

                // @FLAG: We aren't doing any device testing for MGM. | Christopher Gwizdala
                //publish ('common/touch/handler') this only for iphone
                if ( navigator.userAgent.match( /iPhone/i ) ) {

                    pubsub( 'common/touch/handler' ).publish();
                }

                this.state.navigation = navigation();

                footer( selectors.footer.join( ',' ) );

                // Update waypoints if the document size changes
                $( window ).scroll( function() {

                    var doc = $( document )
                        , docWidth = doc.width()
                        , docHeight = doc.height()
                        ;

                    if ( docWidth !== documentWidth || docHeight !== documentHeight ) {

                        documentWidth = docWidth;
                        documentHeight = docHeight;

                        $.waypoints( 'refresh' );
                    }
                });
            }
        };

        return mediator;
    }
);