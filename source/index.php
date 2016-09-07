<?php
$serverName = $_SERVER['SERVER_NAME'];
echo '
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>Site Title</title>
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
';
//Local environment
if ($serverName == 'localhost') {
	echo '
		<!-- Libraries -->

		<script type="text/javascript" src="bower_components/jquery/dist/jquery.min.js"></script>
		<script type="text/javascript" src="bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
		<script type="text/javascript" src="bower_components/rivets/dist/rivets.bundled.min.js"></script>
		<script type="text/javascript" src="bower_components/underscore/underscore-min.js"></script>
		<script type="text/javascript" src="bower_components/backbone/backbone.js"></script>
		<script type="text/javascript" src="bower_components/uit.js/uit.js"></script>

	    <link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.min.css">
	</head>
	<body>
		<header id="header"></header>
		<div id="layout"></div>
		<footer id="footer"></footer>
	</body>

	<script type="text/javascript" src="application.js"></script>
	<script type="text/javascript" src="templates.js"></script>';

	ReadDirAndPrintJsFiles('models');
	ReadDirAndPrintJsFiles('collections');
	ReadDirAndPrintJsFiles('views');
	ReadDirAndPrintJsFiles('routes');
} else {
	//Production environment
}
echo '
	<!-- Start App -->
	<script type="text/javascript">
		var MainRouter = new Uit.Router.Main();
		Backbone.history.start({pushState: false});
	</script>
</html>';

function ReadDirAndPrintJsFiles($folder, $showHeaderFolder = TRUE) {
	if ($showHeaderFolder) {
		echo "\n\t<!-- ".$folder." -->";
	}
	if ($handle = opendir($folder)) {
		while (false !== ($entry = readdir($handle))) {
			if ($entry != "." && $entry != ".." && $entry[0] != ".") {
				$pwd      = $folder.'/'.$entry;
				$checkDir = is_dir($pwd);
				if ($checkDir == 1) {
					ReadDirAndPrintJsFiles($pwd, FALSE);
				} else {
					if (!(strpos($entry, '.jst.ejs') > 0)) {
						echo "\n\t<script src='".$pwd."'></script>";
					}
				}
			}
		}
		closedir($handle);
	}
}
?>