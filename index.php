<!doctype html>
<html class="no-js" lang="">

<head>
	<meta charset="utf-8">
	<meta http-equiv="x-ua-compatible" content="ie=edge">
	<title>DeepSeed</title>
	<meta name="description" content="">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

	<link rel="manifest" href="site.webmanifest">
	<link rel="apple-touch-icon" href="icon.png">
	<!-- Place favicon.ico in the root directory -->

	<link rel="stylesheet" href="css/normalize.css">
	<link rel="stylesheet" href="css/main.css">
</head>

<body class="deepseed">
	<!--[if lte IE 9]>
	<p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
  <![endif]-->
	<h1>DeepSeed</h1>
	<h2>Braden Wentworth 2018</h2>
	<div class="search_wrapper">
		<div class="search">
			<input type="text" id="input_template" value="" placeholder="template" />
			<input type="text" id="input_params" value="" placeholder="parameters" />
			<label class="button" for="input_searchbtn">Run</label>
			<input class="hide" type="button" id="input_searchbtn" value="run" onclick="search()" />
			<label class="button" for="input_file">Load Local Module</label>
			<input class="hide" type="file" id="input_file" name="input_file" webkitdirectory mozdirectory msdirectory odirectory directory multiple="multiple" />
			<!--<label class="button" for="input_help">Help</label>
			<input class="hide" type="button" id="input_help" name="input_help" />-->
		</div>
	</div>

	<div id="container"></div>

	<script src="js/vendor/modernizr-3.6.0.min.js"></script>
	<script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
	<script>
		window.jQuery || document.write('<script src="js/vendor/jquery-3.3.1.min.js"><\/script>')
	</script>
	<script src="js/vendor/lodash.min.js"></script>
	<script src="js/deepseed.js"></script>
	<script src="js/random.js"></script>
	<!-- Default Modules Begin -->
	<?php
	
	LoadDefaultModeuls();

	function LoadDefaultModeuls()
	{
		$exts = ["renderer.css", "template.js", "renderer.js"];
		$path = './modules/*.'.GlobExtensions($exts);
		
		// load all files
		$files = recursive_glob($path, GLOB_BRACE);

		foreach ($files as $filename)
		{
			$pi = pathinfo($filename);

			// load all js scripts
			if ($pi['extension'] == "js")
			{
				echo '<script type="text/javascript" src="'.$filename.'"></script>';
			}

			if ($pi['extension'] == "css")
			{
				echo '<link rel="stylesheet" href="'.$filename.'">';
			}
		}
	}

	// build glob 'regex' chunk for array of file extensions
	function GlobExtensions($extenstions)
	{
	  $final = "{";
	  foreach ($extenstions as $extension)
	  {
		$extensionChars = str_split($extension);
		$rgxPartial = null;
		foreach ($extensionChars as $char)
		{
		  $rgxPartial .= "[".strtoupper($char).strtolower($char)."]";
		}
		$rgxPartial .= ",";
		$final .= $rgxPartial;
	  };
	  $final .= "}";

	  return $final;
	}

	
	// return all files including files from subfolders
	function recursive_glob($pattern, $flags)
	{
		$first_files = glob($pattern, $flags);
		if (is_array($first_files))
		{
			foreach (glob(dirname($pattern).'/*', $flags) as $dir)
			{
				$first_files = array_merge($first_files, recursive_glob($dir.DIRECTORY_SEPARATOR.basename($pattern), $flags));
			}
		}
		else
		{
			// glob aparently can return a bool, we dont want that in a recursive array function
			return [];
		}
		return $first_files;
	}
	?>
	<!-- Default Modules End -->
	<script>
		//////////////////////////////////////////////////////////////////////////
		// DeepSeed
		//////////////////////////////////////////////////////////////////////////
		var t = DeepSeed.Generate("<?php if (!empty($_GET['t'])){echo $_GET['t'];}else{echo"npc";}?>", null, {
			count: 5
		});
		console.log(t);
		$("#container").html(DeepSeed.Render(t));
		DeepSeed.ExecuteRenderers();

		//////////////////////////////////////////////////////////////////////////
		// Search
		//////////////////////////////////////////////////////////////////////////
		function search() {
			var q = $("#input_template").val();
			var p = $("#input_params").val();
			if (p != null && p != "") {
				p = JSON.parse(p);
			}
			var r = DeepSeed.Generate(q, null, p);
			console.log("generated!");
			console.log(r);
			if (r != null) {
				$("#container").html(DeepSeed.Render(r));
				DeepSeed.ExecuteRenderers();
			}
		}

		// submit search on 'enter'
		$("#input_template, #input_params").keyup(function (event) {
			if (event.keyCode === 13) {
				$("#input_searchbtn").click();
			}
		});


		// allow loading local templates and renderers
		$("#input_file").on("change", function (element) {
			console.log("loading file: " + element.target.files[0].name);

			for (var i = 0; i < element.target.files.length; i++) {
				var extension = element.target.files[i].name.split('.').pop().toLowerCase();
				if (extension == "js") {
					var FR = new FileReader();
					FR.onload = function (e) {
						console.log(e.target.result);
						var scrip = '<script src="' + e.target.result + '"><\/script>';
						$("head").append(scrip);
					};

					FR.readAsDataURL(element.target.files[i]);
				}
				if (extension == "css") {
					var FR = new FileReader();
					FR.onload = function (e) {
						console.log(e.target.result);
						var style = '<style>' + e.target.result + '<\/style>';;
						$("head").append(style);
					};

					FR.readAsText(element.target.files[i]);
				}
			}
		});
	</script>
</body>
</html>