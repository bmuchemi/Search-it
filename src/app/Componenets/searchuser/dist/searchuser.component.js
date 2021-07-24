"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SearchuserComponent = void 0;
var core_1 = require("@angular/core");
var SearchuserComponent = /** @class */ (function () {
    function SearchuserComponent(dataService) {
        this.dataService = dataService;
    }
    SearchuserComponent.prototype.getUserData = function () {
        this.dataService.getName(this.username);
        this.dataService.getData().subscribe(function (res) {
            console.log(res);
        }, function (error) {
        });
        this.dataService.getRepos().subscribe(function (repo) {
            console.log(repo);
            ;
        });
    };
    SearchuserComponent.prototype.ngOnInit = function () {
    };
    SearchuserComponent = __decorate([
        core_1.Component({
            selector: 'app-searchuser',
            templateUrl: './searchuser.component.html',
            styleUrls: ['./searchuser.component.css']
        })
    ], SearchuserComponent);
    return SearchuserComponent;
}());
exports.SearchuserComponent = SearchuserComponent;
