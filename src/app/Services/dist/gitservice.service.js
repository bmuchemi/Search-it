"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.GitserviceService = void 0;
var core_1 = require("@angular/core");
var GitserviceService = /** @class */ (function () {
    function GitserviceService() {
    }
    GitserviceService.prototype.getData = function () {
        return this.http.get("https://api.github.com/users/" + this.username + "?access_token=" + environment.api_key);
    };
    GitserviceService.prototype.getRepos = function () {
        return this.http.get("https://api.github.com/users/" + this.username + "/repos?access_token=" + environment.api_key);
    };
    GitserviceService.prototype.getName = function (username) {
        this.username = username;
    };
    GitserviceService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], GitserviceService);
    return GitserviceService;
}());
exports.GitserviceService = GitserviceService;
