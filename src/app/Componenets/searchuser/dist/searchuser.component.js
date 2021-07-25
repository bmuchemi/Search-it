"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SearchUserComponent = void 0;
var gitservice_service_1 = require("./../../Services/gitservice.service");
var core_1 = require("@angular/core");
var SearchUserComponent = /** @class */ (function () {
    function SearchUserComponent(getData) {
        this.getData = getData;
        this.now = new Date();
        this.display = true;
        this.hide = false;
    }
    SearchUserComponent.prototype.getUserData = function () {
        var _this = this;
        this.getData.getName(this.username);
        this.getData.getData().subscribe(function (res) {
            console.log(res);
            _this.data = res;
        }, function (error) {
            _this.data = error;
        });
        this.getData.getRepos().subscribe(function (repo) {
            console.log(repo);
            _this.work = repo;
        }, function (error) {
            _this.work = null;
        });
    };
    SearchUserComponent.prototype.viewRepositories = function () {
        this.display = !this.display;
        this.hide = !this.hide;
    };
    SearchUserComponent.prototype.ngOnInit = function () {
        this.username = 'bmuchemi';
        this.getUserData();
    };
    SearchUserComponent = __decorate([
        core_1.Component({
            selector: 'app-searchuser',
            templateUrl: './searchuser.component.html',
            styleUrls: ['./searchuser.component.css'],
            providers: [gitservice_service_1.GitserviceService]
        })
    ], SearchUserComponent);
    return SearchUserComponent;
}());
exports.SearchUserComponent = SearchUserComponent;
