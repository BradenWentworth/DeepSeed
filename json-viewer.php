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
  <link rel="stylesheet" href="css/json-viewer.css">
</head>

<body>
  <!--[if lte IE 9]>
    <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
  <![endif]-->

  <!-- Add your site or application content here -->
  <h1>DeepSeed</h1>
  <h2>Infinitly Layered Generator</h2>
  <script src="js/vendor/modernizr-3.6.0.min.js"></script>
  <?php /* temporary disable while deving : <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script> */ ?>
  <script>window.jQuery || document.write('<script src="js/vendor/jquery-3.3.1.min.js"><\/script>')</script>
  <script src="js/plugins.js"></script>

  <script src="js/json-viewer.js"></script>

<div id="json-container"></div>

<script>
    var json = {
        name: "JsonViewer",
        author: {
          name: "overtrue",
          email: "i@overtrue.me",
          contact: [
            {
              location: "office",
              number: 123456
            },
            {
              location: "home",
              number: 987654
            }
          ]
        }
    };

    var json2 = [{"name":{"display":"name","name":"kwchA"}},{"name":{"display":"name","name":"nejks"}},{"name":{"display":"name","name":"awO"}}];

    $('#json-container').jsonview(json2); // Support json string/object
</script>

</body>

</html>
