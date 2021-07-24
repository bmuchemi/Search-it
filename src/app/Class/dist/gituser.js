"use strict";
exports.__esModule = true;
exports.Gituser = void 0;
var Gituser = /** @class */ (function () {
    function Gituser(name, html_url, location, public_repos, followers, following) {
        this.name = name;
        this.html_url = html_url;
        this.location = location;
        this.public_repos = public_repos;
        this.followers = followers;
        this.following = following;
    }
    return Gituser;
}());
exports.Gituser = Gituser;
