<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>Password Generator</title
  </head>
  <body>
    <div class="container-main">

        <div class="card">
          <div class="card-title text">
            <h2>Generate a Secure Password</h2>
          </div>
          <div class="card-body">
            <textarea readonly id="password" placeholder="Your Secure Password"></textarea>
          </div>
        </div>

        <form class="password-options">
          <h4 class="text"><strong>Customize your password</strong></h4>

          <div class="length-container">
            <label class="text" id="label-text" for="password-length"><strong>Password length</strong></label>

            <div class="slider-container">
              <div class="slider-value"><span id="length-value">15</span></div>
              <div class="field">
                <div class="value left">0</div>
                  <input class="slider" type="range" id="my-range" min="0" max="30" value="15" steps="1">
                <div class="value right">30</div>
              </div>
            </div>

            <div class="checkbox-container">

              <label class="container">Uppercase
                <input id="uppercase" type="checkbox" checked>
                <span class="checkmark"></span>
              </label>

              <label class="container">Lowercase
                <input id="lowercase" type="checkbox" checked>
                <span class="checkmark"></span>
              </label>

              <label class="container">Numbers
                <input id="number" type="checkbox" checked>
                <span class="checkmark"></span>
              </label>

              <label class="container">Symbols
                <input id="symbol" type="checkbox" checked>
                <span class="checkmark"></span>
              </label>
            </div>
            <button id="generate" type="button" name="generate">Generate Password</button>
        </div>

        </form>
    </div>
    <script src="script.js"></script>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
  </body>
</html>
