require(
    [
        'jquery',
        'mediators/common',
        'modules/canvas',
        'modules/full-panel-cta',
        'modules/global-vps',
        'modules/hero-tile-cover',
        'modules/pubsub',
        'vendor/carousel',
        'vendor/carousel.pagination',
        'vendor/carousel.autorotate',
        'vendor/carousel.loop',
        'vendor/carousel.touch',
        'vendor/carousel.video',

        // Angular-specific dependencies
        'controllers/dining-reservation-controller',
        'controllers/sign-in-widget-controller',
        'directives/angular-picturefill',
        'directives/placeholder-fix-directive',
        'directives/loading-animation-directive',
        'filters/custom-filters',
        'modules/booking-widget',
        'modules/results-grid',
        'vendor/angular-custom'
    ],

    function(

        $,
        common,
        canvas,
        panelcta,
        globalvps,
        tileCover,
        pubsub,
        carousel,
        pagination,
        autorotate,
        loop,
        touch,
        video,

        // Angular-specific
        diningReservation,
        signInWidgetController,
        ngPicturefill,
        placeholderFix,
        loadingAnimation,
        customFilters,
        bookingWidget,
        resultsGrid,
        angular

    ) {

        'use strict';

        // Angular Controller Init not firing. Placing outside of global angular scope
        common.init();

        var home = {

            init: function() {

                $( this.initUI.bind( this ) );
            },

            initUI: function() {

                this.initCarousel();

                this.initAngular();

            },

            initCarousel: function() {

                var thisConfig
                    , elemConfig
                    , wClass
                    , origTilesPerFrame
                    , heroCarousel
                    , subToken
                    , hcElem = document.querySelector( '[data-crsl*=hero]' )
                    , currViewport = globalvps.current().name
                    , carouselThemeWrapper
                    , vpLookup = {
                        1: {
                            small: 1,
                            medium: 1,
                            large: 1,
                            xlarge: 1
                        },
                        2: {
                            small: 1,
                            medium: 2,
                            large: 2,
                            xlarge: 2
                        },
                        3: {
                            small: 1,
                            medium: 2,
                            large: 3,
                            xlarge: 3
                        }
                    }
                    ;

                var defaultConfig = {
                    tilesPerFrame: 1,
                    incrementMode: 'tile',
                    wrapperClass: '',
                    wrapControls: true,
                    prevText: '',
                    nextText: '',
                    themePagination: true,
                    pagination: {
                        center: false,
                        frameText: '<span>{pageNumber}</span> / {total}',
                        multipleHighlight: false
                    },
                    autorotate: {
                        stopEvent: 'click'
                    },
                    loop: true,
                    touch: true,
                    video: {
                        //class options
                        containerClass: 'video-wrapper',
                        splashClass: 'video-splash',
                        fadeInTime: 1,

                        //s7options
                        source_quality_list: {
                            desktop: '_1280x720_2000K', // 16:9
                            desktop_ogg: '_OGG_800x450_1200K',
                            tablet_high: '_iPad_768x432_1200K',
                            tablet_low: '_Mobile_512x288_600K',
                            mobile_high: '_Mobile_512x288_600K',
                            mobile_low: '_Mobile_512x288_400K'
                        }
                    },
                    ready: function() {

                        // Whole panel click init
                        var container;
                        var activeTile;

                        // Carousel properly inited (state obj available)
                        if ( this.state && this.state.dom ) {

                            container = this.state.dom.viewport;
                            activeTile = '.state-visible';
                        }

                        // Carousel not inited (probably only 1 tile): use default values
                        else {

                            container = hcElem;
                            activeTile = 'li:first-child';
                        }

                        panelcta( container, activeTile );
                    }
                };

                function updateVP() {

                    if ( currViewport !== globalvps.current().name ) {

                        globalvps.unsubscribe( subToken );

                        currViewport = globalvps.current().name;

                        // If supported number of frames is different from current number, update carousel options (triggering re-init)
                        if ( thisConfig.tilesPerFrame !== vpLookup[ origTilesPerFrame ][ currViewport ] ) {

                            thisConfig.tilesPerFrame = vpLookup[ origTilesPerFrame ][ currViewport ];
                            heroCarousel.x.trigger( 'updateOptions', { tilesPerFrame: thisConfig.tilesPerFrame } );
                        }

                        subToken = globalvps.subscribe( currViewport, updateVP );
                    }
                }

                // Hero Carousel exists
                if ( !hcElem ) { return; }

                thisConfig = $.extend( {}, defaultConfig, { element:hcElem } );

                // Hero Cover Carousel
                if ( hcElem.getAttribute( 'data-crsl' ) === 'hero-cover' ) {

                    thisConfig = $.extend( thisConfig, {
                        wrapperClass: 'cover',
                        ready: function() {

                            tileCover( 0, true ); //init tile cover functionality (load first tile, position tiles = true)
                            panelcta( this.viewport, '.state-visible' );
                        }
                    });
                }

                // Standard Hero Carousel
                else {

                    if ( hcElem.getAttribute( 'data-crsl-config' ) ) {

                        // Replace single quotes with double (JSON.parse throws error otherwise)
                        elemConfig = JSON.parse( hcElem.getAttribute( 'data-crsl-config' ).replace( /'/g, '"' ) );

                        // Prevent overwriting of default autorotation object attributes
                        $.extend( elemConfig.autorotate, thisConfig.autorotate );
                        thisConfig = $.extend( thisConfig, elemConfig );

                        origTilesPerFrame = thisConfig.tilesPerFrame;

                        // Update tilesPerFrame option if current viewport doesn't support visible tile count
                        if ( thisConfig.tilesPerFrame !== vpLookup[ thisConfig.tilesPerFrame ][ currViewport ] ) {

                            thisConfig.tilesPerFrame = vpLookup[ thisConfig.tilesPerFrame ][ currViewport ];
                        }

                        subToken = globalvps.subscribe( currViewport, updateVP );

                        if ( thisConfig.tilesPerFrame ) {

                            wClass = 'col-' + thisConfig.tilesPerFrame;
                            thisConfig.wrapperClass = wClass;

                        }
                    }
                }

                function updatePaginationTheme(){
                    carouselThemeWrapper = document.querySelector( '.carousel-controls' );

                    if ( carouselThemeWrapper ) {
                        carouselThemeWrapper.className = $( hcElem ).find('li.state-visible:eq(0) .hero-tile').hasClass( 'dark' ) ? 'carousel-controls dark' : 'carousel-controls light' ;
                    }

                }

                heroCarousel = carousel.create( thisConfig );

                updatePaginationTheme();

                heroCarousel.x.subscribe( 'carousel/pagination/theme',updatePaginationTheme);

            },

            initAngular: function() {

                // App/Module definition
                angular.module( 'Home',
                    [
                        'BookingWidget',
                        'SignInWidget.controllers',
                        'ResultsGrid',
                        'DiningReservation.controllers',
                        'ngAnimate',
                        'ng.picturefill',
                        'Placeholder.directive',
                        'Custom.filters',
                        'LoadingAnimation.directive'
                    ]
                );

                /*
                 * Bootstrap application dynamically to `document` as there is no access to global header elements inside AEM.
                 */
                angular.bootstrap( document, [ 'Home' ] );
            }

        };

        home.init();
    }
);