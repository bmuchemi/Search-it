"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FormComponent = void 0;
var core_1 = require("@angular/core");
var FormComponent = /** @class */ (function () {
    function FormComponent(getData) {
        this.getData = getData;
        this.display = true;
        this.hide = false;
    }
    FormComponent.prototype.getUserData = function () {
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
    FormComponent.prototype.viewRepositories = function () {
        this.display = !this.display;
        this.hide = !this.hide;
    };
    FormComponent.prototype.ngOnInit = function () {
    };
    FormComponent = __decorate([
        core_1.Component({
            selector: 'app-form',
            templateUrl: './form.component.html',
            styleUrls: ['./form.component.css']
        })
    ], FormComponent);
    return FormComponent;
}());
exports.FormComponent = FormComponent;
