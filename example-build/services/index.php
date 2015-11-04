<?php

require_once __DIR__.'/vendor/autoload.php';
require_once __DIR__.'/testJSONGenerator.php';

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\ParameterBag;

$app = new Silex\Application();

$app->before( function( Request $request ) {

    if ( 0 === strpos( $request->headers->get( 'Content-Type' ), 'application/json' ) ) {

        $data = json_decode( $request->getContent(), true );

        $request->request->replace( is_array( $data ) ? $data : array() );

    }

});

// Mlife offers grid
$app->get( '/example', function( Request $request ) use ( $app ) {

    $url = 'example/results.json';

    $json = file_get_contents( $url );

    return $json;
});

$app->run();

?>
