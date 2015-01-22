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
        var profile_url = "https://api.github.com/users/" + githubUsername + "?access_token=" + token;
        var repos_url = "https://api.github.com/users/" + githubUsername + "/repos?access_token=" + token;

        var leftside_template_url = "./templates/leftside.html";
        var rightside_template_url = "./templates/rightside.html";


        var promise1 = $.get(profile_url);
        var promise2 = $.get(leftside_template_url);
        var promise3 = $.get(rightside_template_url);
        var promise4 = $.get(repos_url);

        $.when( promise2, promise1 ).then( drawProfile )

        function drawProfile() {
            var template = arguments[0]
            var data = arguments[1];
            document.querySelector('.left').innerHTML += _.template(template[0], data[0]);
        }

        $.when(promise3 , promise4).then( drawProfile2 )

        function drawProfile2() {
            // alert()
            var template = arguments[0]
             // alert(JSON.stringify(promise4))
            var data = arguments[1]
            console.log(data);

            data[0].forEach(function(value, index, array) {
                // RIGHT .innerHTML += _
                document.querySelector('.right').innerHTML += _.template(template[0], value);
            })


            // document.querySelector('.right').innerHTML += _.template(data[0],template[0]);
        }

    })
}







    // var myRequest = new XMLHttpRequest();
    // myRequest.onload = function(){
    //     var json = JSON.parse(this.responseText);
    //     console.log(json);
    //     callback(json, this.statusMessage, this)
    // };
    // myRequest.open("get", "https://api.github.com/users/matthiasak", true);
    // myRequest.send();


