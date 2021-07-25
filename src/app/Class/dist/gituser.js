"use strict";
exports.__esModule = true;
exports.Users = void 0;
var Users = /** @class */ (function () {
    function Users(id, avatar_url, name, html_url, location, public_repos, followers, following, updated_at) {
        this.id = id;
        this.avatar_url = avatar_url;
        this.name = name;
        this.html_url = html_url;
        this.location = location;
        this.public_repos = public_repos;
        this.followers = followers;
        this.following = following;
        this.updated_at = updated_at;
    }
    return Users;
}());
exports.Users = Users;
