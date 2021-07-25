"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DateconvertPipe = void 0;
var core_1 = require("@angular/core");
var DateconvertPipe = /** @class */ (function () {
    function DateconvertPipe() {
    }
    DateconvertPipe.prototype.transform = function (value) {
        if (value) {
            var seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
            if (seconds < 29)
                return 'Just now';
            var intervals = {
                'year': 31536000,
                'month': 2592000,
                'week': 604800,
                'day': 86400,
                'hour': 3600,
                'minute': 60,
                'second': 1
            };
            var counter = void 0;
            for (var i in intervals) {
                counter = Math.floor(seconds / intervals[i]);
                if (counter > 0)
                    if (counter === 1) {
                        return counter + ' ' + i + ' ago';
                    }
                    else {
                        return counter + ' ' + i + 's ago';
                    }
            }
        }
        return value;
    };
    DateconvertPipe = __decorate([
        core_1.Pipe({
            name: 'dateconvert'
        })
    ], DateconvertPipe);
    return DateconvertPipe;
}());
exports.DateconvertPipe = DateconvertPipe;
