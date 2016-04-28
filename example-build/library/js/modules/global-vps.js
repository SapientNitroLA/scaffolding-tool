/*
 * Docs can be viewed at https://github.com/ryanfitzer/ViewportJS
 */
define(
    [
        'vendor/viewport'
    ],
    function(

        viewport

    ) {

        'use strict';

        var globalViewport = viewport([
            {
                name: 'small',
                width: [ 0, 744 ] // ( min-width:0px ) and ( max-width:744px )
            },
            {
                name: 'medium',
                width: [ 745, 924 ] // ( min-width:745px ) and ( max-width:924px )
            },
            {
                name: 'large',
                width: [ 925, 1152 ] // ( min-width:925px ) and ( max-width:1152px )
            },
            {
                name: 'xlarge',
                width: [ 1153 ] // ( min-width:1153px )
            }
        ]);

        return globalViewport;

    }
);
