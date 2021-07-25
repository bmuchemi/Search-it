"use strict";
exports.__esModule = true;
exports.Repos = void 0;
var Repos = /** @class */ (function () {
    function Repos(name, watchers_count, forks_count, stargazers_count, description) {
        this.name = name;
        this.watchers_count = watchers_count;
        this.forks_count = forks_count;
        this.stargazers_count = stargazers_count;
        this.description = description;
    }
    return Repos;
}());
exports.Repos = Repos;
