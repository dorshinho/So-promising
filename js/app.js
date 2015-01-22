window.onload = app;

// runs when the DOM is loaded
function app() {
    "use strict";

    // load some scripts (uses promises :D)
    loader.load(
        //css
        {
            url: "./dist/style.css"
        },
        //js
        {
            url: "./bower_components/jquery/dist/jquery.min.js"
        }, {
            url: "./bower_components/lodash/dist/lodash.min.js"
        }
        // {url: "./bower_components/backbone/backbone.js"}
    ).then(function() {
        document.querySelector("html").style.opacity = 1;
        var token = "7c0555e739ceb57d4a4d07840111c9d533343f86"

        var githubUsername = "dorshinho";
        var url = "https://api.github.com/users/" + githubUsername + "?access_token=" + token;
        var left_col = document.querySelector(".col-1-3");
        var right_col = document.querySelector(".col-2-3");

        $.get(url).then(drawProfile);
        $.get(url).then(draw);
        function drawProfile(data) {

            left_col.innerHTML = [
                '<img src="', data.avatar_url, '"/>',
                '<h2>', data.name, '</h2>',
                '<h6>', data.company, '</h6>',
                '<h6>', data.blog, '</h6>',
                '<h6>', data.location, '</h6>',
                '<h6>', data.created_at, '</h6>'

            ].join('')
        }

        function draw(data) {

            right_col.innerHTML = [

                '<h2>', data.name, '</h2>',
                '<h6>', data.company, '</h6>',
                '<h6>', data.blog, '</h6>',
                '<h6>', data.location, '</h6>',
                '<h6>', data.created_at, '</h6>'

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
