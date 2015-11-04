/*
 * This file loads all polyfills from the `vendor` directory
 * and is loaded as a dependency inside `mediator/common.js`.
 */

define(
    [
        'vendor/matchmedia',
        'vendor/matchMedia.addListener',
        'vendor/function.prototype.bind',
        'vendor/object.create',
        'vendor/storage.prototype'
    ],

    function() {}
);