<?php

$base_file = basename( $_SERVER[ 'SCRIPT_NAME' ] );
$base_url = str_replace( array( $base_file, '//' ), array( '', '/' ), $_SERVER[ 'SCRIPT_NAME' ] );
$base_url = preg_replace( '/^\//', '', $base_url );
define( 'BASE_URL', '//' . $_SERVER[ 'HTTP_HOST' ] . '/' . $base_url );
define( 'BASE_PATH', str_replace( array( '//' ), array( '/' ) , dirname( __FILE__ ) ) );

/**
 * Populate a txt file with all flagged files
 *
 * @todo Set defaults
 */
function acme_flag( $comment ) {

  $sep = ' | ';
  $newline = "\n";
  $root = $_SERVER[ 'HTTP_HOST' ];
  $caller = $_SERVER[ 'SCRIPT_NAME' ];
  $url = '//' . $root . $caller;
  $file = BASE_PATH . 'logs/Flagged.txt';
  $comment = '[file] ' . basename( $caller ) . $sep . '[url] ' . $url . $sep . '[comment] ' . $comment . $newline;
  $content_r = file( $file );
  $content_r[] = $comment;

  $handle = fopen( $file, 'w' ) or die('Error opening Flagged.txt');

  $output_r = array_unique( $content_r );

  foreach( $output_r as $line ) fwrite( $handle, $line );

  fclose( $handle );

}

/*
  In-progress
*/
function acme_build_flagged_index( $path ) {


  $flagged_array = acme_get_flagged_file_array( $path );

  $tmpl_index   = '<div class="index">%s</div>';
  $tmpl_section = '<a href="#%s">%s</a>';
  $tmpl_row     = '<div id="%s" class="item-set"><h2>%s <a class="top" href="#">top &uarr;</a></h2><ul>%s</ul></div>';
  $tmpl_item    = '<li><p class="file-name"><a href="%s">%s</a></p>%s</li>';
  $tmpl_comment = '<p class="comment">%s</p>';
  $tmp_flag_count = '<p class="flag-count"><strong>%s</strong> flags in <strong>%s</strong> files</p>';

  $markup   = '';
  $section  = '';
  $items    = '';
  $comments = '';
  $flag_count = 0;
  $file_count = 0;

  $props_r = array();

  foreach ( $flagged_array as $item ) :

    foreach ( $item as $key => $val ) :
      preg_match( '/^\w/', $key, $matches );
      $letter = strtolower( $matches[0] );
      $results[ $letter ][] = $item;
    endforeach;

  endforeach;

  ksort( $results );

  foreach( $results as $key => $value ) :

    $items = '';
    $section .= '  ' . sprintf( $tmpl_section, $key, $key );

    foreach( $value as $files ) :

      foreach ( $files as $file => $attrs ) :
        $comments = '';

        foreach( $attrs[ 'comments' ] as $comment ) :

          $comments .= str_replace( '@FLAG', '', sprintf( $tmpl_comment, $comment ) );

          $flag_count++;

        endforeach;

        $items .= sprintf( $tmpl_item, $attrs[ 'path' ], $file, $comments );

        $file_count++;

      endforeach;

    endforeach;

    $markup .= sprintf( $tmpl_row, $key, $key, $items );

  endforeach;

  $markup = sprintf( $tmpl_index, $section ) . sprintf( $tmp_flag_count, $flag_count, $file_count ) . $markup;

  // section

  echo $markup;

}

/**
 * Return an array of marked files as a flat array
 *
 * @todo Set defaults
 * @link http://www.php.net/manual/en/function.scandir.php#79342
 */
function acme_get_flagged_file_array( $rootDir, $inpatterns = false, $xnames = array(), $xpattterns = array() ) {


  $ignore_names = '/' . implode( '|',  array_merge( array( /*'.', '..',*/ 'flagged', '.svn', '.git', '.htaccess', '.htpasswd', 'images', '.DS_Store', 'node_modules' ), $xnames ) ) . '/';
  $ignore_patterns = '/__|_|PHPLOGIC|SERVICE/';

  $file_r = array();

  // $objects = new RecursiveIteratorIterator(new RecursiveDirectoryIterator( BASE_PATH ), RecursiveIteratorIterator::SELF_FIRST);
  $objects = new RecursiveIteratorIterator(new RecursiveDirectoryIterator( $rootDir ), RecursiveIteratorIterator::SELF_FIRST);

  $is_mac = preg_match( '/(Mac_PowerPC)|(Macintosh)/i', strtolower( $_SERVER['HTTP_USER_AGENT'] ) );

  foreach ( $objects as $name => $object ) :

    if ( preg_match( '/acme/', $name ) || preg_match( $ignore_names, $name ) ) continue;


    $contents = file( $name );
    $contents = $contents ? $contents : 'Damn!';

    $tmp_r = explode('/', $name );
    $tmp_name = end( $tmp_r );
    $tmp_comments = array();

    $comment_opening_tags = array( '/*', '//', '<!--' );
    $comment_closing_tags = array( '*/', '-->' );

    $name = $is_mac ? 'txmt://open/?url=file://' . $name : $name;
    $line_number = 0;

    if ( $contents === 'Damn!' ) continue;

    foreach ( $contents as $key => $value ) :
      $line_number++;

      if ( preg_match( '/@FLAG/', $value ) ) :
        $value = str_replace( $comment_closing_tags, '', str_replace( $comment_opening_tags, 'deleteme', $value ) );
        $value = htmlentities( end( explode( 'deleteme', $value ) ) );

        $comment_span = '<span class="line-number">Line ' . $line_number . ':</span> ' . trim( $value );
        $comment_link = '<a class="line-number" href="' . $name . '&line=' . $line_number . '">Line ' . $line_number . ':</a> ' . trim( $value );

        $tmp_comment = $is_mac ? $comment_link : $comment_span;

        $tmp_comments[] = $tmp_comment;
      endif;

    endforeach;

    if ( count( $tmp_comments ) ) :



      $file_r[][ $tmp_name ] = array(
        'path' => $name,
        'comments' => $tmp_comments
      );

    endif;

  endforeach;

  return $file_r;

}

/**
 * Return a directory as a multi-dimensional array
 *
 * @todo Set defaults
 * @link http://www.php.net/manual/en/function.scandir.php#79342
 */
function acme_get_dir_array( $rootDir, $inpatterns, $xnames = array(), $xpattterns = array() ) {

  $ignore_names = array_merge( array( '.', '..', '.svn', '.htaccess', '.htpasswd', 'images', 'media' ), $xnames );
  $ignore_patterns = '/' . implode( '|',  array_merge( array( '__', '_', 'PHPLOGIC', 'SERVICE' ), $xpattterns ) ) . '/';
  $inpatterns = $inpatterns ? $inpatterns : false;
  $dirContent = scandir( $rootDir );
  $allData = array();
  $fileCounter = 0;

  foreach( $dirContent as $key => $content ) :

    $path = $rootDir . $content;

    if ( !in_array( $content, $ignore_names ) ) :

      if ( preg_match( $ignore_patterns, $path ) ) continue;
      if ( !preg_match( $inpatterns, $path ) ) continue;

      if ( is_file( $path ) && is_readable( $path ) ) :

        $tmpPathArray = explode( '/', $path );
        $allData[ $fileCounter ][ 'fileName' ] = end( $tmpPathArray );
        $allData[ $fileCounter ][ 'filePath' ] = $path;
        $filePartsTmp = explode( '.', end( $tmpPathArray ) );
        $allData[ $fileCounter ][ 'fileExt' ] = end( $filePartsTmp );
        $allData[ $fileCounter ][ 'fileDate' ] = filectime( $path );
        $allData[ $fileCounter ][ 'fileSize' ] = filesize( $path );

        $fileCounter++;

      elseif ( is_dir( $path ) && is_readable( $path ) ) :

        $dirNameArray = explode( '/', $path );
        $allData[ $path ][ 'dirPath' ] = $path;
        $allData[ $path ][ 'dirName' ] = end( $dirNameArray );
        $allData[ $path ][ 'content' ] = acme_get_dir_array( $path . '/', $inpatterns );

      endif;

    endif;

  endforeach;

  return $allData;
}