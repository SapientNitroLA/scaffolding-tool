# About Services

This is the development services directory.  To add a service for testing add a route to the `index.php` file:

##### GET

To return a single JSON response:

     $app->get( '/SUB-DIRECTORY}', function () use ( $app ) {
        
        // Return `result.json` only for this service call
        $url = "example/result.json";
        
        // Return service data
        $json = file_get_contents( $url );

        return $json;
    });

Variable data can be passed as paths:

    $app->get( '/SUB-DIRECTORY/{var1}/{var2}', function ( $var1, $var2 ) use ( $app ) {
        
        // $var1 and $var2 are available
        $url = "example/" . $var1 . "/" . $var2 . ".json";
        
        // Return service data
        $json = file_get_contents( $url );

        return $json;
    });


##### POST

If you need to POST data to a service use the `$app->post()` command instead of `$app->get()`

***Example:***

Post data to example service using the `$request` argument
            
    $app->post( '/SUB-DIRECTORY/path', function ( Request $request ) use ( $app ) {

        $var1 = $request->get( 'var1' );
        $var2 = $request->get( 'var2' );
        
        // $var1 and $var2 are available
        $url = "example/" . $var1 . "/" . $var2 . ".json";
        
        // Return service data
        $json = file_get_contents( $url );

        return $json;
    });


### Directory Structure

    |    
    ├── services    
    │   │  
    |   ├── .htaccess      │   ├── composer.json      │   ├── composer.lock      │   ├── index.php      │   ├── readme.md
    │   ├── example  <--- THIS IS THE MODULE SPECIFIC SERVICE  
    │   │   └── result.json  
    │   │ 
    │   └── vendor  