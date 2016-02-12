<!DOCTYPE html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>PHP Info</title>

</head>
<body>

<?php

  // Show all information, defaults to INFO_ALL
  phpinfo();
  
  // Show just the module information.
  // phpinfo(8) yields identical results.
  phpinfo(INFO_MODULES);

?>

</body>
</html>