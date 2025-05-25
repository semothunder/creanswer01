<!DOCTYPE html>
<html lang="ko" style="color: #fff;">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Main Resolution Redirect</title>
    <script type="text/javascript">
        var filter = "win16|win32|win64|mac|macintel";
        if (navigator.platform) {
            if (filter.indexOf(navigator.platform.toLowerCase()) < 0) {
                location.href = "http://creanswer.com/m";
            }
        }

        var screenWidth = window.screen.width;
        if (screenWidth <= 3439) {
            location.href = "http://creanswers.cafe24.com/test-main/1920";
        } else if (screenWidth >= 3440 && screenWidth <= 5119) {
            location.href = "http://creanswers.cafe24.com/test-main/3440";
        } else if (screenWidth >= 5120) {
            location.href = "http://creanswers.cafe24.com/test-main/5120";
        }
    </script>



</head>
<body>
 <P></P>

</body>
</html>
