<!DOCTYPE html>

<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
        <title>felix temporem</title>
    </head>

    <body>

        <div class="container" id="container">
            <div class="container-2" id="container-2">

                <h2>felix temporem</h2>

                <h6>a web app by joseph</h6> 

                <button class="button-circle animate__animated animate__pulse animate__infinite" id="button-one" onclick="revealData()">

                    feel<br>the<br>weather
                    
                </button>

                <div class="status-container">

                <h1 class="hidden" id="main-temp"></h1>

                <h3 id="conditions" class="hidden" style="margin-top:0;"></h3>

                <h3 id="local" class="hidden">flagstaff, az</h3>

                <h3 id="color-output" class="hidden"></h3>


                </div>

                <button class="again-class hidden" id="again" onclick="rC2()">again</button>


                <div class="list-container">
                    <ul>
                        <li>joseph s. | 2023</li>
                        <li>built with ❤️</li>
                    </ul>
                </div>

            </div>

        </div>
        
        <script src="main.js"></script>

    </body>

</html>