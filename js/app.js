window.onload = app;

// runs when the DOM is loaded
function app(){
    "use strict";

    // load some scripts (uses promises :D)
    loader.load(
        //css
        {url: "./dist/style.css"},
        //js
        {url: "./bower_components/jquery/dist/jquery.min.js"},
        {url: "./bower_components/lodash/dist/lodash.min.js"}
        // {url: "./bower_components/backbone/backbone.js"}
    ).then(function(){
        document.querySelector("html").style.opacity = 1;
  var token = "7c0555e739ceb57d4a4d07840111c9d533343f86"

 var githubUsername = "dorshinho";
        var url = "https://api.github.com/users/"+githubUsername+"?access_token="+token;

        $.get(url).then(drawProfile);

        function drawProfile(data) {

            document.body.innerHTML = [
    '<img src="', data.avatar_url,'"/>',
    '<h2> blog:',data.blog,'</h2>',
    '<h1>',data.login,'</h1>',
    '<h2> blog:',data.blog,'</h2>',

            ].join('')
        }

    })



    // var myRequest = new XMLHttpRequest();
    // myRequest.onload = function(){
    //     var json = JSON.parse(this.responseText);
    //     console.log(json);
    //     callback(json, this.statusMessage, this)
    // };
    // myRequest.open("get", "https://api.github.com/users/matthiasak", true);
    // myRequest.send();

}

