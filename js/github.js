function GithubClient(username, token){
    this.username = username;
    this.token = token;
    this.drawToPage();
}

GithubClient.prototype.getUserInfo = function() {
    return $.get("http://api.github.com/users/"+this.username+"?access_token="+this.token)
};

GithubClient.prototype.getReposInfo = function() {
    return $.get("http://api.github.com/users/"+this.username+"/repos?access_token="+this.token)
};

GithubClient.prototype.getTemplate1 = function() {
    return $.get("./templates/leftside.html")
};

GithubClient.prototype.getTemplate2 = function() {
    return $.get("./templates/rightside.html")
};

GithubClient.prototype.getAllData = function(){
    return $.when(this.getUserInfo(), this.getReposInfo(), this.getTemplate1(), this.getTemplate2())
};

GithubClient.prototype.drawToPage = function(){
    this.getAllData().then(function(){
        //// do something with the arguments...
    })
};