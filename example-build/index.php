<?php

  function getDirectoryList( $src ) {

    // create an array to hold directory list
    $results = array();
    $output = "";

    // create a handler for the directory
    $handler = opendir( $src );

    // open directory and walk through the filenames
    while ( $dir = readdir( $handler ) ) {

      // if file isn't this directory or its parent, add it to the results
      if ( $dir !== "." && $dir !== ".." && $dir !== ".DS_Store" && $dir !== "includes" ) {

        $results[] = $dir;
        $output .= '<li><a href="' . $src . $dir . '">' . ucfirst( $dir ) . '</a></li><br/>' . "\n";

      }

    }

    // tidy up: close the handler
    closedir( $handler );

    // done!
    return $output;

  }

?>
<!--#include virtual="pages/includes/document-header.html" -->

    <style type="text/css">
        body {
          background:#f2f2f2;
          width:100%;
          font-family: sans-serif;
        }
        .wrapper {
          box-sizing:border-box;
          margin-bottom: 25px;
        }
        a:hover {
          color:#bda770;
        }
        h1 {
          margin-bottom:30px;
        }
        h2, h3 {
          color:#999;
          margin-bottom:10px;
        }
        h2 a,
        h3 a {
          color:#999;
          text-decoration:none;
        }
        .wrapper > li,
        .wrapper > ul > li {
          margin-bottom:25px;
        }
        ul {
          padding-left: 0;
        }
        li {
          margin-bottom:5px;
          list-style: none;
        }
        li a {
          color: black;
          padding:10px;
          display:block;
          background:white;
          border-radius:5px;
          letter-spacing:1px;
          text-decoration:none;
          box-shadow:1px 1px 2px 0px rgba(0, 0, 0, 0.15);
        }
        ul li a,
        ul li li {
          margin-bottom: 5px;
        }
        ul li li a {
          color:#999;
        }
        ul ul li a {
          padding-left: 25px;
        }
        ul ul li a::before {
          content: '\2022   ';
        }
    </style>
</head>
<body>
<div class="wrapper section-wrapper">

  <h1>Project Index</h1>

  <h3>Templates</h3>

  <ul>
    <?= getDirectoryList( "./pages/" ); ?>
  </ul>

  <h3><a href="">Remote Server</a> (<code>username/password</code>)</h3>

  <ul>
    <li><a href="">Releases</a></li>
    <li><a href="">QA</a></li>
    <li><a href="">Review</a></li>
  </ul>

  <h3><a href="docs">Documentation</a></h3>

  <h3><a href="resources">Resources</a></h3>

  <ul>
    <?= getDirectoryList( "./resources/" ); ?>
  </ul>

</div>

</body>
</html>
